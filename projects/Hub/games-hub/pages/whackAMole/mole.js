import "./mole.css"

export const mole =() =>{

const main = document.querySelector("main")

main.innerHTML= `

<div class="moleContainer">

<div class="scoringDiv">
<h2 class="scoring" id="scoringText">SCORE:</h2>
<h2 class="scoring" id="scoringValor">0</h2>
</div>
<div class="buttomDiv"><buttom id="playMole">PLAY</buttom></div>
<div class="timingDiv">
<h2 class="timing" id="timerText">TIME:</h2>
<h2 class="timing" id="timerValor">0</h2>

</div>

<div class="moleDiv">
<div class="MoleSquare" id="1"></div>
<div class="MoleSquare" id="2"></div>
<div class="MoleSquare" id="3"></div>
<div class="MoleSquare" id="4"></div>
<div class="MoleSquare" id="5"></div>
<div class="MoleSquare" id="6"></div>
<div class="MoleSquare" id="7"></div>
<div class="MoleSquare" id="8"></div>
<div class="MoleSquare" id="9"></div>
<div class="MoleSquare" id="10"></div>
<div class="MoleSquare" id="11"></div>
<div class="MoleSquare" id="12"></div>

</div>

</div>




</div>


`

var buttomPLAY= document.querySelector("#playMole")
buttomPLAY.addEventListener("click", () =>{moleStarter()})

const squares = document.querySelectorAll(".MoleSquare");
const ryu = document.querySelector(".ryu");
const score = document.querySelector("#scoringValor");
const timeLeft = document.querySelector("#timerValor");

let tempId = null;
let timeLimit = 30;
let hit;
let resultado = 0;

const moleStarter =()=>{
 document.querySelector("#playMole").style.visibility="hidden"
 document.querySelector(".buttomDiv").style.visibility="hidden"



//Función para asignar la clase RYU a un square aleatorio

const insertClass = () => {
    //al iniciar el bucle eliminamos la clase "Ryu" con un forEach
    squares.forEach((square) => {
      square.classList.remove("ryu", "ryuHIT");
    });
  
    //agregamos la clase Ryu a un Square aleatorio
    {
      let insertClass = squares[Math.floor(Math.random() * squares.length)];
  
      insertClass.classList.add("ryu");
  
      //Para llevar el conteo de puntuación, igualamos HIT a la ID de la casilla cliqueada
      hit = insertClass.id;
    }
  };

  //Función para temporizar el movimiento de la clase Ruy sobre la clase Square
const movingRyu = () => {
    tempId = setInterval(insertClass, 650);
  };
  
  movingRyu();
  
//Aplicando el event a cada square. Si un click en un square coincide con el id de donde está la clase Ruy, se suma un punto a resultado
squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id == hit) {
        square.classList.add("ryuHIT")
        
        resultado++;
        score.textContent = resultado;
        
        hit = null;
      }
    });
  });
  
  
  //función para iniciar un decremento  de uno del timeLimit

 const cuentaAtras = () => {
    timeLimit--
    timeLeft.textContent = timeLimit;

      //intervalo para iniciar el decremento de cuentaAtras cada segundo
 

  
    //Condicional que para que cuando se llegue a cero, se paran los intervalos de cuenta atrás y movimiento
    if (timeLimit == 0) {
      clearInterval(cuentaAtrasTempId);
      clearInterval(tempId);
      alert("Game over, tu puntuación es " + resultado)
      document.querySelector("#playMole").style.visibility="visible"
      document.querySelector(".buttomDiv").style.visibility="visible"
  
      //reiniciamos variables y funciones para volver a jugar cuando se pulsa en el Alert
      timeLimit = 30
    
 
      resultado=0
      score.textContent=resultado
  
    }
  };
  
  let cuentaAtrasTempId = setInterval(cuentaAtras, 1000);}

}

