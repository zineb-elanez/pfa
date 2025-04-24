import React from 'react';
import {
  AppstoreOutlined,
  BellOutlined,
  HomeOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Segmented } from 'antd';
import './sidebar.css'; // 👉 ajoute ce fichier CSS

const Sidebar = () => (
  <div className="sidebar-container">
    <Segmented
      vertical
      options={[
        { value: 'Accueil', icon: <HomeOutlined /> },
        { value: 'Applications', icon: <AppstoreOutlined /> },
        { value: 'Statistiques', icon: <BarChartOutlined /> },
        { value: 'Notifications', icon: <BellOutlined /> },
        { value: 'Déconnexion', icon: <LogoutOutlined /> },
      ]}
    />
  </div>
);

export default Sidebar;
