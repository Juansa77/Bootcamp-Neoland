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
   modifyPlacePassword
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

module.exports = PlacesRoutes;
