/*Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
Para filtrar las categorías puedes ayudarte de la función `.includes()`.*/

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

var categoriesList = [];

for (const element of movies) {
  for (const key in element) {
    element["categories"].forEach((categories) => {
      if (!categoriesList.includes(categories)) {
        categoriesList.push(categories);
      }
    });
  }
}

console.log(categoriesList);

/*Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.*/

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

var volume = 0;
var media = 0;

for (const element of users) {
  for (const key in element.favoritesSounds) {
    volume += element.favoritesSounds[key].volume;
    media = volume / key.length;
  }
}

console.log(media);

/*Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. 

Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.*/

const favoritesSoundsAr = [];

for (const iterator of users) {
  for (const key in iterator.favoritesSounds) {
    favoritesSoundsAr.push(key);
  }
}

const total = [];
for (const iterator of favoritesSoundsAr) {
  favoritesSoundsAr[iterator] = favoritesSoundsAr[iterator] + 1 || 1;
}

console.log(favoritesSoundsAr);

/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:*/

const arrayP = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

function findArrayIndex(array, text) {
  for (let index = 0; index < array.length; index++) {
    if (array.includes(text)) {
      var indexResult = array.indexOf(text);
    }
  }
  return indexResult;
}

console.log(findArrayIndex(arrayP, "Caracol"));

/*Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.*/

const removeItem = (array, texto) => {
  var removeIndex = findArrayIndex(array, texto);

  array.splice(removeIndex, 1);
  console.log(array);
};

removeItem(arrayP, "Ajolote");

/*Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular  una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca  información sobre la función de javascript ``Math.random()``*/

const rollDice = (number) => {
  console.log(Math.floor(Math.random() * number));
};

rollDice(10);

/*Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

Sugerencia de array:
````js*/

const furgolistas = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swap = (array, valorA, valorB) => {
  [array[valorA], array[valorB]] = [array[valorB], array[valorA]];

  console.log(array);
};

swap(furgolistas, 1, 3);
