import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import Navbar from './components/navbar';
import Admininterface from './components/admininterface';
import Userinterface from './components/userinterface';
import Logininterface from './components/logininterface';

const PrivateRoute = ({ children, roleAllowed }) => {
  const role = localStorage.getItem('userRole');
  if (!role) return <Navigate to="/login" />;
  if (roleAllowed && !roleAllowed.includes(role)) return <Navigate to="/login" />;
  return children;
};

const App = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login"; // recharge la page et redirige
  };

  const handleHomeClick = () => {
    const role = localStorage.getItem('userRole');
    if (role === 'CHEF_FILIERE' || role === 'RESPONSABLE_SITE') {
      window.location.href = "/chef-filiere";
    } else if (role === 'USER') {
      window.location.href = "/user";
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <Router>
      <div style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/login" element={<Logininterface />} />

          <Route
            path="/chef-filiere"
            element={
              <PrivateRoute roleAllowed={['CHEF_FILIERE']}>
                <>
                  <Navbar onLogout={handleLogout} onHomeClick={handleHomeClick} />
                  <Admininterface />
                </>
              </PrivateRoute>
            }
          />

          <Route
            path="/responsable-site"
            element={
              <PrivateRoute roleAllowed={['RESPONSABLE_SITE']}>
                <>
                  <Navbar onLogout={handleLogout} onHomeClick={handleHomeClick} />
                  <Admininterface />
                </>
              </PrivateRoute>
            }
          />

          <Route
            path="/user"
            element={
              <PrivateRoute roleAllowed={['USER']}>
                <>
                  <Navbar onLogout={handleLogout} onHomeClick={handleHomeClick} />
                  <Userinterface />
                </>
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
