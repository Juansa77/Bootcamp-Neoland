import "./PokemonCard.css";

import { pokeApiAddEvent } from "../../pages/pokeapiSearchPage/pokeapiAddEvent";

import { pokeApiNavBar } from "../Pokeapi NavBar/PokeApiNavBar";
import { CleanerPage } from "../../utils/CleanerPage";

export const PokemonPrintTemplate = (array) => {
  const main = document.querySelector("main");
  CleanerPage(main);
  pokeApiNavBar();
  var divPokemonContainer = document.createElement("div");
  var divInput = document.createElement("div");
  divInput.className="inputSearch"

  var input = document.createElement("input");
  input.className="inputPoke"
  input.placeholder="Search..."

  divPokemonContainer.appendChild(divInput);
  divInput.appendChild(input);

  divPokemonContainer.appendChild(divInput);
  divPokemonContainer.className = "pokemonDiv";
  main.appendChild(divPokemonContainer);

  for (const key in array) {
    var figure = document.createElement("figure");
    figure.className = "figureCardPokemon";
    figure.classList.add(array[key].type);
    figure.id = array[key].name;
    const target = figure.id;
    figure.addEventListener("click", () => {
      pokeApiAddEvent(target);
    });

    divPokemonContainer.appendChild(figure);
    var h3 = document.createElement("h3");
    h3.innerText = array[key].name;
    figure.appendChild(h3);

    var img = document.createElement("img");
    img.src = array[key].image;
    figure.appendChild(img);
  }

  input.addEventListener("keyup", (e) => {
    const figures = document.querySelectorAll(".figureCardPokemon");
    console.log(figures[0].id);
    let text = e.target.value.toUpperCase();

    for (let index = 0; index < figures.length; index++) {
      if (!figures[index].id.includes(text)) {
        figures[index].classList.add("hide");
      } else {
        figures[index].classList.remove("hide");
      }
    }
  });
};
