import "./pokeApiSearch.css";
import { pokemonArray } from "../pokeApi/pokeapi";

import "./pokeApiSearch.css";
import { PokemonSearchCard } from "../../components/pokemonSearchCard/pokemonSearchCard";

export const pokeApiAddEvent = (name) => {
  const pokemonEventArray = [];
  for (let index = 0; index < pokemonArray.length; index++) {
    if (name.toUpperCase() === pokemonArray[index].name.toUpperCase()) {
      pokemonEventArray.push({
        name: pokemonArray[index].name.toUpperCase(),
        weight: pokemonArray[index].weight,
        image: pokemonArray[index].image2,
        height: pokemonArray[index].height,
        type: pokemonArray[index].type,
        ability: pokemonArray[index].ability,
      });
    }
  }
  PokemonSearchCard(pokemonEventArray);
};
