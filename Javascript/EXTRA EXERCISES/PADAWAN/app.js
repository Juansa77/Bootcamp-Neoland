/*Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
```js*/

const users = [
  { name: "Alberto", years: 43 },
  { name: "Maria", years: 18 },
  { name: "Pedro", years: 14 },
  { name: "Samantha", years: 32 },
  { name: "Raquel", years: 16 },
];

const adult = [];
const minor = [];

for (const key in users) {
  if (users[key].years >= 18) {
    adult.push(users[key].name);
  } else {
    minor.push(users[key].name);
  }
}

console.log(
  "Usuarios mayores de edad " + adult + " Usuarios menores de edad " + minor
);

/*Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
```js*/
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

var trueVegan = [];

for (let index = 0; index < foodSchedule.length; index++) {
  if (foodSchedule[index].isVegan == true) {
    trueVegan.push(foodSchedule[index]);
  } else {
    trueVegan.push({ name: fruits[index], isVegan: true });
  }
}

console.log(trueVegan);

/*Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.*/

const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

var shortMovie = [];
var mediumMovie = [];
var longMovie = [];

for (let index = 0; index < movies.length; index++) {
  if (movies[index].durationInMinutes < 100) {
    shortMovie.push(movies[index].name);
  }

  if (movies[index].durationInMinutes > 200) {
    longMovie.push(movies[index].name);
  } else {
    {
      mediumMovie.push(movies[index].name);
    }
  }
}

console.log(
  "Pelis cortas " + shortMovie,
  " Pelis medianas " + mediumMovie,
  " pelis largas " + longMovie
);

/*Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos.
```js*/
const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

var sum = 0;

for (let index = 0; index < products.length; index++) {
  sum += products[index].sellCount;
}

console.log(sum);

/*Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas.*/

var sum2 = 0;
var media = 0;

for (let index = 0; index < products.length; index++) {
  sum2 += products[index].sellCount;

  media = sum2 / products.length;
}

console.log(media);

/*Usa un bucle para recorrer el array de peliculas (`products`) y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) y al array `badProducts` los que tengan menos.*/

const goodProducts = [];
const badProducts = [];
const products2 = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

for (let index = 0; index < products2.length; index++) {

  products2[index].sellCount > 20? goodProducts.push(products2[index]):  badProducts.push(products2[index])

}

console.log(goodProducts, badProducts);


