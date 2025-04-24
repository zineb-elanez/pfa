import React from 'react';
import { LinkOutlined,AppstoreOutlined ,MenuOutlined} from '@ant-design/icons';
import { FloatButton } from 'antd';

const Sidebar2 = () => (
  <>
    <div style={{
      position: 'fixed',
      top: '60%',  // Centré verticalement
      left: '70px',  // Positionné à gauche
      transform: 'translateY(-50%)',  // Ajuste pour centrer parfaitement
      zIndex: 10,  // Assure que le sidebar est au-dessus du contenu
    }}>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ insetInlineEnd: 24 }}
        icon={<MenuOutlined />}
      >
        <FloatButton icon ={<AppstoreOutlined />}style={{ backgroundColor: 'white', color: 'black' }} />
        <FloatButton icon={<LinkOutlined />} style={{ backgroundColor: 'white', color: 'black' }} />
        <FloatButton icon={<LinkOutlined />} style={{ backgroundColor: 'white', color: 'black' }} />

      </FloatButton.Group>
    </div>
  </>
);

export default Sidebar2;
