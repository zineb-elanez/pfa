import React from 'react';
import { List, Steps } from 'antd';

const data = [
  {
    title: 'Réclamation 1',
    current: 0,
  },
  {
    title: 'Réclamation 2',
    current: 1,
    status: 'error',
  },
  {
    title: 'Réclamation 3',
    current: 2,
  },
  {
    title: 'Réclamation 4',
    current: 1,
  },
];

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

const Listreclamation = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        style={{
          alignItems: 'flex-start',
          paddingBottom: '30px',
        }}
      >
        <List.Item.Meta
          title={<b>{item.title}</b>}
          description="Ceci est une description automatique de la réclamation."
        />
        <div style={{ marginLeft: '20px', minWidth: '300px' }}>
          <Steps
            direction="vertical"
            size="small"
            current={item.current}
            status={item.status || 'process'}
            items={stepItems}
          />
        </div>
      </List.Item>
    )}
  />
);

export default Listreclamation;
