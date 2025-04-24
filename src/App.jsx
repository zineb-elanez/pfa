import React, { useState } from 'react';
import Upload from './components/upload.jsx';
import Tableau from './components/tableau.jsx';
import StepBar from './components/stepbar.jsx';
import FormReclamation from './components/formreclamation.jsx';
import Sidebar2 from './components/sidebar2.jsx';  // Changer le nom ici pour être cohérent
import './index.css';
import Listreclamation from './components/listreclamation.jsx';

const App = () => {
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
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      height: '100vh',
    }}>
      {/* Sidebar */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '20px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: '300px',
        boxSizing: 'border-box',
      }}>
        <Sidebar2 />
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '320px',  // Ajuste selon la largeur du Sidebar
        padding: '20px',
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        flex: 1
      }}>
        <div style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '20px',
          flexWrap: 'wrap',
          alignItems: 'flex-start'
        }}>
          {/* Left Column */}
          <div style={{ flex: 1, minWidth: '350px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Form */}
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <FormReclamation />
            </div>

            {/* Upload */}
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Upload onUpload={handleUpload} />
            </div>
          </div>

          {/* Right Column: Tableau + StepBar */}
          <div style={{ flex: 2, minWidth: '600px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Tableau */}
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <Listreclamation />
            </div>

            {/* StepBar */}
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <StepBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
