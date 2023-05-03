const mongoose = require("mongoose")
const dotenv= require("dotenv")
dotenv.config()

const Albums = require("../models/albums.model")
const MONGO_URI = process.env.MONGO_URI;



const seedGrow =()=>{
   

    const albumDataSet = [    {
        title:"Ride the lighting",
        cover:"https://www.merchandisingplaza.es/230518/2/Discos-de-vinilo-Metallica-Vinilo-Metallica---Ride-The-Lightning-l.jpg",
        artist:"Metallica",
        year:1984,
    },]
    
    //Recorremos al array y creamos uno nuevo con los difeentes modelos
    const albumsDocuments= albumDataSet.map((album)=> new Albums(album))
    
    //conectamos a mongoose 
    mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    
    }).then(async ()=>{
    const AllAlbums = await Albums.find()
    
    if(AllAlbums.length){
        await Albums.collection.drop(
            console.log("¡¡DB BORRADA!")
        )
    }
    }).catch((error)=> console.log("ERROR BORRANDO LA DB")).then(async()=>{
        //vamos a insertar los modelos en el objeto albums
    
        await Albums.insertMany(albumsDocuments)
        console.log("colección creada")
    }).catch((error)=>{console.log("NO SE HA PODIDO INYECTAR LA COLECCIÓN DE DATOS") }).finally(()=> mongoose.disconnect())
}

module.exports = seedGrow