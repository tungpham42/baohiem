import React, { useState } from "react";
import {
  Steps,
  Card,
  Typography,
  Button,
  Row,
  Col,
  Collapse,
  theme,
} from "antd";
import { claimStepsData } from "../data/mockData";
import {
  FileProtectOutlined,
  SolutionOutlined,
  SendOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  BankOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const ClaimsProcess: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  // Map icon string to Ant Design icons (nếu trong data có field icon dạng string)
  // Vì mockData hiện tại chưa có icon cụ thể, ta dùng index để gán icon demo
  const getIcon = (index: number) => {
    const icons = [
      <FileProtectOutlined />,
      <SolutionOutlined />,
      <SendOutlined />,
      <AuditOutlined />,
      <CheckCircleOutlined />,
      <BankOutlined />,
    ];
    return icons[index] || <SolutionOutlined />;
  };

  // Lấy 6 bước đầu tiên làm quy trình chính (Main Flow)
  const mainSteps = claimStepsData.slice(0, 6).map((step, index) => ({
    title: step.title,
    description: step.description,
    icon: getIcon(index),
  }));

  // Các bước còn lại đưa vào phần Hỏi đáp/Chi tiết
  const detailSteps = claimStepsData.slice(6);

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  return (
    <div>
      <div className="page-header-container">
        <Title level={2} className="page-title">
          Quy trình Bồi thường
        </Title>
        <Text className="page-subtitle">
          Hướng dẫn chi tiết các bước để nhận quyền lợi bảo hiểm nhanh chóng và
          minh bạch.
        </Text>
      </div>

      <Row gutter={[24, 24]}>
        {/* Left Column: Interactive Steps */}
        <Col xs={24}>
          <Card bordered={false} title="Tiến trình xử lý hồ sơ tiêu chuẩn">
            <Steps
              current={current}
              onChange={(val) => setCurrent(val)}
              items={mainSteps.map((item) => ({
                title: item.title,
                icon: item.icon,
              }))}
              style={{ marginBottom: 24 }}
            />

            <div
              style={{
                backgroundColor: token.colorFillAlter,
                border: `1px dashed ${token.colorBorder}`,
                borderRadius: 8,
                padding: 24,
                minHeight: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Title level={4} style={{ color: token.colorPrimary }}>
                {mainSteps[current].title}
              </Title>
              <Paragraph style={{ fontSize: 16 }}>
                {mainSteps[current].description}
              </Paragraph>
            </div>

            <div style={{ marginTop: 24, textAlign: "right" }}>
              {current > 0 && (
                <Button
                  type="primary"
                  style={{ margin: "0 8px" }}
                  onClick={() => prev()}
                  icon={<LeftOutlined />}
                >
                  Bước trước
                </Button>
              )}
              {current < mainSteps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Bước tiếp theo <RightOutlined />
                </Button>
              )}
            </div>
          </Card>
        </Col>

        {/* Right Column: Quick Support & Tips */}
        <Col xs={24}>
          <Card
            title="Hồ sơ cần chuẩn bị"
            style={{ marginBottom: 24, borderTop: "3px solid #52c41a" }}
          >
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              <li style={{ marginBottom: 8 }}>
                Giấy yêu cầu bồi thường (đã điền đủ)
              </li>
              <li style={{ marginBottom: 8 }}>Bản sao CMND/CCCD/Hộ chiếu</li>
              <li style={{ marginBottom: 8 }}>
                Chứng từ y tế / Hóa đơn sửa chữa
              </li>
              <li>Thông tin tài khoản ngân hàng chính chủ</li>
            </ul>
          </Card>
        </Col>

        {/* Bottom: FAQ / Detailed Steps */}
        <Col span={24}>
          <Card title="Chi tiết các nghiệp vụ khác & Hỏi đáp thường gặp">
            <Collapse ghost>
              {detailSteps.map((step, index) => (
                <Panel header={step.title} key={index}>
                  <p>{step.description}</p>
                </Panel>
              ))}
            </Collapse>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ClaimsProcess;
