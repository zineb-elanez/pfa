import React, { useState } from 'react';
import Navbar from './components/navbar';
import Infocarousel from './components/carousel.jsx';
import { SearchOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Upload from './components/upload.jsx';
import FormReclamation from './components/formreclamation.jsx';
import Listreclamation from './components/listreclamation.jsx';
import StepBar from './components/stepbar.jsx';
import './index.css';

const App = () => {
  const [view, setView] = useState('home');
  const [files, setFiles] = useState([]);

  const handleUpload = (file) => {
    const newFile = {
      id: files.length + 1,
      key: files.length + 1,
      name: file.name,
      type: file.type,
      uploadedBy: 'user1',
      data: URL.createObjectURL(file),
    };
    setFiles([...files, newFile]);
  };

  return (
    <div style={{ paddingTop: '60px' }}>
      <Navbar setView={setView} />
      
      {view === 'home' && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          minHeight: '100vh',
          backgroundColor: '#fff'
        }}>
          <div style={{
            background: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: '40px',
            maxHeight: '300px',
            overflow: 'hidden',
            width: '100%',
            maxWidth: '1200px'
          }}>
            <Infocarousel />
          </div>

          <div style={{
            background: '#fff',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '900px',
            width: '100%',
          }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <img
                src="src/assets/logoemsi.png"
                alt="Logo"
                style={{ height: '200px', objectFit: 'contain' }}
              />
            </div>

            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{
                fontWeight: 'bold',
                fontSize: '18px',
                marginBottom: '10px',
                textAlign: 'center',
                color: '#7D7D8E'
              }}>
                Application dédiée à la gestion des réclamations des étudiants
              </div>

              <Button
                type="primary"
                style={{
                  backgroundColor: '#008E31',
                  borderColor: '#237804',
                  width: '200px'
                }}
                icon={<EditOutlined />}
                onClick={() => setView('reclamation')}
              >
                Ajouter une réclamation
              </Button>

              <Button
                type="primary"
                style={{
                  backgroundColor: '#008E31',
                  borderColor: '#237804',
                  width: '200px'
                }}
                icon={<SearchOutlined />}
                onClick={() => setView('list')}
              >
                Consulter les réclamations
              </Button>
            </div>
          </div>
        </div>
      )}

      {view === 'reclamation' && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          minHeight: 'calc(90vh - 60px)',
          backgroundColor: '#fff'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '800px',
            width: '100%'
          }}>
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              minHeight: '300px',
            }}>
              <FormReclamation />
            </div>
          </div>
        </div>
      )}

      {view === 'list' && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '20px',
          backgroundColor: '#fff',
          minHeight: 'calc(100vh - 60px)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '1200px',
            width: '100%'
          }}>
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <Listreclamation />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default App;
