/***Iteración #1: Usa includes**

Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.*/

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

const shirtFinder = (param) => {
  var shirts = param.filter((item) => item.includes("Camiseta"));

  {
    return console.log(shirts);
  }
};

shirtFinder(products);

/***Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.*/

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

//FUNCIÓN PARA INSERCIÓN DE NUEVO PARAMETRO EN CADA OBJETO Y COMPROBACIÓN DE LA CONDICIÓN

const checkNotes = (array) => {
  for (var userIndex in array) {
    array[userIndex].isApprobed = []; //ASÍ SE INSERTA PARÁMETRO EN OBJETO DE ARRAY
    if (array[userIndex].T1 + array[userIndex].T2 + array[userIndex].T3 >= 2) {
      //COMPROBANDO LA CONDICIÓN
      const result = (array[userIndex].isApprobed = true); //RESULTADO
    }

    if (array[userIndex].T1 + array[userIndex].T2 + array[userIndex].T3 < 2) {
      const result = (array[userIndex].isApprobed = false);
    }
  }
};

checkNotes(alumns);

//BUCLE PARA SACAR POR CONSOLA LOS RESULTADOS
for (const index in alumns) {
  console.log(alumns[index]);
}

/***Iteración #3: Probando For...of**

Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

Puedes usar este array:*/

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (const index of placesToTravel) {
  console.log(index);
}

/***Iteración #4: Probando For...in**

Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:*/

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (const index in alien) {
  console.log(alien[index]);
}

/***Iteración #5: Probando For**

Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.*/

const placesToTravel2 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let index = 0; index < placesToTravel2.length; index++) {
  const eraser = placesToTravel2.filter(
    (item) => item.id !== 11 && (item.id !== 40) != false
  );
  console.log(eraser[index - 2]);
}

/***Iteración #6: Mixed For...of e includes**

Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:*/

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

for (const element of toys) {
  if (element.name.includes("gato") != true) {
    console.log(element);
  }
}

/***Iteración #7: For...of avanzado**

Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:*/

let popularToys = [];



const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for (const index of toys2) {

  if (index.sellCount >= 15 ){

    let objeto = {

    id: index.id,
    name: index.name,
    sellCount: index.sellCount
    }
      
   popularToys.push(objeto)   

    
   
    
     
  
  


  }
 
  


  

  
}

console.log(popularToys)
