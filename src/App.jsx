import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetalhesPokemon from './pages/DetalhesPokemon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<DetalhesPokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
