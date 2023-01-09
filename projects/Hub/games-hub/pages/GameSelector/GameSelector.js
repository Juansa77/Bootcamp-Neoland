import "./GameSelector.css";


import { init } from "../../main";




export const GameSelector = () => {
  const main = document.querySelector("main");
  main.innerHTML = `


<div class="divGameSelector">
<figure class= "figureGameSelector" id="pokeApiFigure"><h1>Pokeapi</h1></figure>
<figure class= "figureGameSelector" id="hangManFigure"><h1>HangMan</h1></figure>
<figure class= "figureGameSelector" id= "moleFigure" > <h1>Whack a mole</h1></figure>


</div>



`;
  const pokeapiSelect = document.querySelector("#pokeApiFigure");

  pokeapiSelect.addEventListener("click", () => {
    init("PokeApi");
  });

  const hangManSelect = document.querySelector("#hangManFigure");

  hangManSelect.addEventListener("click", () => {
    init("HangMan");
  });

  const moleSelect = document.querySelector("#moleFigure");

  moleSelect.addEventListener("click", () => {
    init("Mole");
  });
};

