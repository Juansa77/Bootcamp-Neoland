//ACCEDIENDO A POSICIONES Y OBJETOS

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

//ACCEDIENDO A 3 NIVELES (OBJETO DENTRO DE OBJETO DENTRO DE OBJETO)

for (const element of users) {
    for (const key in element.favoritesSounds) {
      volume += element.favoritesSounds[key].volume;
      media = volume / key.length;
    }
  }
  


//ACCEDIENDO A ARRAY DENTRO DE OBJETO

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