import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/navbar';
import Admininterface from './components/admininterface';
import Userinterface from './components/userinterface';
import Logininterface from './components/logininterface';

// Simplicité : on stocke le role dans localStorage après login (ou Context API / Redux)
// Exemple d’un PrivateRoute qui bloque l'accès si non connecté
const PrivateRoute = ({ children, roleAllowed }) => {
  const role = localStorage.getItem('userRole');
  if (!role) return <Navigate to="/login" />;
  if (roleAllowed && !roleAllowed.includes(role)) return <Navigate to="/login" />;
  return children;
};

const App = () => {
  return (
<>
    <div style={{ paddingTop: '60px' }}></div>
    <Router>
      <Navbar /> {/* Navbar visible partout, ou conditionner si besoin */}

      <Routes>
        <Route path="/login" element={<Logininterface />} />

        <Route
          path="/chef-filiere"
          element={
            <PrivateRoute roleAllowed={['CHEF_FILIERE']}>
              <Admininterface />
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute roleAllowed={['USER']}>
              <Userinterface />
            </PrivateRoute>
          }
        />
        <Route
          path="/responsable-site"
          element={
            <PrivateRoute roleAllowed={['RESPONSABLE_SITE']}>
              <Admininterface />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
