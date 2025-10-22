import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';

// Login para docentes (solo cédula)
export const loginDocente = async (cedula) => {
  try {
    const response = await axios.post(`${API_URL}/login/docente`, {
      cedula
    });
    
    // Guardar el token en localStorage
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Login para administradores (usuario y contraseña)
export const loginAdmin = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login/admin`, {
      username,
      password
    });
    
    // Guardar el token en localStorage
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Cerrar sesión
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Obtener usuario actual
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Verificar si está autenticado
export const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};