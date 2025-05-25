import React, { useEffect, useState } from "react";
import { Layout, Avatar, Dropdown, Menu } from "antd";
import { LogoutOutlined, MoreOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = ({ onLogout, onHomeClick }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("userName");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const initial = username ? username.charAt(0).toUpperCase() : "?";

  const menu = (
    <Menu>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={onLogout}>
        Déconnexion
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "#fff",
        padding: "0 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        boxShadow: "0 1px 5px rgba(0,0,0,0.06)",
      }}
    >
      {/* Logo + Accueil */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img
          src="src/assets/logoemsi.png"
          alt="Logo"
          style={{ height: "28px", objectFit: "contain", cursor: "pointer" }}
          onClick={onHomeClick}
        />
      </div>

      {/* Avatar + menu */}
      <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            gap: "8px",
          }}
        >
          <Avatar
            style={{
              backgroundColor: "#1890ff",
              fontSize: "14px",
              width: 32,
              height: 32,
            }}
          >
            {initial}
          </Avatar>
          <MoreOutlined style={{ fontSize: 18, color: "#333" }} />
        </div>
      </Dropdown>
    </Header>
  );
};

export default Navbar;
