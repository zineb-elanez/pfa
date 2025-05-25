import React, { useEffect, useState } from 'react';
import { List, Steps, Spin, Alert } from 'antd';

const stepItems = [
  {
    title: 'Envoyée',
    description: 'Votre réclamation a été envoyée au service concerné.',
  },
  {
    title: 'En cours',
    description: 'Votre réclamation est en cours de traitement.',
  },
  {
    title: 'Traité',
    description: 'Votre réclamation a été traitée.',
  },
];

const mapStatusToStep = (status) => {
  switch (status?.toUpperCase()) {
    case 'ENVOYEE':
      return 0;
    case 'EN_COURS':
      return 1;
    case 'TRAITEE':
      return 2;
    default:
      return 0;
  }
};

const ListReclamation = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const matricule = localStorage.getItem("userMatricule");
    fetch(`http://localhost:8101/api/reclamations/user/${matricule}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
        return res.json();
      })
      .then((responseData) => {
        const formatted = responseData.map(item => ({
          id: item.id,
          date: item.dateReclamation,
          description: item.description,
          status: item.status,
          type: item.type,
        }));
        setData(formatted);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spin tip="Chargement des réclamations..." />;
  if (error) return <Alert message="Erreur" description={error} type="error" showIcon />;
  if (data.length === 0) return <Alert message="Aucune réclamation trouvée." type="info" showIcon />;

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      style={{ marginTop: 20 }}
      renderItem={item => (
        <List.Item
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingBottom: 30,
            borderBottom: '1px solid #eee',
            marginBottom: 20,
            width:'100%'
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}> {/* Enlevez la limite de largeur */}
  <List.Item.Meta
  title={`Réclamation #${item.id} - Type: ${item.type}`}
  description={
    <div style={{ lineHeight: '1.8em' }}>
      <div style={{ marginBottom: '4px' }}><b>Date :</b> {item.date}</div>
      <div style={{ marginBottom: '4px' }}><b>Description :</b> {item.description}</div>
      <div><b>Status :</b> {item.status}</div>
    </div>
  }
/>
   
</div>
          <div style={{ minWidth: 300}}>
            <Steps
              direction="vertical"
              size="small"
              current={mapStatusToStep(item.status)}
              items={stepItems}
            />
          </div>
        </List.Item>
      )}
    />
  );
};

export default ListReclamation;
