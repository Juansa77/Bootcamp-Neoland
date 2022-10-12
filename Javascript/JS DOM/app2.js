/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/

const buttonSearch = document.querySelector(".showme");
console.log(buttonSearch);

/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/

const hPillado = document.querySelector("#pillado")
console.log(hPillado);

/*1.3 Usa querySelector para mostrar por consola todos los p*/

const allP = document.querySelectorAll("p");
console.log(allP);

/*1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon*/

const allPoke = document.querySelectorAll(".pokemon")
console.log(allP);

/*1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".*/

const allFunction = document.querySelectorAll("testMe");
console.log(allFunction);

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/
let person=allFunction[3];


console.log(person)
