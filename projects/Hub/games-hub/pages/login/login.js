import "./login.css";
import { GameSelector } from "../GameSelector/GameSelector";
import { CleanerPage } from "../../utils/CleanerPage";


export const login = `
<figure class="figureLogin">
<h1>GamesHub</h1>
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
    const main =document.querySelector("main")
    CleanerPage(main)
   GameSelector(main)
   const userID = document.querySelector("#userID")
   userID.innerHTML=userName



  });
};
