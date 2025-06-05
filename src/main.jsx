// src/index.jsx (ou src/main.jsx, dependendo da sua configuração)

import React from 'react';
import ReactDOM from 'react-dom/client'; // Para React 18+
import { BrowserRouter } from 'react-router-dom'; // *** ISTO É CRUCIAL ***
import App from './App'; // Importa seu componente App
import './index.css'; // Se você tem um arquivo CSS global, mantenha esta linha

// Pega o elemento HTML onde sua aplicação React será "montada"
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza sua aplicação
root.render(
  <React.StrictMode>
    {/* *** AQUI VOCÊ ENVOLVE SEU COMPONENTE APP COM O BrowserRouter *** */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
