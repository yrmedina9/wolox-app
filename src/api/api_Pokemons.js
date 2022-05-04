// import axios from "axios";
const url = "https://pokeapi.co/api/v2/";
export async function getPokemons(cant) {
  try {
    let response = await fetch(url + `pokemon/?limit=${cant}&offset=5`)
      .then((res) => res.json())
      .catch((err) => console.error(err));
    for await (const pokemon of response.results) {
      pokemon.data = await getDetailsPokemons(pokemon.url);
      pokemon.img = pokemon.data.sprites.front_default;
    }
    return response;
  } catch (error) {
    return [];
  }
}
export async function getPokemonsPaginate(url) {
  try {
    let response = await fetch(url)
      .then((res) => res.json())
      .catch((err) => console.error(err));
    for await (const pokemon of response.results) {
      pokemon.data = await getDetailsPokemons(pokemon.url);
      pokemon.img = pokemon.data.sprites.front_default;
    }
    return response;
  } catch (error) {
    return [];
  }
}
async function getDetailsPokemons(url) {
  return await fetch(url)
    .then(async (res) => await res.json())
    .catch(() => []);
}
