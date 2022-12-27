import "./pokeApiSearch.css";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";



export const pokeApiAddType = (name) => {
  async function fetcher() {
    const pokemonType = [];
    for (let index = 1; index < 160; index++) {
      const urlPokemon2 = `https://pokeapi.co/api/v2/pokemon/${index}`;

      const raw = await fetch(urlPokemon2);
      const formattedNewFetch = await raw.json();

      if (
        formattedNewFetch.types[0].type.name.toUpperCase()===name.toUpperCase() 
        
      ) {
        pokemonType.push({
          name: formattedNewFetch.name.toUpperCase(),
          weight: formattedNewFetch.weight,
          image: formattedNewFetch.sprites.front_default,
          height: formattedNewFetch.height,
          type:formattedNewFetch.types[0].type.name,
          ability:formattedNewFetch.abilities[0].ability.name,
        });
      }
    }
    PokemonCard(pokemonType);
    console.log(pokemonType)

  }

  fetcher();
};
