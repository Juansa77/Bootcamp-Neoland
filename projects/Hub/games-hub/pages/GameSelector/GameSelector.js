import "./GameSelector.css";
import { CleanerPage } from "../../utils/CleanerPage";
import { pokeApi } from "../pokeApi/pokeapi";
import { hangMan } from "../hangMan/hangMan";

export const GameSelector = () => {
  const main = document.querySelector("main");
  main.innerHTML = `


<div class="divGameSelector">
<figure class= "figureGameSelector" id="pokeApiFigure"><img class="coverGame" src="pokemonCover.jpg"> <h3>Pokeapi</h3></figure>
<figure class= "figureGameSelector" id="hangManFigure"><img class="coverGame"  src="pokemonCover.jpg"> <h3>HangMan</h3></figure>
<figure class= "figureGameSelector"><img class="coverGame" src="pokemonCover.jpg"> <h3>Juego</h3></figure>


</div>



`;
  const pokeapiSelect = document.querySelector("#pokeApiFigure");

  pokeapiSelect.addEventListener("click", () => {
    CleanerPage(main);

    pokeApi(main);
  });

  const hangManSelect = document.querySelector("#hangManFigure");

  hangManSelect.addEventListener("click", () => {
    CleanerPage(main);

    hangMan(main);
  });



};
