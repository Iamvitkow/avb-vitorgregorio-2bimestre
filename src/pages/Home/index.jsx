// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from 'src/PokemonCard';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonsData = [];
        for (let id = 494; id <= 649; id++) {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
          pokemonsData.push(response.data);
        }
        setPokemons(pokemonsData);
      } catch (error) {
        console.error('Erro ao buscar os Pokémon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Home;
