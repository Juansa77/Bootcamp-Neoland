const squares = document.querySelectorAll(".b-square");
const ryu = document.querySelector(".ryu");
const score = document.querySelector(".score");
const timeLeft = document.querySelector(".timeLeft");

let tempId = null;
let timeLimit = 30;
let hit;
let resultado = 0;

//Función para asignar la clase RYU a un square aleatorio

const insertClass = () => {
  //al iniciar el bucle eliminamos la clase "Ryu" con un forEach
  squares.forEach((square) => {
    square.classList.remove("ryu");
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
  tempId = setInterval(insertClass, 500);
};

movingRyu();

//Aplicando el event a cada square. Si un click en un square coincide con el id de donde está la clase Ruy, se suma un punto a resultado
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hit) {
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

  //Condicional que para que cuando se llegue a cero, se paran los intervalos de cuenta atrás y movimiento
  if (timeLimit == 0) {
    clearInterval(cuentaAtrasTempId);
    clearInterval(tempId);
    alert("Game over, tu puntuación es " + resultado)

    //reiniciamos variables y funciones para volver a jugar cuando se pulsa en el Alert
    timeLimit = 30
    cuentaAtrasTempId = setInterval(cuentaAtras, 1000)
    movingRyu()
    resultado=0
    score.textContent=resultado

  }
};

//intervalo para iniciar el decremento de cuentaAtras cada segundo
let cuentaAtrasTempId = setInterval(cuentaAtras, 1000);
