import React, { useEffect, useState } from 'react';
import { InboxOutlined, EditOutlined, CheckOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const Statistique = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const matricule = localStorage.getItem("userMatricule");
    if (matricule) {
      fetch(`http://localhost:8101/api/reclamations/user/${matricule}/filtered`)
        .then(res => res.json())
        .then(responseData => {
          setData(responseData);
        })
        .catch(error => {
          console.error("Erreur fetch API:", error);
        });
    }
  }, []);

  const total = data.length;
  const nonTraitees = data.filter(item => item.status?.toLowerCase() === 'envoyee').length;
  const traitee = data.filter(item => item.status?.toLowerCase() === 'traitee').length;
  const enCours = data.filter(item => item.status?.toLowerCase() === 'en_cours').length;

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
