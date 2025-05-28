import React, { useState, useEffect } from 'react';
import { Table, Select, message } from 'antd';

const { Option } = Select;

const Tableau = ({ data, onStatusUpdate }) => {
  // Copie locale des données pour rafraîchir instantanément
  const [localData, setLocalData] = useState(data);
  const [loading, setLoading] = useState({});

  // Synchroniser localData si props data change (ex: nouvelle requête parent)
  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const statusOptions = [
    { value: 'EN_ATTENTE', label: 'En attente', color: '#faad14' },
    { value: 'EN_COURS', label: 'En cours', color: '#1890ff' },
    { value: 'TRAITEE', label: 'Traitée', color: '#52c41a' },
  ];

  const handleStatusChange = async (value, record) => {
    const reclamationId = record.id;
    setLoading(prev => ({ ...prev, [reclamationId]: true }));

    try {
      const response = await fetch(`http://localhost:8101/api/reclamations/${reclamationId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ status: value })
      });

      if (response.ok) {
        message.success('Statut mis à jour avec succès');

        // Mise à jour locale instantanée
        setLocalData(prevData => 
          prevData.map(item => 
            item.id === reclamationId ? { ...item, statut: value } : item
          )
        );

        if (onStatusUpdate) {
          onStatusUpdate(reclamationId, value);
        }
      } else {
        throw new Error('Erreur lors de la mise à jour');
      }
    } catch (error) {
      console.error('Erreur:', error);
      message.error('Erreur lors de la mise à jour du statut');
    } finally {
      setLoading(prev => ({ ...prev, [reclamationId]: false }));
    }
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', sorter: (a, b) => a.id - b.id },
    { title: 'Date de réclamation', dataIndex: 'date', key: 'date' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Matricule', dataIndex: 'matricule', key: 'matricule' },
    { title: "Nom d'utilisateur", dataIndex: 'username', key: 'username' },
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
    {
      title: 'Statut',
      dataIndex: 'statut',
      key: 'statut',
      render: (statut, record) => {
        const currentStatus = statusOptions.find(option => option.value === statut);
        
        return (
          <Select
            value={statut}
            style={{ width: 120, color: currentStatus?.color }}
            loading={loading[record.id]}
            onChange={(value) => handleStatusChange(value, record)}
            size="small"
          >
            {statusOptions.map(option => (
              <Option key={option.value} value={option.value}>
                <span style={{ color: option.color }}>{option.label}</span>
              </Option>
            ))}
          </Select>
        );
      }
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={localData}  // <-- Utilise la copie locale ici
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
