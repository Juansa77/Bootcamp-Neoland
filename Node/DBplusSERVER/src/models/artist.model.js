const mongoose = require("mongoose");

const Schema = mongoose.Schema

const ArtistSchema = new Schema(
    {
        title: { type: String, required: true },
    cover: { type: String, required: true },
    artist: { type: String, required: true },
    year: { type: Number, required: false },
    },
    {
        timestamps:true
    }
)

const Artist = mongoose.model("Artist", ArtistSchema)

module.exports= Artist