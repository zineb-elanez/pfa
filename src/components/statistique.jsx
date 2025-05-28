import React from 'react';
import { InboxOutlined, EditOutlined, CheckOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const Statistique = ({ data }) => {
  // Calculs basés sur les données reçues en prop
  const total = data.length;
  const nonTraitees = data.filter(item => item.statut?.toLowerCase() === 'envoyee').length;
  const traitee = data.filter(item => item.statut?.toLowerCase() === 'traitee').length;
  const enCours = data.filter(item => item.statut?.toLowerCase() === 'en_cours').length;

  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card>
          <Statistic
            title="Total de réclamations"
            value={total}
            precision={0}
            prefix={<EditOutlined />}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Recu"
            value={nonTraitees}
            precision={0}
            valueStyle={{ color: '#007bff' }}
            prefix={<InboxOutlined />}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="Traitées"
            value={traitee}
            precision={0}
            valueStyle={{ color: '#3f8600' }}
            prefix={<CheckOutlined />}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Statistic
            title="En cours de traitement"
            value={enCours}
            precision={0}
            valueStyle={{ color: '#ff8c00' }}
            prefix={<ClockCircleOutlined />}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Statistique;
