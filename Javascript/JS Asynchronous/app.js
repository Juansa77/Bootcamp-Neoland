/*

/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js.*/

var objetFetch;

fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then((data) => (objetFetch = data))
  .then(() => console.log(objetFetch));

/*2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/


/*2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.

2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */


const baseUrl = "https://api.nationalize.io";

var button = document.querySelector("button");

button.addEventListener("click", nacionalize);

async function nacionalize() {
  {
    let url = new URL(baseUrl);
    const params = { name: document.querySelector("input").value };
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
    const dataRequest = {
      method: "GET",
    };

    const response = await fetch(url, dataRequest);
   const result = await response.json();
    
   console.log(result)
    
    result.country.forEach((element) => {
      const countryName = element.country_id;
      const probal = element.probability;
      let h4 = document.createElement("h4");
      document.body.appendChild(h4);
      h4.innerHTML =
        "El nombre " +
        document.querySelector("input").value +
        " tiene una probabilidad de " +
        probal +
        " de ser de " +
        countryName;



        const button = document.createElement("button")
        button.innerHTML ="Erase me"
        h4.append(button)
      
        button.addEventListener("click", function erasertwo() {
        document.body.removeChild(h4)
          h4.removeChild(button)
        
        
        }
        )

        
    });
  }

  }

  
  /*2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
async-await.*/

async function runTimeOut () {
  const promise = new Promise((resolve) => {
      setTimeout(function () {
          resolve();
      }, 2000);
  })

   let result = await promise;  console.log('Time out!')
};

runTimeOut();

/*2.2 Convierte la siguiente función con un fetch utilizando async-await. 
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;*/

async function getCharacters () {
 const response = await fetch('https://rickandmortyapi.com/api/character')
 const result = await response.json();
 console.log(result);
}

getCharacters();