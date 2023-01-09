import "./style.css";

import { NavBar } from "./components/NavBar/NavBar";
import { loggerOut, login } from "./pages/login/login";
import { localStorage } from "./pages/login/login";
import { colorRandom } from "./utils/colorRandom";
import { colorOriginal } from "./utils/colorRandom";
import { CleanerPage } from "./utils/CleanerPage";
import { hangMan } from "./pages/hangMan/hangMan";
import { GameSelector } from "./pages/GameSelector/GameSelector";
import { pokeApi } from "./pages/pokeApi/pokeapi";
import { mole } from "./pages/whackAMole/mole";
import { NavBarlinks } from "./components/NavBar/NavBar";

const header = document.querySelector("header");
header.innerHTML = NavBar;

const main = document.querySelector("main");
main.innerHTML = login;

colorRandom();
colorOriginal();

export const init = (page) => {
  switch (page) {
    case "start":
      localStorage(), loggerOut(), NavBarlinks()
      break;

    case "GameHub":
      CleanerPage(main), GameSelector(main);
      break;

    case "PokeApi":
      CleanerPage(main), pokeApi(main);
      break;

    case "Mole":
      CleanerPage(main), mole(main);
      break;

    case "HangMan":
      CleanerPage(main), hangMan(main);
      break;
  }
};

init("start");
