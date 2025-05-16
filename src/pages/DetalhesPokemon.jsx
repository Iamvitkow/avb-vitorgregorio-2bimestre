import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemonsUnova = async () => {
  try {
    const response = await api.get('pokemon?limit=156&offset=494');
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar Pokémon:', error);
    return [];
  }
};
