import "./PokemonCard.css";
import { addEvent } from "../../utils/addevent";
import { pokeApiSearch } from "../../pages/pokeapiSearchPage/pokeApiSearch";
import { pokeApiAddEvent } from "../../pages/pokeapiSearchPage/pokeapiAddEvent";


export const PokemonCard = (array) => {
  const main = document.querySelector("main");
  main.innerHTML = `
  <nav class= "pokemonBarNav"> <input type"text" class= "searcher" id="inputSearch">
  <buttom class="buttomSearcher" id ="pokemonSearcher">Buscar</buttom>
  
  <ul>
  <li>Categoria 1</li>
  <li>Categoria 2</li>
  <li>Categoria 3</li>
  </ul>
  
  
  </nav>
  
  `;

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
