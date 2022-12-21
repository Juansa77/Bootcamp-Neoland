import "./pokeapi.css";

import { PokemonCard } from "../../components/PokemonCard/PokemonCard";

export const pokeApi = () => {
  async function fetcher() {
    const pokemonArray = [];
    for (let index = 1; index < 160; index++) {
      const urlPokemon2 = `https://pokeapi.co/api/v2/pokemon/${index}`;

      const raw = await fetch(urlPokemon2);
      const formattedNewFetch = await raw.json();
     

      pokemonArray.push({
        name: formattedNewFetch.name.toUpperCase(),
        weight: formattedNewFetch.weight,
        image: formattedNewFetch.sprites.front_default,
        height: formattedNewFetch.height,
        type:formattedNewFetch.types[0].type.name,
        ability1:formattedNewFetch.abilities[0].ability.name
      


      });
    }

   

    PokemonCard(pokemonArray);
  }
  fetcher();
};

/*export const pokeApi = () => {
  async function fetcher() {
    const pokemonArray = [];
    for (let index = 1; index < 160; index++) {
      const urlPokemon2 = `https://pokeapi.co/api/v2/pokemon/${index}`;

      const raw = await fetch(urlPokemon2);
      const formattedNewFetch = await raw.json();

      pokemonArray.push({
        name: formattedNewFetch.name.toUpperCase(),
        weight: formattedNewFetch.weight,
        image: formattedNewFetch.sprites.front_default,
        height:formattedNewFetch.height
      });
    }

    PokemonCard(pokemonArray);
  }
  fetcher();
};
*/
