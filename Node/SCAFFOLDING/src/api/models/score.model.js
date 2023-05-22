const { Schema } = require("mongoose");

const mongoose = require("mongoose");

const ScoresSchema = new Schema(
  {
    event: { type: mongoose.Types.ObjectId, ref: "Event", required: true },
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    points: { type: Number, required: true, min: 0, max: 30 },
  },
  {
    timestamps: true,
  }
);

const Score = mongoose.model("Score", ScoresSchema);

module.exports = Score;
