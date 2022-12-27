import "./pokeApiSearch.css";
import { PokemonSearchCard } from "../../components/pokemonSearchCard/pokemonSearchCard";

export const pokeApiSearch = () => {
  async function fetcher() {
    const input = document.querySelector("#inputSearch");
    const pokemonArray = [];
    for (let index = 1; index < 160; index++) {
      const urlPokemon2 = `https://pokeapi.co/api/v2/pokemon/${index}`;

      const raw = await fetch(urlPokemon2);
      const formattedNewFetch = await raw.json();

      if (
        formattedNewFetch.name.toUpperCase() ===
        input.value.toUpperCase()
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
