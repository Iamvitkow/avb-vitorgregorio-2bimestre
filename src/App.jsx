// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 


import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import DetalhesPokemon from './pages/DetalhesPokemon'; 

function App() {
  return (
    <>
      <nav className="flex gap-4 p-4 bg-gray-100 shadow">
    
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:name" element={<Detalhes />} />
      </Routes>
    </>
  );
}

export default App;
