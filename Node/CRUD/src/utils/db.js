const mongoose = require("mongoose");
const dotenv = require("dotenv");
//------------------CONFIGURAMOS DOTENV PARA PODER USAR LOS .ENV
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

//------------------FUNCIÓN PARA CONECTARSE A LA DB CON MONGOOSE

const connect = async () => {
  try {
    //ESPERAMOS QUE SE CONECTE A LA DB CON EL MÉTODO CONNECT DE MONGOOSE Y LE PASAMOS LA MONGO_URI
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //----------------hacemos destructuring para sacar el nombre y el host y mostrarlo por consola, solo eso, además de manejar el error 
    const { name, host } = db.connection;
    console.log(`Connected to ${name} in host ${host}`);
  } catch (error) {
    console.log(`Connection error`, error);
  }
};

module.exports = connect;
