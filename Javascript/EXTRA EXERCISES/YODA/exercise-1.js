/*En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.

Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'.*/

const baseURL = "https://breakingbadapi.com/api/characters";
const url = new URL(baseURL);

async function getInfo() {
  const raw = await fetch(url);
  const formatted = await raw.json();
  console.log(formatted);

  formatted.forEach((element) => {
    var h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = element.name;
    var img = document.createElement("img");
    document.body.appendChild(img);
    img.src = element.img;
  });
}

getInfo();
