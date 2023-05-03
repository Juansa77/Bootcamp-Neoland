//requerimos la libreria
const dotenv = require("dotenv")
// ejecutamos para poder configurar el dotenv
dotenv.config()

const mongoose =require("mongoose")

//recuperamos la UR

const mongoDb = process.env.MONGO_DB

//Hacemos la conexión asíncrona

const connect = async ()=>{
 try{
/*EL MÉTODO DE MONGOOSE
1. la uri (donde nos conectamos)
2. PARAM : La configuración 

*/

const db = await mongoose.connect( mongoDb, {
    //le decimos que utilice la versión nueva del analizador de URL de Mongo. para garantizar la compatibilidad 
    useNewUrlParser: true,
    //Lo mismo, para utilizar la nueva capa de administración de conexiones de MONGODB, que está basada en eventos. La anterior en subprocesos
    useUnifiedTopology:true,
   
})

//Hacemos destructuring y el método connection nos va a dar el nombre y el host 
const {name, host} = db.connection
console.log(`Conectado a la DB 👀: ${name} en el host❤️: ${host}`);
 }
 catch(error){
console.log("No se ha podido conectar a la DB", error) 
 }

}

module.exports = {connect}