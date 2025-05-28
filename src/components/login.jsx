import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import loginImage from '/src/assets/PhotoLogin.png';

const Login = () => {
  const [matricule, setMatricule] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  fetch('http://localhost:8101/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ matricule, password }),
  })
    .then(res => {
      if (!res.ok) throw new Error('Échec de connexion');
      return res.json();
    })
    .then(data => {
      const role = data.role;
      const matricule=data.matricule
      const username=data.username
      localStorage.setItem('userRole', role);  // Stockage du rôle
      localStorage.setItem('userMatricule', matricule);
      localStorage.setItem('userName', username);
      if (role === 'USER') {
        navigate('/user');
      } else if (role === 'CHEF_FILIERE') {
        navigate('/chef-filiere');
      } else if (role === 'RESPONSABLE_SITE') {
        navigate('/responsable-site');
      } else {
        alert('Rôle inconnu');
      }
    })
    .catch(() => {
      alert('Matricule ou mot de passe incorrect');
    });
};


  return (
    <div className="login_wrapper">
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="title_container">
          <p className="title">Bienvenue, connectez-vous pour continuer</p>
          <span className="subtitle">
            Pour commencer, connectez-vous avec votre matricule et mot de passe fournis par l’établissement pour accéder à la plateforme de réclamation.
          </span>
        </div>
        <br />

        <div className="input_container">
          <label className="input_label" htmlFor="matricule_field">Matricule</label>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#141B34"
              d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"
            />
            <path
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="#141B34"
              d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
            />
          </svg>
          <input
            placeholder=" Entrez votre matricule"
            title="Matricule"
            name="matricule"
            type="text"
            className="input_field"
            id="matricule_field"
            value={matricule}
            onChange={e => setMatricule(e.target.value)}
          />
        </div>

        <div className="input_container">
          <label className="input_label" htmlFor="password_field">Password</label>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#141B34"
              d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#141B34"
              d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"
            />
          </svg>
          <input
            placeholder="Entrez votre mot de passe "
            title="Password"
            name="password"
            type="password"
            className="input_field"
            id="password_field"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button title="Sign In" type="submit" className="sign-in_btn">
          <span>Se connecter</span>
        </button>
      </form>

      <div className="image_container">
        <img src={loginImage} alt="Login Visual" className="login_image" />
      </div>
    </div>
  );
};

export default Login;
