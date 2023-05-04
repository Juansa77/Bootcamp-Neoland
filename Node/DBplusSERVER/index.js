//NOS TRAEMOS LA CONEXIÓN A LA DB
const connect = require(`./src/db.js`);

const express = require("express");
const dotenv = require("dotenv");
//---NOS TRAEMOS LOS MÓDELOS DE ARTIST Y ALBUMS

const Albums = require(`./src/models/albums.model.js`);
const Artist = require(`./src/models/artist.model.js`);

dotenv.config();
//----------CREAMOS EL SERVIDOR CON EXPRESS
const app = express();

//port

const PORT = process.env.PORT;

//NOS CONECTAMOS A LA DB CON LA FUNCIÓN CREADA Y EXPORTADO
connect();

//CREAMOS EL ENRUTADO
const router = express.Router();

/*CREAMOS LAS RUTAS*/

///------------RUTA ARTIST COMPLETOS

router.get("/artists", async (req, res) => {
  //le decimos que encuentre artist en la db y que los devuelva en formato json con status 200, y si no, 500
  const artists = await Artist.find();
  res
    .status(200)
    .json(artists)
    .catch((error) => res.status(500).json(error));
});

//// -----------------ENDPOINT POR ID

router.get("/artist/:id", async (req, res) => {
  //hacemos destructuring para sacar la id de los params
  const { id } = req.params;
  try {
    //metemos el resultado de lo solicitado con el método propio
    const artistByID = await Artist.findById(id);

    //si hay resultado, le decimos que nos dé un 200 y nos devuelva la id en un json
    if (artistByID) {
      return res.status(200).json(artistByID);
    }
  } catch (error) {
    //si no hay, que nos devuelva error

    return res.status(500).json(error);
  }
});

///-----ENDPOINT POR NOMBRE  DE ARTISTA

router.get("/artist/name/:name", async (req, res) => {
  const { name } = req.params;
  const { origin } = req.query;
  try {
    //PRIMERO METER LOS FILTROS POR PARAMS Y DESPUÉS METER LOS FILTROS POR QUERY . RECUERDA, LAS PARAMS SON OBLIGATORIAS, LAS QUERY NO

    const artist = await Artist.find({ name: name, origin: origin });
    if (artist) {
      return res.status(200).json(artist);
    }
  } catch (error) {
    return res.status(404).json("Artist not found");
  }
});

///-----ENDPOINT POR ALBUMS (TODO)---------

router.get("/albums", async (req, res) => {
  const albums = await Albums.find();
  res
    .status(200)
    .json(albums)
    .catch((error) => res.status(500).json(error));
});

///-----ENDPOINT POR ALBUM INDIVIDUAL(TITLE)---------

router.get("/albums/title/:title", async (req, res) => {
  const { title } = req.params;

  try {
    const albumTitle = await Albums.find(title);

    if (albumTitle) {
      return res.status(200).json(albumTitle);
    } else {
      return res.status(404).json(albumTitle);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

///-----ENDPOINT POR ALBUM ID---------

router.get("/albums/:id", async (req, res) => {
  const { id } = req.params;
  const albumID = await Albums.findById(id);

  try {
    if (albumID) {
      return res.status(200).json(albumID);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

//-------------------PATH PRINCIPAL

app.use("/api/v1", router);

//----------------------RUTA MÁXIMA O RUTA ERRÓNEA

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

//------------ESCUCHAR EL SERVIDOR POR EL PUERTO QUE LE HEMOS INDICADO

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
