import { useState, useEffect} from "react";
import {useDebounce} from "use-debounce"



const PokemonFetch = () => {
  const [filter, setFilter] = useState("ditto");
  const [debounceFilter] = useDebounce(filter, 500)
  const [pokemonCollection, setPokemonCollection] = useState([]);

  useEffect(() => {
    const getPokemonFiltered = async () => {
      const pokemonList = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${filter}`
      );

      const pokemonListToJson = await pokemonList.json();

      return {
        ...pokemonListToJson,
        name: pokemonListToJson.name,
        image: pokemonListToJson.sprites.front_shiny,
      };
    };

    getPokemonFiltered().then((pokemon) => setPokemonCollection([pokemon]));
  }, [debounceFilter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />

      <ul>
      {pokemonCollection.map((pokemon) => (
         <li key={pokemon.name}>
           <h1>{pokemon.name}</h1>
           <img src={pokemon.image} alt={pokemon.name} />
         </li>
       ))}
      </ul>
    </div>
  );
};

export default PokemonFetch;
