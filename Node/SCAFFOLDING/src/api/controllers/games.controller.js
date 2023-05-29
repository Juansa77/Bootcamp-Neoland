const Game = require("../models/game.model");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const setError = require("../../helpers/handleError");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");
const { generateToken } = require("../../utils/token");
const User = require("../models/user.model");
dotenv.config();

//!---------------------------------------
//?-----------GAME  BY TITLE------------
//!---------------------------------------

const title = async (req, res, next) => {
  const { title } = req.params;

  try {
    const game = await Game.find({ title: title });
    if (game) {
      return res.status(200).json(game);
    }
  } catch (error) {
    return res.status(404).json("Game not found");
  }
};

//!---------------------------------------
//?-----------GAME  BY ID------------
//!---------------------------------------

const gameByID = async (req, res, next) => {
  const { id } = req.params;

  try {
    const gameID = await Game.findById(id);

    if (gameID) {
      return res.status(200).json(gameID);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//!-------------------------------------------
//?-----------ADD GAME  TO USER------------
//!-------------------------------------------

const addGameToUser = async (req, res, next) => {
  const { userId, gameId } = req.params;

  try {
    const user = await User.findById(userId);
    const game = await Game.findById(gameId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    //Hacemos un includes para no meter juegos repetidos
    if (user.games.includes(gameId)) {
      return res.status(400).json({ message: "Game already added to user" });
    } else {
      //hacemos push del juego en el array del usuario y del usuario en el array owners del juego
      user.games.push(gameId);
      game.owners.push(userId);
      await user.save();
      await game.save();
      return res.status(200).json({ message: "Game added to user" });
    }
  } catch (error) {
    console.log("Error adding game to user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//!----------------------------------------------
//?-----------DELETE GAME  IN USER------------
//!----------------------------------------------

const deleteGameInUser = async (req, res, next) => {
  const { userId, gameId } = req.params;
  const game = await Game.findById(gameId);

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    //Hacemos un includes para no meter juegos repetidos
    if (!user.games.includes(gameId)) {
      return res.status(400).json({ message: "Game not found in user" });
    } else {
      // Eliminamos el juego del array games del usuario y en el array del juego eliminamos el propietario
      user.games.splice(user.games.indexOf(gameId), 1);
      game.owners.splice(game.owners.indexOf(userId), 1);
      await user.save();
      await game.save();
      return res.status(200).json({ message: "Game erased in user" });
    }
  } catch (error) {
    console.log("Error erasing game in user", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//!---------------------------------------
//?-----------GAME  BY RATING------------
//!---------------------------------------

const gameByRating = async (req, res, next) => {
  const { rating } = req.params;

  try {
    //PARA ENCONTRAR ELEMENTOS IGUALES O SUPERIORES A LA PUNTUACIÓN ELEGIDA, PONEMOS EL OPERADOR DE MONGO $gte
    const games = await Game.find({ rating: { $gte: rating } });
    if (games) {
      return res.status(200).json(games);
    }
  } catch (error) {
    return res.status(404).json("Games with rating not found");
  }
};

//!---------------------------------------
//?-----------GAME  BY OWNERS------------
//!---------------------------------------
const gameByOwners = async (req, res, next) => {
  const { title } = req.params;

  try {
    const games = await Game.find({ title: title });
    if (games.length > 0) {
      const owners = games.map((game) => game.owners);
      return res.status(200).json(owners);
    } else {
      return res.status(404).json({ message: "Game not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  title,
  gameByID,
  addGameToUser,
  deleteGameInUser,
  gameByRating,
  gameByOwners,
};
