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

const checkNotes = (array) => {
  for (var userIndex in array) {
    array[userIndex].isApprobed = [];
    if (array[userIndex].T1 + array[userIndex].T2 + array[userIndex].T3 >= 2) {
       const result = (array[userIndex].isApprobed = true);
      
    }

    if (array[userIndex].T1 + array[userIndex].T2 + array[userIndex].T3 < 2) {
      const result = (array[userIndex].isApprobed = false);
    
    }
  }
};

checkNotes(alumns);

for (const index in alumns) {
  console.log(alumns[index]);
}
