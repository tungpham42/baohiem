// src/App.tsx
import React from "react";
import { Layout, Menu, ConfigProvider, FloatButton } from "antd";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  HomeOutlined,
  BookOutlined,
  MedicineBoxOutlined,
  SafetyCertificateFilled,
  VerticalAlignTopOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";

import Home from "./pages/Home"; // Import the new Home page
import Glossary from "./pages/Glossary";
import Hospitals from "./pages/Hospitals";
import ClaimsProcess from "./pages/ClaimsProcess";
import "./App.css";

const { Header, Content, Footer } = Layout;

const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation

  const menuItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: <Link to="/">Trang chủ</Link>,
    },
    {
      key: "/thuat-ngu",
      icon: <BookOutlined />,
      label: <Link to="/thuat-ngu">Thuật ngữ Bảo hiểm</Link>,
    },
    {
      key: "/benh-vien",
      icon: <MedicineBoxOutlined />,
      label: <Link to="/benh-vien">Mạng lưới Bệnh viện</Link>,
    },
    {
      key: "/boi-thuong",
      icon: <ReconciliationOutlined />,
      label: <Link to="/boi-thuong">Bồi thường</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Modern White Header with Shadow */}
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          padding: "0 24px",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: 40,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")} // Make logo clickable to go Home
        >
          <SafetyCertificateFilled
            style={{ fontSize: 28, color: "#0050b3", marginRight: 8 }}
          />
          <span
            style={{
              color: "#0050b3",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            Cổng Bảo Hiểm
          </span>
        </div>

        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{
            flex: 1,
            minWidth: 0,
            borderBottom: "none",
            fontSize: "15px",
            fontWeight: 500,
          }}
        />
      </Header>

      <Content
        style={{
          padding: "32px 24px",
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Routes>
          {/* Changed from Navigate to Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/thuat-ngu" element={<Glossary />} />
          <Route path="/benh-vien" element={<Hospitals />} />
          <Route path="/boi-thuong" element={<ClaimsProcess />} />
        </Routes>
      </Content>

      <Footer
        style={{
          textAlign: "center",
          background: "transparent",
          color: "#888",
        }}
      >
        Cổng thông tin Bảo hiểm ©{new Date().getFullYear()} <br />
        Phát triển bởi{" "}
        <a
          href="https://soft.io.vn"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0050b3", fontWeight: 600 }}
        >
          SOFT.io.vn
        </a>
      </Footer>
      <FloatButton.BackTop
        type="primary"
        tooltip="Lên đầu trang"
        icon={<VerticalAlignTopOutlined />}
        style={{ right: 24, bottom: 24 }}
      />
    </Layout>
  );
};

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#0050b3",
        borderRadius: 8,
        fontFamily: "'Work Sans', sans-serif",
      },
    }}
  >
    <Router>
      <AppContent />
    </Router>
  </ConfigProvider>
);

export default App;
