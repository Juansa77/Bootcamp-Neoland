const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//--------------1. NOS TRAEMOS EL MODELO DE ALBUM-------------------------
//------------------------------------------------------------------------------



const Albums = require("../models/albums.model");
const MONGO_URI = process.env.MONGO_URI;


//--------------2. DATOS QUE QUEREMOS INYECTOR EN LA DB-------------------------
//------------------------------------------------------------------------------

const albumDataSet = [
    {
      title: "Ride the Lightning",
      cover: "https://m.media-amazon.com/images/I/716FcW7qgSL._SL1200_.jpg",
      artist: "Metallica",
      year: 1984,
    },
    {
      title: "Atado a tu amor",
      cover: "https://m.media-amazon.com/images/I/61BCOynkb-L._SY355_.jpg",
      artist: "Chayanne",
      year: 1998,
    },
    {
      title: "Que la musica de acompañe",
      cover:
        "https://static.fnac-static.com/multimedia/Images/ES/NR/01/f5/77/7861505/1540-1.jpg",
      artist: "Camela",
      year: 2022,
    },
    {
      title: "Pure Holocaust",
      cover:
        "https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw015b3c24/images/4/0/7/0/407028.jpg?sw=1000&sh=800&sm=fit&sfrm=png",
      artist: "Immortal",
      year: 1993,
    },
  ];


//--------------3 CREAMOS UN NUEVO ARRAY DE OBJETOS CON LOS DIFERENTES MODELOS, YA QUE HEMOS EXPORTADO EL MODELO DE ALBUMS -------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------



  const albumsDocuments = albumDataSet.map((album) => new Albums(album));


  //--------------4. NOS CONECTAMOS A MONGO DB CON MONGOOSE-------------------------
//------------------------------------------------------------------------------


const seedGrow = () => {



  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
        //LE DECIMOS QUE BUSQUE LOS ÁLBUNES CON MOONGOSSE
      const AllAlbums = await Albums.find();

      if (AllAlbums.length) {
        //SI HAY ALBUNES EN LA DB, LO BORRA
        await Albums.collection.drop(console.log("¡¡DB BORRADA!"));
      }
    })
    .catch((error) => console.log("ERROR BORRANDO LA DB"))
    .then(async () => {
      //vamos a insertar EN LA DB los modelos QUE HAYA EN ALBUMDOCUMENTS

      await Albums.insertMany(albumsDocuments);
      console.log("colección creada");
    })
    .catch((error) => {
      console.log("NO SE HA PODIDO INYECTAR LA COLECCIÓN DE DATOS");
    })
    .finally(() => mongoose.disconnect());
};

module.exports = seedGrow;
