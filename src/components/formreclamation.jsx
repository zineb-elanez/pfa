import React from 'react';
import '../index.css';
import { Button, Form, Input, Radio, Typography } from 'antd'; // Ajout de Radio ici
import Upload from './upload.jsx'; // Vérifier que le composant Upload est bien défini

const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const FormReclamation = ({ onUpload }) => (
  <div
    style={{
      maxWidth: 500,
      margin: '30px auto',
      padding: 16,
      background: '#f0fff0', // Fond vert très doux
      borderRadius: 10,
      boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
      border: '1px solid #95de64', // Léger vert clair
    }}
  >
    <Title level={4} style={{ textAlign: 'center', color: '#237804', marginBottom: 10 }}>
      Formulaire de Réclamation
    </Title>
    <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 20, color: '#135200' }}>
      Merci de renseigner les champs ci-dessous.
    </Text>

    <Form
      {...layout}
      name="reclamation-form"
      onFinish={(values) => {
        console.log('Form values:', values);
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="type"
        label="Type"
        rules={[{ required: true, message: 'Veuillez sélectionner au moins un type !' }]}
      >
        <Radio.Group>
          <Radio value="notes"> Notes </Radio>
          <Radio value="absence"> Abscence </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name={['user', 'introduction']} label="Description">
        <Input.TextArea placeholder="Expliquez brièvement..." />
      </Form.Item>

      <Form.Item name={['user', 'file']} label="Fichier joint">
        <Upload onUpload={onUpload} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: '100%',
            backgroundColor: '#008E31',
            borderColor: '#008E31',
          }}
        >
          Envoyer
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default FormReclamation;
