const mongoose = require("mongoose")
const dotenv= require("dotenv")
dotenv.config()

const Artist= require("../models/artist.model")
const MONGO = process.env.MONGO_URI;


const artistDataSet =[
    {
      name: "Metallica",
      origin: "USA",
      genre: "Trash Metal",
    },
    {
      name: "Chayanne",
      origin: "Puerto Rico",
      genre: "Baladas latinas",
      age: 54,
    },
    {
      name: "Camela",
      origin: "España",
      genre: "Fantasia",
    },
    {
      name: "Immortal",
      origin: "Noruega",
      genre: "Black Metal",
    },
  ];

const seedGrow =()=>{
   
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

module.exports= seedGrowArtist