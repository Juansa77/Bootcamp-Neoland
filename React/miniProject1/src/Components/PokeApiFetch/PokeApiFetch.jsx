import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import "./pokeApiFetch.css"

const PokeApiFetch = () => {
  const pokemonArray = [];


  const [allPokes, setallPokes] = useState([]);
  const [result, setResult] = useState([]);
  const [load, setLoad] = React.useState('true');

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=160`)
      .then((response) => response.json())
      .then((data) =>
        setResult(
          data.results.map((item) => {
            fetch(item.url)
              .then((response) => response.json())
              .then((allPokemons) => pokemonArray.push(allPokemons));
            setallPokes(pokemonArray);
          })
        )
      );
    
  }, []);

  setTimeout(() => {
    setLoad(false);
    }, 1000);

  return (
  
  <div className="App">
  <div className='pokegallery'>
  {   
  allPokes.map((element, i) => (
  <div id={element.id} key={element.id}>
  <div className='card'>
  <img  className="pokemonPic" src={element.sprites.other.dream_world.front_default} alt='pokemon' />
  <div >
  <h3 >{element.name}</h3>
  <h6>type: {element.types[0].type.name}</h6>
  <h6>type: {element.abilities[0].ability.name}</h6>
  </div>
  </div>
  </div>
  ))
  }
  </div>
  </div>
  
  )
 
};

export default PokeApiFetch;
