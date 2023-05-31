const express = require('express');
const { upload } = require('../../middlewares/files.middleware');
const {
  title,
  gameByID,
  addGameToUser,
  deleteGameInUser,
  gameByRating,
  gameByOwners,
  gamesByCities,
  byPlayingTime,
  byType,
  updateGame,
  deleteGameByID,
} = require('../controllers/games.controller');
const { isAuth, isAuthAdmin } = require('../../middlewares/auth.midddleware');

const GamesRoutes = express.Router();

//?------Ruta by title--------------------
GamesRoutes.get('/title/:title', title);

//?--------Ruta by ID---------------------
GamesRoutes.get('/id/:id', gameByID);

//?--------Ruta ADD GAME TO USER--------
GamesRoutes.post('/:userId/add-game/:gameId', [isAuth], addGameToUser);

//?-------Ruta DELETE GAME IN USER-----
GamesRoutes.post('/:userId/delete-game/:gameId', [isAuth], deleteGameInUser);

//?------Ruta GAME BY RATING-------------
GamesRoutes.get('/byrate/:rating', gameByRating);

//?------Ruta GAME BY OWNERS-------------
GamesRoutes.get('/owners/:title', gameByOwners);

//?-----Ruta GAME OWNED BY CITY-------------
GamesRoutes.get('/:title/gamebycity/:city', gamesByCities);

//?-----Ruta GAME BY RATING-------------
GamesRoutes.get('/playing-time/:playingTime', byPlayingTime);

//?-----Ruta GAME BY TYPE-------------
GamesRoutes.get('/bytype', byType);

//?-----Ruta UPDATE GAME--------
GamesRoutes.patch(
  '/update/:id/:title',
  [isAuthAdmin],
  upload.single('image'),
  updateGame
);

//?-----Ruta DELETE GAME--------
GamesRoutes.delete('/delete-game/:id', [isAuthAdmin], deleteGameByID);

module.exports = GamesRoutes;
