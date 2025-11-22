import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated, getCurrentUser } from '../services/authService';

// Componente para rutas anidadas
export const ProtectedRouteLayout = ({ allowedRoles = [] }) => {
  const authenticated = isAuthenticated();
  const user = getCurrentUser();

  // Si no está autenticado, redirigir al login
  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  // Si hay roles permitidos y el usuario no tiene uno de esos roles, redirigir
  if (allowedRoles.length > 0 && user && !allowedRoles.includes(user.role)) {
    // Redirigir según el rol del usuario
    if (user.role === 'docente') {
      return <Navigate to="/dashboard-docente" replace />;
    } else if (user.role === 'administrador') {
      return <Navigate to="/dashboard-admin" replace />;
    }
    return <Navigate to="/" replace />;
  }

  // Permitir acceso
  return <Outlet />;
};

// Componente para rutas individuales
const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const authenticated = isAuthenticated();
  const user = getCurrentUser();

  // Si no está autenticado, redirigir al login
  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  // Si hay roles permitidos y el usuario no tiene uno de esos roles, redirigir
  if (allowedRoles.length > 0 && user && !allowedRoles.includes(user.role)) {
    // Redirigir según el rol del usuario
    if (user.role === 'docente') {
      return <Navigate to="/dashboard-docente" replace />;
    } else if (user.role === 'administrador') {
      return <Navigate to="/dashboard-admin" replace />;
    }
    return <Navigate to="/" replace />;
  }

  // Permitir acceso
  return children;
};

export default ProtectedRoute;

