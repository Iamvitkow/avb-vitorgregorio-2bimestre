import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonsUnova } from '../DetalhesPokemon';
import axios from 'axios';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const basicData = await getPokemonsUnova();

        // Busca os dados detalhados com Promise.all
        const detailedData = await Promise.all(
          basicData.map(async (pokemon) => {
            const response = await axios.get(pokemon.url);
            return response.data;
          })
        );
        setPokemons(detailedData);
      } catch (error) {
        console.error("Erro ao buscar os Pokémons:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemons();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Pokédex de Unova</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {pokemons.map((pokemon) => (
          <Link
            key={pokemon.id}
            to={`/detalhes/${pokemon.id}`}
            className="bg-white shadow-md rounded-xl p-4 text-center hover:bg-gray-100 transition"
          >
            <img
              src={
                pokemon.sprites.front_default ||
                'https://via.placeholder.com/96?text=No+Image'
              }
              alt={pokemon.name}
              className="mx-auto"
            />
            <p className="capitalize font-semibold mt-2">{pokemon.name}</p>
            <p className="text-sm text-gray-500">
              Tipo: {pokemon.types.map(t => t.type.name).join(', ')}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
