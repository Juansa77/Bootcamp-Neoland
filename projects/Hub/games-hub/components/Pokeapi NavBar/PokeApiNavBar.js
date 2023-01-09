import { pokeApiSearch } from "../../pages/pokeapiSearchPage/pokeApiSearch";
import "./PokeApiNavBar.css";
import { pokeApiAddType } from "../../pages/pokeapiSearchPage/pokeapiAddType";

import { PokemonPrintTemplate } from "../PokemonCard/PokemonCard";
import { pokemonArray } from "../../pages/pokeApi/pokeapi";

export const pokeApiNavBar = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
    <nav class= "pokemonBarNav"> 
    
    <buttom class="type" id ="backToPoke"> <img src ="ICONS/ALL.png" /> </buttom>
    <buttom class="type" id ="bug"> <img src ="ICONS/BUG.png" /> </buttom>
    <buttom class="type" id ="dragon"><img src ="ICONS/DRAGON.png" /></buttom>
    <buttom class="type" id ="electric"><img src ="ICONS/ELECTRIC.png" /></buttom>
    <buttom class="type" id ="fighting"><img src ="ICONS/FIGHTING.png" /></buttom>
    <buttom class="type" id ="fairy"><img src ="ICONS/FAIRY.png" /></buttom>
    <buttom class="type" id ="fire"><img src="ICONS/FIRE.png"/></buttom>
   <buttom class="type" id ="ghost"><img src ="ICONS/GHOST.png" /></buttom>
    <buttom class="type" id ="grass"><img src ="ICONS/GRASS.png" /></buttom>
    <buttom class="type" id ="ground"><img src ="ICONS/GROUND.png" /></buttom>
    <buttom class="type" id ="ice"><img src ="ICONS/ICE.png" /></buttom>
    <buttom class="type" id ="normal"><img src="ICONS/NORMAL.png"/></buttom>
    <buttom class="type" id ="poison"><img src ="ICONS/POISON.png" /></buttom>
    <buttom class="type" id ="psychic"><img src ="ICONS/PSYCHIC.png" /></buttom>
    <buttom class="type" id ="rock"><img src ="ICONS/ROCK.png" /></buttom>
    <buttom class="type" id ="water"><img src ="ICONS/WATER.png" /></buttom>
  
  
    
  
  
    
    
    
    `;

  var buttoAll = document.querySelector("#backToPoke");
  buttoAll.addEventListener("click", () => {
    PokemonPrintTemplate(pokemonArray);
  });

  const addEventType = (buttID) => {
    const idB = buttID.id;
    buttID.addEventListener("click", () => {
      pokeApiAddType(idB);
    });
  };

  const buttonBug = document.querySelector("#bug");

  addEventType(buttonBug);

  const buttoDragon = document.querySelector("#dragon");
  addEventType(buttoDragon);

  const buttoElectric = document.querySelector("#electric");
  addEventType(buttoElectric);

  const buttoFighting = document.querySelector("#fighting");
  addEventType(buttoFighting);

  const buttoFire = document.querySelector("#fire");
  addEventType(buttoFire);

  const buttoGhost = document.querySelector("#ghost");
  addEventType(buttoGhost);

  const buttoGrass = document.querySelector("#grass");
  addEventType(buttoGrass);

  const buttonGround = document.querySelector("#ground");
  addEventType(buttonGround);

  const buttoIce = document.querySelector("#ice");
  addEventType(buttoIce);

  const buttoNormal = document.querySelector("#normal");
  addEventType(buttoNormal);

  const buttoPoison = document.querySelector("#poison");
  addEventType(buttoPoison);

  const buttoPsychic = document.querySelector("#psychic");
  addEventType(buttoPsychic);

  const buttoRock = document.querySelector("#rock");
  addEventType(buttoRock);
  const buttoWater = document.querySelector("#water");
  addEventType(buttoWater);

  const buttoFairy = document.querySelector("#fairy");
  addEventType(buttoFairy);

  

;
};
