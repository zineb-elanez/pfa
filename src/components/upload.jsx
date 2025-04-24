import React from 'react';
import '../index.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Uploadpage = () => (
  <div style={{ height: '160px' }}> {/* 👈 Hauteur fixée propre */}
    <Dragger {...props} style={{
      padding: '10px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <p className="ant-upload-drag-icon" style={{ fontSize: '24px' }}>
        <InboxOutlined />
      </p>
      <p className="ant-upload-text" style={{ fontSize: '14px' }}>
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint" style={{ fontSize: '12px' }}>
        Support for single or bulk upload.
      </p>
    </Dragger>
  </div>
);

export default Uploadpage;
