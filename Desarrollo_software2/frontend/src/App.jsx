import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleSelection from './components/RoleSelection';
import LoginDocente from './components/LoginDocente';
import LoginAdmin from './components/LoginAdmin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          <Route path="/login-docente" element={<LoginDocente />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          
          {/* Rutas temporales para los dashboards */}
          <Route path="/dashboard-docente" element={
            <div style={{padding: '40px', textAlign: 'center'}}>
              <h1>Dashboard Docente</h1>
              <p>¡Bienvenido! Esta página se desarrollará próximamente.</p>
            </div>
          } />
          
          <Route path="/dashboard-admin" element={
            <div style={{padding: '40px', textAlign: 'center'}}>
              <h1>Dashboard Administrador</h1>
              <p>¡Bienvenido! Esta página se desarrollará próximamente.</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;