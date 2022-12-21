import "./pokeApiSearch.css"

import "./pokeApiSearch.css";
import { PokemonSearchCard } from "../../components/pokemonSearchCard/pokemonSearchCard";

export const pokeApiAddEvent = (name) => {
  async function fetcher() {
  
    const pokemonArray = [];
    for (let index = 1; index < 160; index++) {
      const urlPokemon2 = `https://pokeapi.co/api/v2/pokemon/${index}`;

      const raw = await fetch(urlPokemon2);
      const formattedNewFetch = await raw.json();

      if (
        formattedNewFetch.name.toUpperCase() ===
        name.toUpperCase()
      ) {
        pokemonArray.push({
            name: formattedNewFetch.name.toUpperCase(),
            weight: formattedNewFetch.weight,
            image: formattedNewFetch.sprites.front_default,
            height: formattedNewFetch.height,
            type:formattedNewFetch.types[0].type.name,
            ability:formattedNewFetch.abilities[0].ability.name,
        });
      }
    }
    PokemonSearchCard(pokemonArray)
  }

  fetcher();
};
