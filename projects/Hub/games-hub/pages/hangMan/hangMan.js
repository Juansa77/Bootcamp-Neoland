import "./hangMan.css";

export const hangMan = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
    
    
    <div class="hangManContainer">
    <div class="hangManPic">
    <div class="hang1"></div>
    <div class="hang2"></div>
    <div class="hang3"></div>
    <div class="hang4"></div>
    <div class="hang5"></div>
    <div class="hang6"></div>
    <div class="hang7"></div>
    <div class="hang8"></div>
    <div class="hang9"></div>
    <div class="hang10"></div>
    
    
    
    </div>
    <div class="hangManGame">
    
    <div class ="HangManHeaderDiv">
    <buttom id ="startHangman">PLAY</buttom>
    <h3  class="hideInOut" id ="wordDescription">Pista</h3>
    <h1  class="hideInOut" id = "secretWordText">Secret word</h1>
    </div>
    <div class ="HangManUserInputDiv">
    <h4 class="hideInOut" id ="usedWords"></h4>
    <input class="hideInOut" id="textLetter"></input>
    <buttom class="hideInOut" id ="letterPush">Envía</buttom>

    </div>
    <div class ="HangManTimerDiv"></div>

    
    </div>
    </div>
    
    
    `;

  var buttomPlay = document.querySelector("#startHangman");

  document.querySelector("#secretWordText").style.visibility = "hidden";
  document.querySelector("#usedWords").style.visibility = "hidden";
  document.querySelector("#textLetter").style.visibility = "hidden";
  document.querySelector("#letterPush").style.visibility = "hidden";
  document.querySelector("#wordDescription").style.visibility = "hidden";

  buttomPlay.addEventListener("click", () => wordRandomizer(allWords));

  var buttomPlay = document.querySelector("#letterPush");
  buttomPlay.addEventListener("click", () => {
    playing(wordRandom);
  });
};

export const allWords = [
  {
    category: "Nombre de vehículo",
    words: ["coche", "camión", "autobus", "avión", "tren"],
  },
  {
    category: "Cosas de cocina",
    words: ["tenedor", "cuchara", "plato", "vaso", "servilleta"],
  },

  {
    category: "Personaje de los Vengadores",
    words: ["Spiderman", "Lobezno", "Hulk", "Thor", "Iron Man"],
  },

  {
    category: "Personaje de DC cómics",
    words: ["Batman", "Supermán", "Flash"],
  },

  {
    category: "Cosas de oficina",
    words: ["Ordenador", "Grapadora", "folio", "impresora"],
  },
];

export var wordRandom = "";
export var secretWord = "";
export var limit = 0;
export var pastWords = "";
export const wordRandomizer = (array) => {
  document.querySelector("#secretWordText").style.visibility = "visible";
  document.querySelector("#usedWords").style.visibility = "visible";
  document.querySelector("#textLetter").style.visibility = "visible";
  document.querySelector("#letterPush").style.visibility = "visible";
  document.querySelector("#wordDescription").style.visibility = "visible";


  limit = 0;
  pastWords = document.querySelector("#usedWords");
  pastWords.textContent = "";
  var wordCategory = document.querySelector("#wordDescription");

  var randomWordCategory = Math.floor(
    Math.random() * (array.length - 0 + 0) + 0
  );
  var categoryHint = array[randomWordCategory].category;
  wordCategory.textContent = categoryHint;

  var randomWord =
    array[randomWordCategory].words[
      Math.floor(
        Math.random() * (array[randomWordCategory].words.length - 0 + 0) + 0
      )
    ];
  wordRandom = "";
  wordRandom = randomWord.toUpperCase();

  for (let index = 1; index < 11; index++) {
    var hangmanDivs = document.querySelector(`.hang${index}`);
    hangmanDivs.style.background = "transparent";
  }

  wordTransform(randomWord);
  console.log(wordRandom);
};

export const wordTransform = (palabra) => {
  var theWord = document.querySelector("#secretWordText");

  const regEx = /[a-z A-Z\u00C0-\u017F]/g;
  secretWord = "";
  const regEx2 = /[a-zA-Z\u00C0-\u017F]/g;

  secretWord = palabra.replace(regEx, "_").split("");
  theWord.innerHTML = palabra.replace(regEx2, "_");
};

export const playing = (palabra) => {
  const regEx2 = /[a-zA-Z\u00C0-\u017F]/g;
  pastWords = document.querySelector("#usedWords");
  var inputLetter = document.querySelector("#textLetter");
  var letter = inputLetter.value.toUpperCase();
  pastWords.innerHTML += letter;

  var inputSecretWord = document.querySelector("#secretWordText");

  const indexs = [];

  if (palabra.includes(letter) === true)
    for (let index = 0; index < palabra.length; index++) {
      if (palabra[index] === letter) {
        indexs.push(index);
      }
    }
  else {
    limit++;

    var hangmanDivs = document.querySelector(`.hang${limit}`);
    hangmanDivs.style.background = "white";

    if (limit === 10) {
      alert(`game over, la palabra era ${wordRandom}`);
      document.querySelector(".hangManGame").style.backgroundColor = "";
      document.querySelector("#secretWordText").style.visibility = "hidden";
      document.querySelector("#usedWords").style.visibility = "hidden";
      document.querySelector("#textLetter").style.visibility = "hidden";
      document.querySelector("#letterPush").style.visibility = "hidden";
      document.querySelector("#wordDescription").style.visibility = "hidden";
    }
  }

  indexs.forEach((indice) => {
    secretWord[indice] = letter;
    console.log(inputSecretWord.innerHTML);
    console.log(secretWord);
  });
  var inputSecret = secretWord.reduce((a, b) => a + b);
  inputSecretWord.innerHTML = inputSecret;
  if (inputSecretWord.innerHTML === wordRandom) {
    alert(`has ganado, la palabra era ${wordRandom}`);
    limit = 0;
    document.querySelector(".hangManGame").style.backgroundColor = "";
    document.querySelector("#secretWordText").style.visibility = "hidden";
    document.querySelector("#usedWords").style.visibility = "hidden";
    document.querySelector("#textLetter").style.visibility = "hidden";
    document.querySelector("#letterPush").style.visibility = "hidden";
    document.querySelector("#wordDescription").style.visibility = "hidden";
  }

  inputLetter.value = "";
  console.log(secretWord);
  console.log(limit);
};
