import api from './api';

const API_URL = '/users';

// Importar docentes desde Excel
export const importarDocentes = async (archivo) => {
  try {
    // Crear FormData para enviar el archivo
    const formData = new FormData();
    formData.append('archivo', archivo);

    // Hacer la petición con FormData
    const response = await api.post(`${API_URL}/importar-docentes`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message || 'Error al importar docentes';
  }
};

// Obtener todos los usuarios
export const obtenerUsuarios = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message || 'Error al obtener usuarios';
  }
};

