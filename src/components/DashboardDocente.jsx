import React from 'react';
import LogoutButton from './LogoutButton';
import { getCurrentUser } from '../services/authService';
import './DashboardDocente.css';

const DashboardDocente = () => {
  const user = getCurrentUser();

  return (
    <div className="dashboard-docente">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>👨‍🏫 Dashboard Docente</h1>
          <p>Bienvenido, {user?.nombre || 'Docente'}</p>
        </div>
        <LogoutButton />
      </div>

      <div className="dashboard-content">
        <div className="seccion-info">
          <div className="info-card">
            <h3>📋 Funcionalidades Disponibles</h3>
            <ul>
              <li>🚧 Ver clases del día (próximamente)</li>
              <li>🚧 Registrar asistencia (próximamente)</li>
              <li>🚧 Ver historial (próximamente)</li>
              <li>🚧 Reportar incidencias (próximamente)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDocente;

