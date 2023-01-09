import { PokemonPrintTemplate } from "../../components/PokemonCard/PokemonCard";
import "./pokeApiSearch.css";
import { pokemonArray } from "../pokeApi/pokeapi";

export const pokeApiAddType = (name) => {
  console.log(pokemonArray);
  var pokemonType = [];

  for (let index = 1; index < pokemonArray.length; index++) {
    if (pokemonArray[index].type.toUpperCase() === name.toUpperCase()) {
      pokemonType.push({
        name: pokemonArray[index].name.toUpperCase(),
        weight: pokemonArray[index].weight,
        image: pokemonArray[index].image,
        height: pokemonArray[index].height,
        type: pokemonArray[index].type,
        ability: pokemonArray[index].ability
      });
    }
  }
  PokemonPrintTemplate(pokemonType);
};
