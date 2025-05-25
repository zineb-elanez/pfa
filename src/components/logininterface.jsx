import React, { useState } from 'react';
import { Input } from 'antd';
import Login from './login.jsx';
import '../index.css';


const Logininterface = () => {
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>


        <div style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',         // <--- border-radius ici
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
         <Login/>

        </div>
        
        </div>
      </div>
  );
};

export default Logininterface;
