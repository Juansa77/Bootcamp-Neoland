const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Character = require("../MODELS/Character");

dotenv.config();

//recuperamos la UR

const characterDocuments = characters.map(
  (character) => new Character(character)
);

const mongoDb = process.env.MONGO_DB;

//Le decimos que use las nuevas versiones de URLPARSER y Topology
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
    await Character.insertMany(CharacterDocuments);
  })
  .catch((error) => console.log(`Error creando la data ${error}`))
  .finally(() => mongoose.disconnect());
