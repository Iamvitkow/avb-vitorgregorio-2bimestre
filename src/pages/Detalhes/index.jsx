import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detalhes() {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPokemon() {
      try {
        // Buscando os detalhes do Pokémon pela API usando o nome
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
      } catch (err) {
        setError("Erro ao buscar os dados do Pokémon.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemon();
  }, [name]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="capitalize text-3xl font-bold mb-4">{pokemon.name}</h2>
      <div className="flex flex-col items-center">
        <img 
          src={pokemon.sprites.front_default}
          alt={pokemon.name} 
          className="w-48 h-48 mb-4"
        />
        <p className="text-lg">
          <span className="font-semibold">Tipo:</span>{" "}
          {pokemon.types.map(t => t.type.name).join(', ')}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Altura:</span> {pokemon.height} decímetros
        </p>
        <p className="text-lg">
          <span className="font-semibold">Peso:</span> {pokemon.weight} hectogramas
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2">Habilidades:</h3>
        <ul className="list-disc list-inside">
          {pokemon.abilities.map((abilityObj, index) => (
            <li key={index} className="capitalize">
              {abilityObj.ability.name} {abilityObj.is_hidden ? "(Oculta)" : ""}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2">Estatísticas:</h3>
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index} className="capitalize text-lg">
              <span className="font-semibold">{stat.stat.name}:</span> {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
