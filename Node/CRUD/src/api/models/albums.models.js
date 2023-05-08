const mongoose = require("mongoose");
//---Para crear un modelo, primero necesitamos crear el esquema del modelo.

//------------Cargamos el Schema con Mongoose para poder crearlo
const Schema = mongoose.Schema;

//----Creamos el Esquema con la estructura de los datos que vamos a introducir en Mongo
const AlbumsSchema = new Schema(
  {
    title: { type: String, required: true },
    cover: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);
//-------------Creamos el modelo con el esquema que creamos antes
const Albums = mongoose.model("Albums", AlbumsSchema);

module.exports = Albums;
