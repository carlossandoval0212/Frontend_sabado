import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="role-selection-container">
      <div className="role-selection-card">
        <h1>Sistema de Asistencias</h1>
        <p>Selecciona tu rol para continuar</p>
        
        <div className="buttons-container">
          <button 
            className="role-button docente-button"
            onClick={() => navigate('/login-docente')}
          >
            <span className="role-icon">👨‍🏫</span>
            Soy Docente
          </button>
          
          <button 
            className="role-button admin-button"
            onClick={() => navigate('/login-admin')}
          >
            <span className="role-icon">👨‍💼</span>
            Soy Administrador
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;