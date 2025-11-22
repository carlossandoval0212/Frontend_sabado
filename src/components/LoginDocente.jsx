import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginDocente } from '../services/authService';
import './Login.css';

const LoginDocente = () => {
  const navigate = useNavigate();
  const [cedula, setCedula] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await loginDocente(cedula);
      navigate('/dashboard-docente');
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Volver
        </button>
        <h1>👨‍🏫 Login Docente</h1>
        <p className="subtitle">Ingresa tu número de cédula</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="cedula">Número de Cédula</label>
            <input
              id="cedula"
              type="text"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              placeholder="12345678"
              required
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={loading || !cedula} className="submit-button">
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginDocente;

