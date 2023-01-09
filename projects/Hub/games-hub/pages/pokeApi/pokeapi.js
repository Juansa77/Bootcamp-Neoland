import "./pokeapi.css";
import { PokemonPrintTemplate } from "../../components/PokemonCard/PokemonCard";
import { pokeApiNavBar } from "../../components/Pokeapi NavBar/PokeApiNavBar";

export var pokemonArray =new Array();


export const pokeApi = () => {
  pokemonArray=[]
  

pokeApiNavBar()




  async function fetcher() {
    for (let index = 1; index < 160; index++) {
      const urlPokemon2 = `https://pokeapi.co/api/v2/pokemon/${index}`;

      const raw = await fetch(urlPokemon2);
      const formattedNewFetch = await raw.json();

      pokemonArray.push({
        name: formattedNewFetch.name.toUpperCase(),
            weight: formattedNewFetch.weight,
            image2: formattedNewFetch.sprites.other.dream_world.front_default,
            height: formattedNewFetch.height,
            type:formattedNewFetch.types[0].type.name,
            ability:formattedNewFetch.abilities[0].ability.name,

        image: formattedNewFetch.sprites.front_default,
      });
    }

    PokemonPrintTemplate(pokemonArray);
  }
  fetcher();
};


console.log(pokemonArray)