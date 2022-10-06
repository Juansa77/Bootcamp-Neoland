/***Iteración #1: Buscar el máximo**

Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
  // insert code
}*/

function maxNumber(numberOne, numberTwo) {
  console.log(Math.max(numberOne, numberTwo));
}

maxNumber(30, 69);

/***Iteración #2: Buscar la palabra más larga**

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code*/

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(param) {
  let suma = param;
  return suma.reduce((a, b) => (a.length > b.length ? a : b));
}

console.log(findLongestWord(avengers));

/***Iteración #3: Calcular la suma**

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
 
}*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let suma = param;
  return suma.reduce((a, b) => a + b);
}
console.log(sumAll(numbers));

/***Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code*/

const numbersAvg = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  var i = 0,
    summ = 0,
    ArrayLen = param.length;
  while (i < ArrayLen) {
    summ = summ + param[i++];
  }
  return summ / ArrayLen;
}
console.log(average(numbersAvg));

/***Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:*/

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
  const sumString = param.filter((item) => typeof item === "string");
  let stringMap = sumString.map((item) => item.length);
  let sumTotal = stringMap.reduce(
    (a, b) => a + b
  );

  const sumNumbers = param.filter((item) => typeof item === "number");
  let sumTotalNumbers = sumNumbers.reduce(
    (a, b) => a + b
  );

  console.log(
    "La suma de la longitud de los strings es " + sumTotal,
    " y la suma de los valores es " + sumTotalNumbers
  );
}

averageWord(mixedElements);

/***Iteración #6: Valores únicos**

Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:*/

/*MÉTODO CON OBJETO GLOBAL SET*/

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
  "limón",
];

function removeDuplicates(param) {
  const dataDuplicates = new Set(param);

  let noDuplicates = [...dataDuplicates];

  console.log(noDuplicates);
}

removeDuplicates(duplicates);

/*MÉTODO 2*/

function removeDuplicates2(param) {
  let noDuplicates = param.filter((item, index) => {
    return param.indexOf(item) === index;
  });
  console.log(noDuplicates);
}

removeDuplicates2(duplicates);

/***Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:*/

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(listaArray, nombre) {


  const nameDetection= listaArray.some( item =>item === nombre)
  const findIndex = listaArray.indexOf(nombre)


  if (findIndex === -1){

console.log("Es totalmente "+ nameDetection + " que " + nombre +" está en el Array y, por lo tanto, no tiene Index")

  }

  else {
    console.log("De verdad que es "+ nameDetection + " que " + nombre +" está en el Array y, de hecho, su Index es " + findIndex)
  }
}
 
  

finderName(nameFinder, "Marc")

/***Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:*/

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

let result = [];
const countingWords = (elements) =>{
  elements.forEach((word) => {
      result[word] = result[word] + 1 || 1;
  })
  return result;
}
console.log(countingWords(counterWords));

