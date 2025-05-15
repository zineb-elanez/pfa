import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    label: 'Accueil',
    key: 'home',
    icon: <HomeOutlined />,
  },
];

const Navbar = ({ setView }) => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    if (e.key === 'home') {
      setView('home'); // Return to home view
    }
  };

  // Placeholder for user initials (replace with actual user data)
  const userInitials = 'ZA'; // Example initials; update with actual user data

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: '#fff', // White background like grok.com
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Subtle shadow for depth
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px', // Padding for spacing
        height: '60px', // Standard navbar height
      }}
    >
      {/* EMSI logo on the left */}
      <div
        style={{
          marginRight: '20px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src="src/assets/logoemsi.png" // Ensure this path is correct
          alt="EMSI Logo"
          style={{ height: '40px', objectFit: 'contain' }}
        />
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{
          flex: 1, // Menu takes most space
          backgroundColor: 'transparent', // Transparent to blend with navbar background
          borderBottom: 'none', // Remove default border
        }}
      />
      {/* Circular avatar with user initials on the right */}
      <div
        style={{
          marginRight: '40px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#18905f', // Greenish-blue background
          color: '#fff', // White text for initials
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        {userInitials}
      </div>
    </div>
  );
};

export default Navbar; 