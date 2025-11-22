import React, { useState } from 'react';
import { importarDocentes } from '../services/usersService';
import './ImportarExcel.css';

const ImportarExcel = () => {
  const [archivo, setArchivo] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validar que sea Excel
      const extensionesPermitidas = ['.xlsx', '.xls'];
      const extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      
      if (!extensionesPermitidas.includes(extension)) {
        setError('Solo se aceptan archivos Excel (.xlsx o .xls)');
        setArchivo(null);
        return;
      }

      setArchivo(file);
      setError(null);
      setResultado(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!archivo) {
      setError('Por favor selecciona un archivo');
      return;
    }

    setCargando(true);
    setError(null);
    setResultado(null);

    try {
      const respuesta = await importarDocentes(archivo);
      setResultado(respuesta);
      setArchivo(null);
      // Limpiar el input
      e.target.reset();
    } catch (err) {
      const mensajeError = err.message || err.error || 'Error al importar el archivo';
      setError(mensajeError);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="importar-excel-container">
      <div className="importar-excel-card">
        <h2>📊 Importar Docentes desde Excel</h2>
        <p className="descripcion">
          Sube un archivo Excel (.xlsx o .xls) con la información de los docentes.
          El archivo debe tener las columnas: cedula, nombre, email, telefono, departamento, tituloAcademico
        </p>

        <form onSubmit={handleSubmit} className="form-importar">
          <div className="file-input-container">
            <label htmlFor="archivo-excel" className="file-label">
              <span className="file-icon">📁</span>
              <span className="file-text">
                {archivo ? archivo.name : 'Seleccionar archivo Excel'}
              </span>
              <input
                id="archivo-excel"
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileChange}
                disabled={cargando}
                className="file-input"
              />
            </label>
          </div>

          {error && (
            <div className="error-message">
              ❌ {error}
            </div>
          )}

          {resultado && (
            <div className="success-message">
              <h3>✅ Importación Completada</h3>
              <div className="resultado-detalle">
                <p><strong>Usuarios creados:</strong> {resultado.creados || 0}</p>
                <p><strong>Usuarios actualizados:</strong> {resultado.actualizados || 0}</p>
                {resultado.errores && resultado.errores.length > 0 && (
                  <div className="errores-lista">
                    <p><strong>Errores encontrados:</strong></p>
                    <ul>
                      {resultado.errores.map((error, index) => (
                        <li key={index}>
                          Fila {error.fila}: {error.mensaje}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          <button 
            type="submit" 
            disabled={!archivo || cargando}
            className="btn-subir"
          >
            {cargando ? '⏳ Subiendo...' : '📤 Subir Archivo'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImportarExcel;

