const mongoose = require("mongoose")
const dotenv= require("dotenv")
dotenv.config()

const Artist= require("../models/artist.model")
const MONGO = process.env.MONGO_URI;


const artistDataSet = [    {
    title:"Ride the lighting",
    cover:"https://www.merchandisingplaza.es/230518/2/Discos-de-vinilo-Metallica-Vinilo-Metallica---Ride-The-Lightning-l.jpg",
    artist:"Metallica",
    year:1984,
},]

const seedGrowArtists =()=>{
   
    //Recorremos al array y creamos uno nuevo con los difeentes modelos
    const artistsDocuments= artistDataSet.map((element)=> new Artist(element))
    
    //conectamos a mongoose 
    mongoose.connect(MONGO,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    
    }).then(async ()=>{
    const AllArtists = await Artist.find()
    
    if(AllArtists.length){
        await Artist.collection.drop(
            console.log("¡¡DB BORRADA!")
        )
    }
    }).catch((error)=> console.log("ERROR BORRANDO LA DB")).then(async()=>{
        //vamos a insertar los modelos en el objeto albums
    
        await Artist.insertMany(artistsDocuments)
        console.log("colección creada")
    }).catch((error)=>{console.log("NO SE HA PODIDO INYECTAR LA COLECCIÓN DE DATOS") }).finally(()=> mongoose.disconnect())
}

module.exports= seedGrowArtists