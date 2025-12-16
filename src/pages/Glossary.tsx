import React, { useState, useEffect } from "react";
import { Table, Input, Tag, Typography, Card, Empty, Space } from "antd";
import { termsData } from "../data/mockData";
import { ColumnsType } from "antd/es/table";
import { Term } from "../types";
import { SearchOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const categoryMap: Record<string, string> = {
  General: "Chung",
  Health: "Sức khỏe",
  Car: "Ô tô",
  Life: "Nhân thọ",
  Travel: "Du lịch",
};

const Glossary: React.FC = () => {
  const [data, setData] = useState<Term[]>(termsData);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Added state for pagination

  useEffect(() => {
    const value = searchText.toLowerCase();
    const filtered = termsData.filter(
      (item) =>
        item.term.toLowerCase().includes(value) ||
        item.definition.toLowerCase().includes(value)
    );
    setData(filtered);
    setCurrentPage(1); // Reset to page 1 whenever search text changes
  }, [searchText]);

  const columns: ColumnsType<Term> = [
    {
      title: "Thuật ngữ",
      dataIndex: "term",
      key: "term",
      width: "25%",
      sorter: (a, b) => a.term.localeCompare(b.term),
      render: (text) => (
        <Space>
          <InfoCircleOutlined style={{ color: "#0050b3", opacity: 0.6 }} />
          <Text strong style={{ color: "#0050b3", fontSize: 15 }}>
            {text}
          </Text>
        </Space>
      ),
    },
    {
      title: "Giải thích chi tiết",
      dataIndex: "definition",
      key: "definition",
      render: (text) => (
        <Text style={{ color: "#434343", lineHeight: 1.6 }}>{text}</Text>
      ),
    },
    {
      title: "Phân loại",
      dataIndex: "category",
      key: "category",
      width: "15%",
      filters: [
        { text: "Chung", value: "General" },
        { text: "Sức khỏe", value: "Health" },
        { text: "Ô tô", value: "Car" },
        { text: "Nhân thọ", value: "Life" },
        { text: "Du lịch", value: "Travel" },
      ],
      onFilter: (value, record) => record.category === value,
      render: (cat) => {
        let color = "default";
        // Soft pastel colors for a friendly look
        if (cat === "Health") color = "success"; // Green
        else if (cat === "Car") color = "warning"; // Orange
        else if (cat === "Life") color = "purple"; // Purple
        else if (cat === "Travel") color = "cyan"; // Cyan
        else if (cat === "General") color = "blue"; // Blue

        const vietnameseLabel = categoryMap[cat as string] || cat;

        return (
          <Tag
            color={color}
            style={{ padding: "4px 12px", borderRadius: 20, fontWeight: 500 }}
          >
            {vietnameseLabel.toUpperCase()}
          </Tag>
        );
      },
    },
  ];

  return (
    <div>
      <div className="page-header-container">
        <Title level={2} className="page-title">
          Từ điển Bảo hiểm
        </Title>
        <Text className="page-subtitle">
          Giải thích hơn 300 thuật ngữ chuyên ngành một cách đơn giản và dễ hiểu
          nhất.
        </Text>
      </div>

      <Card
        bordered={false}
        bodyStyle={{ padding: "24px 32px" }}
        style={{ overflow: "hidden" }}
      >
        <div style={{ marginBottom: 24, textAlign: "center" }}>
          <Input
            size="large"
            placeholder="Bạn muốn tìm hiểu thuật ngữ nào? (Ví dụ: Miễn thường, Tái tục...)"
            prefix={
              <SearchOutlined style={{ color: "#bfbfbf", fontSize: 18 }} />
            }
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              maxWidth: 600,
              borderRadius: 50,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
            allowClear
          />
        </div>

        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          locale={{
            emptyText: (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Không tìm thấy dữ liệu phù hợp"
              />
            ),
          }}
          pagination={{
            current: currentPage, // Controlled current page
            onChange: (page) => setCurrentPage(page), // Update state on page change
            showSizeChanger: true,
            locale: { items_per_page: "/ trang" },
            showTotal: (total, range) => (
              <Text type="secondary">
                Hiển thị {range[0]}-{range[1]} của <strong>{total}</strong>{" "}
                thuật ngữ
              </Text>
            ),
            pageSizeOptions: ["10", "20", "50", "100"],
            defaultPageSize: 10,
          }}
        />
      </Card>
    </div>
  );
};

export default Glossary;
