import "./NavBar.css";
import { init } from "../../main";
import { CleanerPage } from "../../utils/CleanerPage";

export const NavBar = `
<nav class="navGeneral" ><buttom id="gameHubLink" >GamesHub</buttom>

<buttom class="colorChanger" id="originalColor">Original</buttom> 
<buttom class="colorChanger" id="randomColor">Random</buttom> 
<h4 id= "userID">Usuario</h4>
<buttom class="loggerOut" id="logOut">Logout</buttom> 
<buttom class="icon">MENÚ
 </buttom>
</nav>

`;

export const NavBarlinks = () => {
  var main = document.querySelector("main");

  var buttom = document.querySelector("#gameHubLink");
  buttom.addEventListener("click", () => {
  
      CleanerPage(main);
      init("GameHub")

    
  });
};

export const responsiveNavBar = () => {
  var x = document.querySelector(".navGeneral");
  if (x.className === ".navGeneral") {
    x.className += " responsive";
  } else {
    x.className = ".navGeneral";
  }
};
