// src/pages/Home.tsx
import React from "react";
import { Typography, Card, Row, Col, Button, Space, Statistic } from "antd";
import {
  BookOutlined,
  MedicineBoxOutlined,
  ReconciliationOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      key: "thuat-ngu",
      title: "Thuật ngữ Bảo hiểm",
      icon: <BookOutlined style={{ fontSize: "32px", color: "#0050b3" }} />,
      description:
        "Tra cứu hơn 400 thuật ngữ chuyên ngành bảo hiểm với định nghĩa chi tiết và dễ hiểu.",
      link: "/thuat-ngu",
      color: "#e6f7ff",
    },
    {
      key: "benh-vien",
      title: "Mạng lưới Bệnh viện",
      icon: (
        <MedicineBoxOutlined style={{ fontSize: "32px", color: "#52c41a" }} />
      ),
      description:
        "Tìm kiếm bệnh viện, phòng khám trong mạng lưới bảo lãnh viện phí trên toàn quốc.",
      link: "/benh-vien",
      color: "#f6ffed",
    },
    {
      key: "boi-thuong",
      title: "Quy trình Bồi thường",
      icon: (
        <ReconciliationOutlined
          style={{ fontSize: "32px", color: "#faad14" }}
        />
      ),
      description:
        "Hướng dẫn chi tiết các bước nộp hồ sơ và theo dõi trạng thái bồi thường.",
      link: "/boi-thuong",
      color: "#fffbe6",
    },
  ];

  return (
    <div style={{ padding: "20px 0" }}>
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <SafetyCertificateOutlined
          style={{ fontSize: 64, color: "#0050b3", marginBottom: 24 }}
        />
        <Title level={1} style={{ marginBottom: 16 }}>
          Cổng Thông Tin Bảo Hiểm Trực Tuyến
        </Title>
        <Paragraph
          style={{
            fontSize: 18,
            color: "#666",
            maxWidth: 800,
            margin: "0 auto 32px",
          }}
        >
          Nền tảng cung cấp thông tin minh bạch, giúp bạn dễ dàng tra cứu quyền
          lợi, mạng lưới y tế và quy trình giải quyết quyền lợi bảo hiểm.
        </Paragraph>
        <Space size="large">
          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={() => navigate("/thuat-ngu")}
          >
            Tra cứu ngay
          </Button>
          <Button
            type="primary"
            size="large"
            shape="round"
            onClick={() => navigate("/benh-vien")}
          >
            Tìm bệnh viện
          </Button>
        </Space>
      </div>

      {/* Feature Cards */}
      <Row gutter={[24, 24]}>
        {features.map((item) => (
          <Col xs={24} md={8} key={item.key}>
            <Card
              hoverable
              style={{
                height: "100%",
                borderRadius: 12,
                border: "1px solid #f0f0f0",
              }}
              styles={{
                body: {
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                },
              }}
              onClick={() => navigate(item.link)}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                {item.icon}
              </div>
              <Title level={3} style={{ marginBottom: 16 }}>
                {item.title}
              </Title>
              <Paragraph style={{ color: "#666", flex: 1, fontSize: 16 }}>
                {item.description}
              </Paragraph>
              <div style={{ marginTop: 16 }}>
                <Text
                  strong
                  style={{
                    color: "#0050b3",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Xem chi tiết <ArrowRightOutlined style={{ marginLeft: 8 }} />
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Quick Stats (Optional Decorative Section) */}
      <div
        style={{
          marginTop: 60,
          background: "#f9f9f9",
          padding: "40px",
          borderRadius: 16,
        }}
      >
        <Row gutter={24} justify="center">
          <Col xs={12} md={6} style={{ textAlign: "center" }}>
            <Statistic
              title="Thuật ngữ"
              value={400}
              suffix="+"
              styles={{ content: { color: "#0050b3", fontWeight: 700 } }}
            />
          </Col>
          <Col xs={12} md={6} style={{ textAlign: "center" }}>
            <Statistic
              title="Cơ sở Y tế"
              value={300}
              suffix="+"
              styles={{ content: { color: "#0050b3", fontWeight: 700 } }}
            />
          </Col>
          <Col xs={12} md={6} style={{ textAlign: "center" }}>
            <Statistic
              title="Hài lòng"
              value={84}
              suffix="%"
              styles={{ content: { color: "#0050b3", fontWeight: 700 } }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
