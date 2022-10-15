/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
*/

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

countries.forEach((item) => {
  var li = document.createElement("li");
  document.body.appendChild(li);
  li.innerHTML = item;
});

/*1.2 Elimina el elemento que tenga la clase .fn-remove-me.*/

const elements = document.querySelectorAll(".fn-remove-me");
elements.forEach((element) => {
  element.parentNode.removeChild(element);
});

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];*/

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const div = document.querySelector("div");

cars.forEach((item) => {
  var li = document.createElement("li");
  li.innerHTML = item;
  div.append(li);
});

/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countriesTwo = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];



countriesTwo.forEach(function callback(item, index) {


  let h4 = document.createElement("h4");
  h4.innerHTML = item.title;
  h4.id= "h4"+index


  let div = document.createElement("div");
  document.body.appendChild(div);
  div.append(h4);
  div.id= "div"+index
 
  let img = document.createElement("img");
  img.src = item.imgUrl;
  div.append(img);
  img.id="img"+index
  
  const button = document.createElement("button")
  button.id= "button"+index
  button.innerHTML ="Erase me"
  div.append(button)
  
  button.addEventListener("click", function erasertwo() {
    var div =   document.getElementById("div"+index)
    var button =   document.getElementById("button"+index)
    var img= document.getElementById("img"+index)
    var h4= document.getElementById("h4"+index)
    div.removeChild(img)
    div.removeChild(h4)
    div.removeChild(button)




})

})

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.*/




var buttonOne = document.createElement("button");

buttonOne.innerHTML = "borrar"
document.body.appendChild(buttonOne)
buttonOne.id = buttonOne
buttonOne.addEventListener("click", function eraser() {
  var div =   document.getElementById("div4")
  var buttonOne =   document.getElementById("buttonOne")
  var img= document.getElementById("img4")
  var h4= document.getElementById("h44")
  div.removeChild(img)
  div.removeChild(h4)
  div.removeChild(buttonOne)
})

/*
1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento de .  */