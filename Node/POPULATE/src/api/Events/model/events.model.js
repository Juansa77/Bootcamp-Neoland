const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const Schema = mongoose.Schema

const EventsSchema = new Schema(
    {

    name: {type: String, required:true},
    description: {type: String, required: true},
    place: {type: String, required: true},
    hour: {type: String, required:true},
    day: [{type: mongoose.Types.ObjectId, ref: "Calendar"}]

},
{
    timestamps:true
})

const Events = mongoose.model("Events", EventsSchema)
module.exports= Events