/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.*/

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

countries.forEach((item) => {
  var li = document.createElement("li");
  document.body.appendChild(li);
  li.innerHTML = item;
});

/*Basandote en el html siguiente, elimina el elemento que tenga la clase .fn-remove-me.*/

const elements = document.querySelectorAll(".fn-remove-me");
elements.forEach((element) => {
  element.parentNode.removeChild(element);
});

/*Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".*/

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

let div = document.querySelector('div[data-function="printHere"]');

cars.forEach((item) => {
  var li = document.createElement("li");
  div.appendChild(li);
  li.innerHTML = item;
});

/*Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen. */

const countriesTwo = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

/*Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.*/

for (const key in countriesTwo) {
  let div = document.createElement("div");
  document.body.appendChild(div);
  div.id = "div" + key;

  var h4 = document.createElement("h4");
  h4.innerHTML = countriesTwo[key].title;
  h4.id = "h4" + key;

  var img = document.createElement("img");
  img.src = countriesTwo[key].imgUrl;
  img.id = "img" + key;
  div.append(h4, img);

  var buttonTwo = document.createElement("button");

  buttonTwo.textContent = "erase me";

  buttonTwo.addEventListener("click", function buttonEraserTwo() {
    let div = document.getElementById("div" + key);

    let h4 = document.getElementById("h4" + key);
    let img = document.getElementById("img" + key);
    div.removeChild(img);
    div.removeChild(h4);
  });

  div.append(h4, img, buttonTwo);
}

var button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "erase me";

button.addEventListener("click", function buttonEraser() {
  var divLast = document.getElementById("div4");
  let button = document.querySelector("button");
  let h4erase = document.getElementById("h44");
  var img4 = document.getElementById("img4");
  divLast.removeChild(img4);
  divLast.removeChild(h4erase);
});

/*Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.*/





