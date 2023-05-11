//CREAMOS LA FUNCIÓN DE CONEXIÓN A LA DB

const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const MONGO_URI= process.env.MONGO_URI

//CREAMOS EL CUERPO DE LA FUNCIÓN A EXPORTAR PARA CONECATR A LA DB CON  MONGOOSE

const connect = async() =>{
    try {
        //Guarfamos la base de datos
        console.log("Connecting to database...");

        const db = await mongoose.connect(MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        const {host, name} = db.connection;
        console.log(`connected to db ${name} in host ${host}`)
        
    }catch(error){
        console.log("Error connecting to db:", error)
    }
}

module.exports = connect