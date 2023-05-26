const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const { title, gameByID, addGameToUser } = require("../controllers/games.controller");
const { isAuth } = require("../../middlewares/auth.midddleware");

const GamesRoutes = express.Router();

//Ruta by title--------------------
GamesRoutes.get("/title/:title", title)
//Ruta by ID
GamesRoutes.get("/id/:id", gameByID)
//Ruta ADD GAME TO USER
GamesRoutes.post("/:userId/add-game/:gameId",[isAuth], addGameToUser);



module.exports =GamesRoutes