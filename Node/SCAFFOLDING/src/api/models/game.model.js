const { Schema } = require("mongoose");

const mongoose = require("mongoose");

const GameSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, requitred: true },
    users: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    location: { type: String, required: true },
    hour: { type: String, required: true },
    day: [{ type: mongoose.Types.ObjectId, ref: "Calendar" }],
    scores: [{ type: mongoose.Types.ObjectId, ref: "Score" }],
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model("Event", EventSchema);

module.exports = Game;
