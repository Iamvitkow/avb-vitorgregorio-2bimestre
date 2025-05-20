import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detalhes from './pages/Detalhes'
import DetalhesPokemon from './pages/DetalhesPokemon';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:name" element={<Detalhes />} />
    </Routes>
  );
}

export default App;

