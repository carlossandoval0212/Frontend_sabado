import axios from 'axios';
import { logout } from './authService';

// Usar baseURL del Shell (variable de entorno) o fallback a localhost
const API_URL = import.meta.env.VITE_API_URL || window.__SHELL_API_URL__ || 'http://localhost:3000';

// Crear instancia de axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token a las peticiones
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Si es FormData, no establecer Content-Type (el navegador lo hace automáticamente)
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type'];
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Si el token expiró o no es válido (401)
    if (error.response?.status === 401) {
      // Limpiar datos de sesión
      logout();
      
      // Redirigir al login si no estamos ya ahí
      if (window.location.pathname !== '/' && 
          window.location.pathname !== '/login-docente' && 
          window.location.pathname !== '/login-admin') {
        window.location.href = '/';
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;

