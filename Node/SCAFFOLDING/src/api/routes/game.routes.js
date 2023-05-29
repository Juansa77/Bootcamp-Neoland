const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const { title, gameByID, addGameToUser, deleteGameInUser, gameByRating, gameByOwners, gamesByCities } = require("../controllers/games.controller");
const { isAuth } = require("../../middlewares/auth.midddleware");

const GamesRoutes = express.Router();

//?Ruta by title--------------------
GamesRoutes.get("/title/:title", title)

//?Ruta by ID---------------------
GamesRoutes.get("/id/:id", gameByID)

//?Ruta ADD GAME TO USER--------
GamesRoutes.post("/:userId/add-game/:gameId",[isAuth], addGameToUser);

//?Ruta DELETE GAME IN USER-----
GamesRoutes.post("/:userId/delete-game/:gameId",[isAuth], deleteGameInUser);

//?Ruta GAME BY USER-------------
GamesRoutes.get("/byrate/:rating",gameByRating);


//?Ruta GAME BY OWNERS-------------
GamesRoutes.get("/owners/:title",gameByOwners);


//?Ruta GAME OWNED BY CITY-------------
GamesRoutes.get("/:title/gamebycity/:city",gamesByCities);

module.exports =GamesRoutes