const express = require('express');
const { upload } = require('../../middlewares/files.middleware');
const { isAuthPlace } = require('../../middlewares/auth.midddleware');
const  {
    registerPlace,
    checkNewPlace,
    loginPlace,
    resendPlaceCode,
    forgotPlacePassword,
    sendPlacePassword,
   modifyPlacePassword,
   addGameToCatalog,
   deleteGameInCatalog
  } = require("../controllers/places.controller")

const PlacesRoutes = express.Router();

//?------Ruta REGISTER PLACE--------
PlacesRoutes.post('/register-place', upload.single('image'), registerPlace);

//?-----Ruta CHECK CONFIRMATION--------
PlacesRoutes.post('/check-place', checkNewPlace);

//?-------Ruta LOGIN PLACE--------
PlacesRoutes.post('/place-login', loginPlace);

//?-------Ruta RESEND--------
PlacesRoutes.post('/resend-place', resendPlaceCode);

//?-------Ruta FORGOT PASSWORD--------
PlacesRoutes.post('/forgotpassword', forgotPlacePassword);

//?--------------------
//*---REDIRECT ROUTE
//?--------------------

PlacesRoutes.get('/forgotpassword/sendpassword/:id', sendPlacePassword);

//?-------Ruta CHANGE PASSWORD PLACE--------
PlacesRoutes.patch('/changepassword', [isAuthPlace], modifyPlacePassword);

//?--------Ruta ADD GAME TO PLACE CATALOG--------
PlacesRoutes.post('/:placeId/add-game-to-catalog/:gameId', [isAuthPlace], addGameToCatalog);

//?--------Ruta DELETE GAME IN PLACE CATALOG--------
PlacesRoutes.post('/:placeId/delete-game-catalog/:gameId', [isAuthPlace], deleteGameInCatalog);

module.exports = PlacesRoutes;
