import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';
import './LogoutButton.css';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      🚪 Cerrar Sesión
    </button>
  );
};

export default LogoutButton;

