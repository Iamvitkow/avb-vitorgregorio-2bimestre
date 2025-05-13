// src/components/PokemonCard.jsx
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-full h-auto"
      />
      <h3 className="text-center text-xl font-semibold mt-2">{pokemon.name}</h3>
      <Link
        to={`/pokemon/${pokemon.id}`}
        className="block text-center text-blue-500 mt-2"
      >
        Ver detalhes
      </Link>
    </div>
  );
};

export default PokemonCard;
<div className="bg-white p-4 rounded-lg shadow-lg">
  <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-full h-auto" />
  <h3 className="text-center text-xl font-semibold mt-2">{pokemon.name}</h3>
</div>

