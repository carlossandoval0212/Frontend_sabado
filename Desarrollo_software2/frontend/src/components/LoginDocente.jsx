import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginDocente } from '../services/authService';
import './Login.css';

const LoginDocente = () => {
  const [cedula, setCedula] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await loginDocente(cedula);
      console.log('Login exitoso:', response);
      
      // Redirigir al dashboard de docente
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
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          ← Volver
        </button>
        
        <h2>Login Docente</h2>
        <p className="subtitle">Ingresa tu número de cédula</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cedula">Cédula</label>
            <input
              type="text"
              id="cedula"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              placeholder="Ej: 12345678"
              required
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="submit-button"
            disabled={loading}
          >
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginDocente;