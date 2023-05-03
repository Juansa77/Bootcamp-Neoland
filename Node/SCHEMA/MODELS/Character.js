const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creamos el esquema, en este caso de personajes . La clase Schema tiene dos argumentos; el formato del argumento y el segundo las opciones, como timestamps

const characterSchema = new Schema(
    {
        name: {type: String, required: true},
        age: {type: Number},
        alias: {type: String, required: true}
    },
    //Propiedad para guardar la fecha de creación y actualización de los datos 
    {
        timestamps: true,

    }
)

//Creación y exportación del modelo

const Character = mongoose.model("Character", characterSchema)
module.exports =Character