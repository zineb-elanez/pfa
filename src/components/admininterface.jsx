import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import Tableau from './tableau.jsx';
import '../index.css';
import Statistique from './statistique.jsx';

const { Search } = Input;

const Admininterface = () => {
  const [originalData, setOriginalData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const matricule = localStorage.getItem("userMatricule");
    if (matricule) {
      fetch(`http://localhost:8101/api/reclamations/user/${matricule}/filtered`)
        .then(res => res.json())
        .then(responseData => {
          const formattedData = responseData.map(item => ({
            key: item.id,
            id: item.id,
            date: item.dateReclamation,
            type: item.type,
            description: item.description,
            pieceJointe: item.pieceJointe,
            statut: item.status,
            username: item.user.username,
            matricule: item.user.matricule,
          }));
          setOriginalData(formattedData);
        })
        .catch(error => {
          console.error("Erreur fetch API:", error);
        });
    }
  }, []);

  // Fonction pour mettre à jour le statut dans le state local
  const handleStatusUpdate = (id, newStatus) => {
    setOriginalData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, statut: newStatus } : item
      )
    );
  };

  // Filtrage
  const filteredData = originalData.filter(item => {
    const search = searchValue.toLowerCase();
    const isNumberSearch = !isNaN(search) && search.trim() !== "";

    const idMatch = isNumberSearch && item.id.toString().startsWith(search);
    const dateMatch = item.date && item.date.toLowerCase().includes(search);
    const typeMatch = item.type && item.type.toLowerCase().includes(search);
    const descriptionMatch = item.description && item.description.toLowerCase().includes(search);
    const statutMatch = item.statut && item.statut.toLowerCase().includes(search);
    const usernameMatch = item.username && item.username.toLowerCase().includes(search);
    const matriculeMatch = item.matricule && item.matricule.toLowerCase().includes(search);

    if (isNumberSearch) {
      return idMatch || dateMatch || typeMatch || descriptionMatch || statutMatch || usernameMatch || matriculeMatch;
    } else {
      return dateMatch || typeMatch || descriptionMatch || statutMatch || usernameMatch || matriculeMatch;
    }
  });

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>

        <div style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          {/* On passe les données à jour à Statistique */}
          <Statistique data={originalData} />
        </div>

        <div style={{
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
          <Search
            placeholder="Rechercher une réclamation"
            size="large"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            allowClear
            style={{ marginBottom: 16 }}
          />
          {/* On passe la fonction pour mettre à jour le statut */}
          <Tableau data={filteredData} onStatusUpdate={handleStatusUpdate} />
        </div>
      </div>
    </div>
  );
};

export default Admininterface;
