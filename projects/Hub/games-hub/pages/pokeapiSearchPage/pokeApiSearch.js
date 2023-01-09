import "./pokeApiSearch.css";
import { PokemonSearchCard } from "../../components/pokemonSearchCard/pokemonSearchCard";
import { pokemonArray } from "../pokeApi/pokeapi";

export const pokeApiSearch = () => {
  const input = document.querySelector("#inputSearch");
  const pokemonArraySearch = [];
  for (let index = 0; index < pokemonArray.length; index++) {
    if (pokemonArray[index].name.toUpperCase() === input.value.toUpperCase()) {
      pokemonArraySearch.push({
        name: pokemonArray[index].name.toUpperCase(),
        weight: pokemonArray[index].weight,
        image: pokemonArray[index].image2,
        height: pokemonArray[index].height,
        type: pokemonArray[index].type,
        ability: pokemonArray[index].ability,
      });
    }
  }
  PokemonSearchCard(pokemonArraySearch);
};
