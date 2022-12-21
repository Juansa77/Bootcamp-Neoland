import "./PokemonCard.css";
import { addEvent } from "../../utils/addevent";
import { pokeApiSearch } from "../../pages/pokeapiSearchPage/pokeApiSearch";
import { pokeApiAddEvent } from "../../pages/pokeapiSearchPage/pokeapiAddEvent";
import { pokeApiAddType } from "../../pages/pokeapiSearchPage/pokeapiAddType";


export const PokemonCard = (array) => {
  const main = document.querySelector("main");
  main.innerHTML = `
  <nav class= "pokemonBarNav"> <input type"text" class= "searcher" id="inputSearch">
  <buttom class="buttomSearcher" id ="pokemonSearcher">Buscar</buttom>
  
  <buttom class="type" id ="bug">Bug</buttom>
  <buttom class="type" id ="dragon">Dragon</buttom>
  <buttom class="type" id ="electric">Electric</buttom>
  <buttom class="type" id ="fighting">Fighting</buttom>
  <buttom class="type" id ="fire">fire</buttom>
  <buttom class="type" id ="flying">flying</buttom>
  <buttom class="type" id ="ghost">ghost</buttom>
  <buttom class="type" id ="grass">grass</buttom>
  <buttom class="type" id ="ground">ground</buttom>
  <buttom class="type" id ="ice">ice</buttom>
  <buttom class="type" id ="normal">normal</buttom>
  <buttom class="type" id ="poison">poison</buttom>
  <buttom class="type" id ="psychic">psychic</buttom>
  <buttom class="type" id ="rock">rock</buttom>
  <buttom class="type" id ="water">water</buttom>


  


  
  
  
  `;

  const buttonType =document.querySelectorAll(".type")
  console.log(buttonType)

for (let index = 0; index < buttonType.length; index++) {
  
  const idb= buttonType[index].id
   buttonType.forEach(buttom =>{buttom.addEventListener("click", ()=>{pokeApiAddType(idb)})})
  
}




  

 

  
    
  
 

 

  var buttom = document.querySelector("#pokemonSearcher");
  buttom.addEventListener("click", () => {
    pokeApiSearch();
  });

  var divPokemonContainer = document.createElement("div");
  divPokemonContainer.className = "pokemonDiv";
  main.appendChild(divPokemonContainer);

  for (const key in array) {
    var figure = document.createElement("figure");
    figure.className = "figureCardPokemon";
    figure.id=array[key].name;
    const target =figure.id
    figure.addEventListener("click", ()=>{pokeApiAddEvent(target)})
   
    divPokemonContainer.appendChild(figure);
    var h3 = document.createElement("h3");
    h3.innerText = array[key].name;
    figure.appendChild(h3);

    var h4 = document.createElement("h5");
    h4.innerText = `Peso: ${array[key].weight}`;
    figure.appendChild(h4);

    var img = document.createElement("img");
    img.src = array[key].image;
    figure.appendChild(img);
  }
};
