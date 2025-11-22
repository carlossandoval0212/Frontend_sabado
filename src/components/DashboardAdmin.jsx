import React from 'react';
import LogoutButton from './LogoutButton';
import ImportarExcel from './ImportarExcel';
import { getCurrentUser } from '../services/authService';
import './DashboardAdmin.css';

const DashboardAdmin = () => {
  const user = getCurrentUser();

  return (
    <div className="dashboard-admin">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>👨‍💼 Dashboard Administrador</h1>
          <p>Bienvenido, {user?.nombre || 'Administrador'}</p>
        </div>
        <LogoutButton />
      </div>

      <div className="dashboard-content">
        <div className="seccion-importar">
          <ImportarExcel />
        </div>

        <div className="seccion-info">
          <div className="info-card">
            <h3>📋 Funcionalidades Disponibles</h3>
            <ul>
              <li>✅ Importar docentes desde Excel</li>
              <li>🚧 Gestión de usuarios (próximamente)</li>
              <li>🚧 Generación de reportes (próximamente)</li>
              <li>🚧 Ver estadísticas (próximamente)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;

