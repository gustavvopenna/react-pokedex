import axios from 'axios'

const pokemonService = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
});

export const getPokemons = ({ pageParam = 'pokemon?offset=0&limit=20' }) => {
  return pokemonService.get(pageParam)
};