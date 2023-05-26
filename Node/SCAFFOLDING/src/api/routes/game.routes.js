const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const { title, gameByID } = require("../controllers/games.controller");
const { isAuth } = require("../../middlewares/auth.midddleware");

const GamesRoutes = express.Router();


GamesRoutes.get("/title/:title", title)
GamesRoutes.get("/id/:id", gameByID)


module.exports =GamesRoutes