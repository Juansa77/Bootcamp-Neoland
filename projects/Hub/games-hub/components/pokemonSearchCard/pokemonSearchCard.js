import "./pokemonSearchCard.css"
import { pokeApiSearch } from "../../pages/pokeapiSearchPage/pokeApiSearch";
import { pokeApi } from "../../pages/pokeApi/pokeapi";
import { CleanerPage } from "../../utils/CleanerPage";
import { pokeApiAddType } from "../../pages/pokeapiSearchPage/pokeapiAddType";



export const PokemonSearchCard = (array) => {

  const main = document.querySelector("main");
  CleanerPage(main)
  main.innerHTML= `
  <nav class= "pokemonBarNav"><buttom class="buttomBacktoPoke" id ="backToPoke">Back</buttom><input type"text" class= "searcher" id="inputSearch">
  <buttom class="buttomSearcher" id ="pokemonSearcher">Buscar</buttom>
  
  <buttom class="type" id ="bug">Bug</buttom>
  <buttom class="type" id ="dragon">Dragon</buttom>
  <buttom class="type" id ="electric">Electric</buttom>
  <buttom class="type" id ="fighting">Fighting</buttom>
  <buttom class="type" id ="fire">fire</buttom>

  <buttom class="type" id ="ghost">ghost</buttom>
  <buttom class="type" id ="grass">grass</buttom>
  <buttom class="type" id ="ground">ground</buttom>
  <buttom class="type" id ="ice">ice</buttom>
  <buttom class="type" id ="normal">normal</buttom>
  <buttom class="type" id ="poison">poison</buttom>
  <buttom class="type" id ="psychic">psychic</buttom>
  <buttom class="type" id ="rock">rock</buttom>
  <buttom class="type" id ="water">water</buttom>

  
  </nav>
  
  `

  const addEventType =(buttID)=>{
    const idB= buttID.id
    buttID.addEventListener("click", () => {
      pokeApiAddType(idB);
    })
  }
  
  
    const buttonBug = document.querySelector("#bug");
    addEventType(buttonBug)
   
    const buttoDragon = document.querySelector("#dragon");
    addEventType(buttoDragon)
  
    const buttoElectric = document.querySelector("#electric");
    addEventType(buttoElectric)
  
    const buttoFighting = document.querySelector("#fighting");
    addEventType(buttoFighting)
  
    const buttoFire = document.querySelector("#fire");
    addEventType(buttoFire)
  
  
    const buttoGhost = document.querySelector("#ghost");
    addEventType(buttoGhost)
  
    const buttoGrass = document.querySelector("#grass");
    addEventType(buttoGrass)
  
    const buttonGround = document.querySelector("#ground");
    addEventType(buttonGround)
  
    const buttoIce = document.querySelector("#ice");
    addEventType(buttoIce)
  
    const buttoNormal = document.querySelector("#normal");
    addEventType(buttoNormal)
  
    const buttoPoison = document.querySelector("#poison");
    addEventType(buttoPoison)
  
    const buttoPsychic = document.querySelector("#psychic");
    addEventType(buttoPsychic)
  
    const buttoRock = document.querySelector("#rock");
    addEventType(buttoRock)
    const buttoWater = document.querySelector("#water");
    addEventType(buttoWater)
  

  
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