const express = require('express');
const { upload } = require('../../middlewares/files.middleware');
const { isAuth } = require('../../middlewares/auth.midddleware');
const registerPlace = require('../controllers/places.controller');
const checkNewPlace = require('../controllers/places.controller');
const loginPlace = require('../controllers/places.controller');

const PlacesRoutes = express.Router();

//?------Ruta REGISTER PLACE--------
PlacesRoutes.post('/register-place', upload.single('image'), registerPlace);

//?-----Ruta CHECK CONFIRMATION--------
PlacesRoutes.post('/check-place', checkNewPlace);

//?-------Ruta LOGIN PLACE--------
PlacesRoutes.post('/place-login', loginPlace);

module.exports = PlacesRoutes;
