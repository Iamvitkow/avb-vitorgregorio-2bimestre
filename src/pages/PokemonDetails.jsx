// src/pages/PokemonDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Erro ao buscar os detalhes do Pokémon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="p-4">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-full h-auto"
      />
      <h3 className="text-center text-2xl font-semibold mt-4">{pokemon.name}</h3>
      <p className="mt-2">Tipo: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
      <p className="mt-2">Habilidades: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
    </div>
  );
};

export default PokemonDetails;
