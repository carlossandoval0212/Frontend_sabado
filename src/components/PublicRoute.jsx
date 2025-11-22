import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated, getCurrentUser } from '../services/authService';

const PublicRoute = ({ children }) => {
  const authenticated = isAuthenticated();
  const user = getCurrentUser();

  // Si ya está autenticado, redirigir al dashboard correspondiente
  if (authenticated && user) {
    if (user.role === 'docente') {
      return <Navigate to="/dashboard-docente" replace />;
    } else if (user.role === 'administrador') {
      return <Navigate to="/dashboard-admin" replace />;
    }
  }

  // Permitir acceso a rutas públicas
  return children;
};

export default PublicRoute;

