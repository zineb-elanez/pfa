import React, { useState } from 'react';
import '../index.css';
import { Button, Form, Input, Radio, Typography, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title, Text } = Typography;
const layout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };

const FormReclamation = () => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);

  const handleSubmit = async (values) => {
    const formData = new FormData();
    const userMatricule = localStorage.getItem('userMatricule');

    if (!userMatricule) {
      message.error("Erreur : aucun matricule trouvé (utilisateur non connecté ?)");
      return;
    }

    formData.append('type', values.type);
    formData.append('description', values.description || '');
    formData.append('userMatricule', userMatricule);

    if (file) {
      formData.append('file', file);
    }

    try {
      await axios.post('http://localhost:8101/api/reclamations', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success('Réclamation envoyée avec succès !');
      form.resetFields();
      setFile(null);
    } catch (error) {
      console.error('Erreur lors de l’envoi de la réclamation', error);
      message.error('Échec de l’envoi de la réclamation.');
    }
  };

  const uploadProps = {
    beforeUpload: (file) => {
      setFile(file);
      // Empêche le téléchargement automatique (upload)
      return false;
    },
    accept: '.pdf',
    maxCount: 1,
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: '30px auto',
        padding: 16,
        background: '#f0fff0',
        borderRadius: 10,
        boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
        border: '1px solid #95de64',
      }}
    >
      <Title level={4} style={{ textAlign: 'center', color: '#237804', marginBottom: 10 }}>
        Formulaire de Réclamation
      </Title>
      <Text
        type="secondary"
        style={{ display: 'block', textAlign: 'center', marginBottom: 20, color: '#135200' }}
      >
        Merci de renseigner les champs ci-dessous.
      </Text>

      <Form {...layout} name="reclamation-form" form={form} onFinish={handleSubmit}>
        <Form.Item
          name="type"
          label="Objet"
          rules={[{ required: true, message: 'Veuillez sélectionner un type !' }]}
        >
          <Radio.Group>
            <Radio value="NOTE">Notes</Radio>
            <Radio value="ABSENCE">Absence</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Veuillez saisir une description !' }]}
        >
          <Input.TextArea placeholder="Expliquez brièvement..." />
        </Form.Item>

        <Form.Item label="Fichier joint">
          <Upload {...uploadProps} showUploadList={{ showRemoveIcon: true }}>
            <Button icon={<UploadOutlined />} style={{ borderColor: '#008E31', color: '#008E31' }}>
              Choisir un fichier PDF
            </Button>
          </Upload>
          {file && <div style={{ marginTop: 8 }}>{file.name}</div>}
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%', backgroundColor: '#008E31', borderColor: '#008E31' }}
          >
            Envoyer
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormReclamation;
