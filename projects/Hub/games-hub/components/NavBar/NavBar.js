import "./NavBar.css";


export const NavBar = `
<nav class="navGeneral"><h1 id="gameHubLink">GamesHub</h1>

<buttom class="colorChanger" id="originalColor">ORIGINAL</buttom> 
<buttom class="colorChanger" id="randomColor">RANDOM COLOR</buttom> 
<h4 id= "userID">Usuario</h4>
<buttom class="loggerOut" id="logOut">logout</buttom> 
</nav>

`;

export const colorRandom = () => {
  const colorRandom = document.querySelector("#randomColor");
  colorRandom.addEventListener("click", () => {
    var random1 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    var random2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    var random3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    console.log(random1);

    const main = document.querySelector("main");
    main.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
    document.body.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
  });
};

export const colorOriginal = () => {
  const originalColor = document.querySelector("#originalColor");
  originalColor.addEventListener("click", () => {
    const main = document.querySelector("main");
    main.style.backgroundColor = "#c3cfa1";

    document.body.style.backgroundColor = "#c3cfa1";
  });
};


