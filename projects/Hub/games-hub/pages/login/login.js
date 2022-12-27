import "./login.css";
import { GameSelector } from "../GameSelector/GameSelector";
import { CleanerPage } from "../../utils/CleanerPage";

export const login = `
<figure class="figureLogin">
<h1 id="gameHubLink">GamesHub</h1>
<div class="loginDiv">

<h3>Introduce tu nombre</h3>
<input type="text" id="userName"> 

<button id="login" >Enter</button>
</div>
</figure>


`;






export const localStorage = () => {
  var button = document.querySelector("#login");
  button.addEventListener("click", () => {
    var userName = document.querySelector("#userName").value;
    window.localStorage.setItem("test", userName);
    const main = document.querySelector("main");
    CleanerPage(main);
    GameSelector(main);
    const userID = document.querySelector("#userID");
    userID.innerHTML = userName;
  });
};

export const loggerOut = () => {
  const button = document.querySelector("#logOut");
  const userID = document.querySelector("#userID");
  button.addEventListener("click", () => {
    if (userID != "Usuario") window.localStorage.removeItem("test");
    const main = document.querySelector("main");
    main.innerHTML = login;

    userID.innerHTML = "Usuario";
    localStorage()
  });
};
