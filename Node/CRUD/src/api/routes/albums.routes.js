const express = require("express");

//-------------Importamos el modelo del que queremos hacer la ruta
const Albums = require(`../models/albums.models`);

//------------Creamos el router

const router = express.Router();

//------------Primer endpoint: GETALL

router.get("/", async (req, res, next) => {
  try {
    //----Hacemos un find para que nos traiga todo
    const album = await Albums.find();
    if (album) {
      //Devolvemos una respuesta exitosa si hay albums y que devuelva los albunes del find en un json
      return res.status(200).json(album);
    } else {
      //Si no hay album, que devuelva un res.status error
      return res.status(404).json("albums not found");
    }
  } catch (error) {
    return next(error);
  }
});

//-------------ENDPOINT POR ID

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const albumById = await Albums.findById(id);
    if (albumById) {
      return res.status(200).json(albumById);
    } else {
      return res.status(404).json("Album not found");
    }
  } catch (error) {
    return next(error);
  }
});

//-------------ENDPONT  POR NOMBRE

router.get("/title/:title", async (req, res, next) => {
  try {
    console.log("request de título aceptada")
    const { title } = req.params;
    //LO HACEMOS CON EL MÉTOFDO FIND ONE PARA QUE NOS DEVUELVA UN OBJETO, SINO TRAERÍA UN ARRAY
    const albumByName = await Albums.findOne({ title: title });
    if (albumByName) {
      return res.status(200).json(title);
    } else {
      return res.status(404).json("title not found");
    }
  } catch (error) {
    next(error);
  }
});

//-------------MÉTODO POST----------------

router.post("/create", async (req, res, next) => {
  try {
    const { year } = req.query;

    //Buscamos si existe lo que queremos crear
    const findByArtist = await Albums.find({
      artist: req.body.artist,
      year: year,
    });
    //Si existe, devuelve que nanay
    if (findByArtist.length > 0) {
      return next("Album already exits");
    } else {
      //Si no existe, creamos un nuevo album con los datos del body
      const newAlbum = new Albums(req.body);
      //Lo salvamos con el método save
      const albumsCreate = await newAlbum.save();
      if (albumsCreate) {
        return res.status(200).json(albumsCreate);
      } else {
        return res.status(404).json("Error on create new album");
      }
    }
  } catch (error) {
    next(error);
  }
});

//---------------DELETE by ID

router.delete("/:id", async(req, res, next)=>{
  try {
    const {id} =req.params
    //Sacamos la id y los requermientos del body y utilzamos el método  findbyidandDelete
    const deleteAlbum= await Albums.findByIdAndDelete(id)
    if(deleteAlbum){
      return res.status(200).json("Album deleted by ID")
    }
    else{
      return res.status(404).json("Error deleting album by ID")
    }
  } catch (error) {
    
    next(error)
  }
})


//-------------PATCH 

router.patch("/:id", async(req, res, next)=>{
  try {
    
    const {id}= req.params
    const findByArtist = await Albums.findByIdAndUpdate(id, req.body)

    if(findByArtist){
      return res.status(200).json(await Albums.findById(id))
    }
  } catch (error) {

    next(error)
    
  }
})

module.exports = router
