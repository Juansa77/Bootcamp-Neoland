// Archivo character.seed.js

const mongoose = require('mongoose');

// Imporatmos el modelo Pet en este nuevo archivo.
const Character = require('../MODELS/Character');

const characters = [
  {
    name: 'Ursula Corberó',
    age: 32,
    alias: 'Tokio',
  },
  {
    name: 'Pedro Alonso',
    age: 50,
    alias: 'Berlín',
  },
  {
    name: 'Álvaro Morte',
    age: 46,
    alias: 'Profesor',
  },
  {
    name: 'Alba Flores',
    age: 34,
    alias: 'Nairobi',
  },
  {
    name: 'Jaime Lorente',
    age: 29,
    alias: 'Denver',
  },
  {
    name: 'Darko Peric',
    age: 44,
    alias: 'Helsinki',
  },
];

const characterDocuments = characters.map(character => new Character(character));

const dotenv = require("dotenv");


dotenv.config();

//recuperamos la UR



const mongoDb = process.env.MONGO_DB;

//Le decimos que use las nuevas versiones de URLPARSER y Topology
const createSeed = ()=>{
  mongoose
  .connect(mongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    //Le decimos que nos dé un array con todos los characters de la DB que están en el MODELS

    const allCharacters = await Character.find();

    //Utilizamos la función drop para eliminar lo que hay previo, si gay

    if (allCharacters.length > 0) {
      await Character.collection.drop();
    }
  })
  .catch((error) => console.log(`Error borrando los datos", ${error}`))
  .then(async () => {
    //Una vez que esté vacioada la DB, usamos el array de characterDocuments  QUE ESTÁ EN EL SEEDpara llenar la DB
    await Character.insertMany(characterDocuments);
  })
  .catch((error) => console.log(`Error creando la data ${error}`))
  .finally(() => mongoose.disconnect());
}


module.exports =createSeed