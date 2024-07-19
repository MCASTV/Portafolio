
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importa el componente App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Asegúrate de que tu archivo HTML tenga un elemento con id="root"
);
