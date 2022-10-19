









/*2.1 Inserta dinamicamente en un html un div vacio con javascript.



2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

   Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

*/





let div =document.createElement("div")
div.innerHTML=  "/*2.1 Inserta dinamicamente en un html un div vacio con javascript."
document.body.appendChild(div)


let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = "2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.";
div.appendChild(nuevoParrafo);



let nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.innerHTML = "Soy dinámico";
document.body.appendChild(nuevoParrafo2);



let pLoop = [];

let nuevoDiv= document.createElement("div")
document.body.appendChild(nuevoDiv)

for (let index = 0; index < 6; index++) {
  pLoop = document.createElement("p");
  pLoop.innerHTML = "Estoy haciendo párrafos con loops y este es el número " + (index+1);
  nuevoDiv.appendChild(pLoop);
}



let nuevoHeader = document.createElement("h2");
nuevoHeader.className = ".fn-insert-here";
nuevoHeader.innerHTML = "Wubba Lubba dub dub";
document.body.appendChild(nuevoHeader);

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

apps.forEach((item) => {
var li = document.createElement('li');
document.body.appendChild(li);
li.innerHTML = item;
})



const elements = document.querySelectorAll(".fn-remove-me");
elements.forEach(element => {
  element.parentNode.removeChild(element);
});

const elementNext = document.querySelector("div");
console.log(elementNext)

var p2 = document.createElement("p");
p2.innerHTML = "Voy en medio";
elementNext.insertAdjacentElement("afterbegin", p2);

const elementsIn = document.querySelectorAll(".fn-insert-here");

elementsIn.forEach(element => {
  var p =document.createElement("p");
  p.innerHTML ="Voy dentro";
  element.appendChild(p)
  
});






  



  




/*<ul><li>'Facebook'</li>'Netflix'<li>'Instagram'</li><li>Snapchat'</li><li>Twitter'</li></ul>*/
