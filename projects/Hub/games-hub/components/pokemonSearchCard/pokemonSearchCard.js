import "./pokemonSearchCard.css"
import { pokeApiSearch } from "../../pages/pokeapiSearchPage/pokeApiSearch";
import { pokeApi } from "../../pages/pokeApi/pokeapi";
import { CleanerPage } from "../../utils/CleanerPage";



export const PokemonSearchCard = (array) => {

  const main = document.querySelector("main");
  CleanerPage(main)
  main.innerHTML= `
  <nav class= "pokemonBarNav"><buttom class="buttomBacktoPoke" id ="backToPoke">Back</buttom><input type"text" class= "searcher" id="inputSearch">
  <buttom class="buttomSearcher" id ="pokemonSearcher">Buscar</buttom>
  
  <ul>
  <li>Categoria 1</li>
  <li>Categoria 2</li>
  <li>Categoria 3</li>
  </ul>
  
  
  </nav>
  
  `

  
  var buttom =document.querySelector("#pokemonSearcher")
  buttom.addEventListener("click", ()=>{pokeApiSearch()})

  var buttomBack =document.querySelector("#backToPoke")
  buttomBack.addEventListener("click", ()=>{CleanerPage(main);

    pokeApi(main)})



  var divPokemonSearch = document.createElement("div");
  divPokemonSearch.className = "divPokemonSearch";
  main.appendChild(divPokemonSearch);

  for (const key in array) {

    var div= document.createElement("div")
    div.className="divPokemonCard"
    divPokemonSearch.appendChild(div)
    
    var h3 = document.createElement("h1");
    h3.innerText =  array[key].name;
    div.appendChild(h3);
   
    var img = document.createElement("img");
    img.src = array[key].image;
  div.appendChild(img);

    var h4 = document.createElement("h3");
    h4.innerText = `Weight: ${array[key].weight}`;
    div.appendChild(h4);

    var heightPokemon = document.createElement("h3");
    heightPokemon.innerText = `Height: ${array[key].height}`;
    div.appendChild(heightPokemon);


    var type = document.createElement("h3");
    type.innerText = `Type: ${array[key].type}`;
    div.appendChild(type);

    var ability = document.createElement("h3");
    ability.innerText = `Ability: ${array[key].ability}`;
    div.appendChild(ability);












  }
};