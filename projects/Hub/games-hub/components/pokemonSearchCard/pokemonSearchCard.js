import "./pokemonSearchCard.css";

import { CleanerPage } from "../../utils/CleanerPage";

import { pokeApiNavBar } from "../Pokeapi NavBar/PokeApiNavBar";


export const PokemonSearchCard = (array) => {
  const main = document.querySelector("main");
  CleanerPage(main);

  pokeApiNavBar();

  var divPokemonSearch = document.createElement("div");
  divPokemonSearch.className = "divPokemonSearch";
  main.appendChild(divPokemonSearch);

  for (const key in array) {
    var div = document.createElement("div");
    div.className = "divPokemonCard";
    div.classList.add(array[key].type)
    divPokemonSearch.appendChild(div);

    var h3 = document.createElement("h1");
    h3.innerText = array[key].name;
    h3.className="pokemonName"
  
    div.appendChild(h3);

    var img = document.createElement("img");
    img.src = array[key].image;
    img.className="pokemonPic"
    div.appendChild(img);
    
    var imgClass = document.createElement("img");
    imgClass.src = `PUBLIC/ICONS/${array[key].type.toUpperCase()}.png`;
    imgClass.className="typeIMG"
    div.appendChild(imgClass);

    var pesoH = document.createElement("h3");
    pesoH.innerText = `Weight: ${array[key].weight}`;
    pesoH.classList="pokemonPeso"
    div.appendChild(pesoH);

    var heightPokemon = document.createElement("h3");
    heightPokemon.innerText = `Height: ${array[key].height}`;
    heightPokemon.classList="pokemonHeight"
    div.appendChild(heightPokemon);

    var type = document.createElement("h3");
    type.innerText = `Type: ${array[key].type}`;
    type.classList="pokemonType"
    div.appendChild(type);

    var ability = document.createElement("h3");
    ability.innerText = `Ability: ${array[key].ability}`;
    ability.classList="pokemonAbility"
    div.appendChild(ability);
  }
};
