import React from 'react';
import { Table } from 'antd';

const Tableau = ({ data }) => {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', sorter: (a, b) => a.id - b.id },
    { title: 'Date de réclamation', dataIndex: 'date', key: 'date' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Matricule', dataIndex: 'matricule', key: 'matricule' },
    { title: 'Nom d’utilisateur', dataIndex: 'username', key: 'username' },
    {
      title: 'Pièce jointe',
      dataIndex: 'pieceJointe',
      key: 'pieceJointe',
      render: (text) =>
        text ? (
          <a
            href={`http://localhost:8101/uploads/reclamations/${text}`}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger
          </a>
        ) : (
          'Aucune'
        ),
    },
    { title: 'Statut', dataIndex: 'statut', key: 'statut' },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        position: ['bottomCenter'],
        pageSize: 5,
        showSizeChanger: false,
        simple: true,
      }}
      scroll={{ y: 240 }}
      bordered
      rowKey="id"
    />
  );
};

export default Tableau;
