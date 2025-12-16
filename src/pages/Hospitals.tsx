import React, { useState, useMemo } from "react";
import {
  Card,
  Select,
  Typography,
  Tag,
  Empty,
  Button,
  Row,
  Col,
  Input,
  Pagination,
  Modal,
  Tooltip,
} from "antd";
import { hospitalsData } from "../data/mockData";
import { Hospital } from "../types"; // Đảm bảo import đúng type
import {
  EnvironmentTwoTone,
  PhoneFilled,
  ShopOutlined,
  GlobalOutlined,
  MedicineBoxOutlined,
  SearchOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const cityDisplayMap: Record<string, string> = {
  "Ho Chi Minh": "TP. Hồ Chí Minh",
  "Ha Noi": "Hà Nội",
  "Da Nang": "Đà Nẵng",
  "Can Tho": "Cần Thơ",
  "Hai Phong": "Hải Phòng",
  "Nha Trang": "Nha Trang",
  Hue: "Huế",
  "Vung Tau": "Vũng Tàu",
  "Da Lat": "Đà Lạt",
  "Bien Hoa": "Biên Hòa",
  "Binh Duong": "Bình Dương",
  "Long Xuyen": "Long Xuyên",
  "Rach Gia": "Rạch Giá",
  "Ca Mau": "Cà Mau",
};

const Hospitals: React.FC = () => {
  const [city, setCity] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);

  // Map Modal State
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(
    null
  );

  const cities = useMemo(() => {
    const uniqueCities = Array.from(new Set(hospitalsData.map((h) => h.city)));
    return uniqueCities.sort((a, b) => {
      const nameA = cityDisplayMap[a] || a;
      const nameB = cityDisplayMap[b] || b;
      return nameA.localeCompare(nameB);
    });
  }, []);

  // 1. Filter Logic
  const filteredData = hospitalsData.filter((h) => {
    const matchCity = city ? h.city === city : true;
    const matchType = type ? h.type === type : true;
    const matchSearch = searchText
      ? h.name.toLowerCase().includes(searchText.toLowerCase()) ||
        h.address.toLowerCase().includes(searchText.toLowerCase()) ||
        h.phone.toLowerCase().includes(searchText.toLowerCase())
      : true;
    return matchCity && matchType && matchSearch;
  });

  // 2. Pagination Logic
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Helper to get type color/icon
  const getTypeInfo = (type: string) => {
    switch (type) {
      case "International":
        return { color: "gold", icon: <GlobalOutlined />, label: "Quốc tế" };
      case "Private":
        return { color: "cyan", icon: <ShopOutlined />, label: "Tư nhân" };
      default:
        return {
          color: "blue",
          icon: <MedicineBoxOutlined />,
          label: "Công lập",
        };
    }
  };

  // Helper function to handle map opening
  const handleOpenMap = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    setIsMapOpen(true);
  };

  return (
    <div>
      {/* Hero / Header Section */}
      <div className="page-header-container">
        <Title level={2} className="page-title">
          Hệ thống Bảo lãnh Viện phí
        </Title>
        <Text className="page-subtitle">
          Tìm kiếm bệnh viện, phòng khám liên kết gần bạn nhất để được hỗ trợ
          chi phí trực tiếp.
        </Text>
      </div>

      {/* Filter Bar */}
      <Card
        styles={{ body: { padding: "20px 24px" } }}
        style={{ marginBottom: 32 }}
      >
        <Row align="middle" justify="space-between" gutter={[16, 16]}>
          {/* Left Side: Filters */}
          <Col xs={24} lg={18}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              {/* City Select */}
              <div style={{ flex: "1 1 200px" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 500,
                    marginBottom: 8,
                  }}
                >
                  Khu vực:
                </span>
                <Select
                  style={{ width: "100%" }}
                  size="large"
                  placeholder="Tất cả thành phố"
                  onChange={(val) => {
                    setCity(val);
                    setCurrentPage(1);
                  }}
                  allowClear
                  showSearch
                  filterOption={(input, option) =>
                    (option?.children as unknown as string)
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                >
                  {cities.map((cityKey) => (
                    <Option key={cityKey} value={cityKey}>
                      {cityDisplayMap[cityKey] || cityKey}
                    </Option>
                  ))}
                </Select>
              </div>

              {/* Type Select */}
              <div style={{ flex: "1 1 180px" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 500,
                    marginBottom: 8,
                  }}
                >
                  Loại hình:
                </span>
                <Select
                  style={{ width: "100%" }}
                  size="large"
                  placeholder="Tất cả loại hình"
                  onChange={(val) => {
                    setType(val);
                    setCurrentPage(1);
                  }}
                  allowClear
                >
                  <Option value="Public">Công lập</Option>
                  <Option value="Private">Tư nhân</Option>
                  <Option value="International">Quốc tế</Option>
                </Select>
              </div>

              {/* Search Input */}
              <div style={{ flex: "2 1 300px" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: 14,
                    fontWeight: 500,
                    marginBottom: 8,
                  }}
                >
                  Tìm kiếm:
                </span>
                <Input
                  size="large"
                  placeholder="Nhập tên bệnh viện hoặc địa chỉ..."
                  prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    setCurrentPage(1);
                  }}
                  allowClear
                />
              </div>
            </div>
          </Col>

          {/* Right Side: Count */}
          <Col xs={24} lg={6} style={{ textAlign: "right" }}>
            <div style={{ marginTop: 28 }}>
              <Text type="secondary">
                Đã tìm thấy{" "}
                <strong style={{ color: "#0050b3", fontSize: 18 }}>
                  {filteredData.length}
                </strong>{" "}
                cơ sở y tế
              </Text>
            </div>
          </Col>
        </Row>
      </Card>

      {/* Grid Implementation */}
      {filteredData.length === 0 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <span>Không tìm thấy kết quả phù hợp cho bộ lọc hiện tại.</span>
          }
        />
      ) : (
        <>
          <Row gutter={[24, 24]}>
            {currentData.map((item) => {
              const typeInfo = getTypeInfo(item.type);
              return (
                <Col key={item.id} xs={24} sm={12} md={8} lg={8} xl={6}>
                  <Card
                    hoverable
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    styles={{
                      body: {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        padding: 20,
                      },
                    }}
                  >
                    {/* Hospital Badge */}
                    <div style={{ marginBottom: 12 }}>
                      <Tag
                        icon={typeInfo.icon}
                        color={typeInfo.color}
                        style={{ borderRadius: 12, padding: "2px 10px" }}
                      >
                        {typeInfo.label}
                      </Tag>
                    </div>

                    {/* Name & Address */}
                    <div style={{ flex: 1, marginBottom: 16 }}>
                      <Tooltip title={item.name}>
                        <Text
                          strong
                          style={{
                            fontSize: 16,
                            color: "#1f1f1f",
                            lineHeight: 1.4,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            minHeight: 44, // Ensure consistent height
                          }}
                        >
                          {item.name}
                        </Text>
                      </Tooltip>
                      <div
                        style={{
                          marginTop: 12,
                          display: "flex",
                          gap: 8,
                          alignItems: "flex-start",
                        }}
                      >
                        <EnvironmentTwoTone
                          twoToneColor="#eb2f96"
                          style={{ marginTop: 3, flexShrink: 0 }}
                        />
                        <Text
                          type="secondary"
                          style={{
                            fontSize: 13,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {item.address}
                        </Text>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <Row gutter={8}>
                      <Col span={12}>
                        <Button
                          icon={<EnvironmentOutlined />}
                          block
                          onClick={() => handleOpenMap(item)}
                          style={{ borderRadius: 6 }}
                        >
                          Bản đồ
                        </Button>
                      </Col>
                      <Col span={12}>
                        <Button
                          type="primary"
                          ghost
                          icon={<PhoneFilled />}
                          block
                          href={`tel:${item.phone}`}
                          style={{ borderRadius: 6, fontWeight: 600 }}
                        >
                          Gọi
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Row>

          {/* Pagination */}
          <div
            style={{
              marginTop: 32,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Pagination
              current={currentPage}
              total={filteredData.length}
              pageSize={pageSize}
              onChange={(page, size) => {
                setCurrentPage(page);
                setPageSize(size);
              }}
              showSizeChanger
              locale={{ items_per_page: "/ trang" }}
              pageSizeOptions={["12", "24", "48", "96"]}
              showTotal={(total, range) => (
                <Text type="secondary">
                  Hiển thị {range[0]}-{range[1]} của <strong>{total}</strong> cơ
                  sở
                </Text>
              )}
            />
          </div>
        </>
      )}

      {/* MAP MODAL */}
      <Modal
        title={
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <EnvironmentTwoTone twoToneColor="#eb2f96" />
            <span>{selectedHospital?.name}</span>
          </div>
        }
        open={isMapOpen}
        onCancel={() => setIsMapOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsMapOpen(false)}>
            Đóng
          </Button>,
          <Button
            key="google"
            type="primary"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              (selectedHospital?.name || "") +
                " " +
                (selectedHospital?.address || "")
            )}`}
            target="_blank"
          >
            Mở trên Google Maps
          </Button>,
        ]}
        width={800}
        centered
        styles={{ body: { padding: 0 } }}
      >
        {selectedHospital && (
          <div
            style={{ width: "100%", height: "450px", background: "#f0f2f5" }}
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              title={selectedHospital.name}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                selectedHospital.name +
                  " " +
                  selectedHospital.address +
                  " " +
                  cityDisplayMap[selectedHospital.city] || ""
              )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              style={{ display: "block" }}
            ></iframe>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Hospitals;
