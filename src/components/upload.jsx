import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const Uploadpage = ({ onFileSelect }) => {
  const customRequest = ({ file, onSuccess }) => {
    onFileSelect(file); // Lève le fichier vers le parent
    onSuccess("ok"); // Simule le succès pour Ant Design
  };

  return (
    <Upload
      customRequest={customRequest}
      showUploadList={{ showRemoveIcon: true }}
      listType="text"
      maxCount={1}
    >
      <Button icon={<UploadOutlined />}>Choisir un fichier</Button>
    </Upload>
  );
};

export default Uploadpage;
