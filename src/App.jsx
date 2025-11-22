import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoleSelection from './components/RoleSelection';
import LoginDocente from './components/LoginDocente';
import LoginAdmin from './components/LoginAdmin';
import LogoutButton from './components/LogoutButton';
import DashboardAdmin from './components/DashboardAdmin';
import { ProtectedRouteLayout } from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          {/* Rutas públicas */}
          <Route 
            path="/" 
            element={
              <PublicRoute>
                <RoleSelection />
              </PublicRoute>
            } 
          />
          <Route 
            path="/login-docente" 
            element={
              <PublicRoute>
                <LoginDocente />
              </PublicRoute>
            } 
          />
          <Route 
            path="/login-admin" 
            element={
              <PublicRoute>
                <LoginAdmin />
              </PublicRoute>
            } 
          />
          
          {/* Rutas protegidas para docentes */}
          <Route element={<ProtectedRouteLayout allowedRoles={['docente']} />}>
            <Route path="/dashboard-docente" element={
              <div>
                <LogoutButton />
                <div style={{padding: '40px', textAlign: 'center'}}>
                  <h1>Dashboard Docente</h1>
                  <p>¡Bienvenido! Esta página se desarrollará próximamente.</p>
                </div>
              </div>
            } />
          </Route>
          
          {/* Rutas protegidas para administradores */}
          <Route element={<ProtectedRouteLayout allowedRoles={['administrador']} />}>
            <Route path="/dashboard-admin" element={
              <DashboardAdmin />
            } />
          </Route>

          {/* Ruta por defecto - redirigir a home */}
          <Route path="*" element={<RoleSelection />} />
      </Routes>
    </div>
  );
}

export default App;

