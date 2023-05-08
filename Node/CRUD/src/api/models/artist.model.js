const mongoose = require("mongoose")

//---Traemos la funcionalidad de  schema de mongoose

const Schema = mongoose.Schema

//Creamos el esquema de datos
const ArtisSchema = new Schema( {
    name: { type: String, required: true },
    origin: { type: String, required: true },
    genre: { type: String, required: true },
    age: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
)

//Creamos el modelo
const Artist = mongoose.model("Artist", ArtisSchema)

module.exports = Artist