import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="role-selection-container">
      <div className="role-selection-card">
        <h1 className="title">Sistema de Gestión de Asistencias</h1>
        <p className="subtitle">Selecciona tu tipo de usuario</p>
        
        <div className="roles-grid">
          <div className="role-card" onClick={() => navigate('/login-docente')}>
            <div className="role-icon">👨‍🏫</div>
            <h2>Docente</h2>
            <p>Accede con tu número de cédula</p>
          </div>
          
          <div className="role-card" onClick={() => navigate('/login-admin')}>
            <div className="role-icon">👨‍💼</div>
            <h2>Administrador</h2>
            <p>Accede con usuario y contraseña</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;

