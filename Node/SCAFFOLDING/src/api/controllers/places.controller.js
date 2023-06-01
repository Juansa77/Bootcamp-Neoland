const User = require('../models/user.model');
const Place = require('../models/place.model');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const setError = require('../../helpers/handleError');
const { deleteImgCloudinary } = require('../../middlewares/files.middleware');
const { generateToken } = require('../../utils/token');
const randomPassword = require('../../utils/randomPassword');
const { findById } = require('../models/game.model');

dotenv.config();

//!---------------------------------------
//?-----------REGISTER NEW PLACE---------
//!---------------------------------------

const registerPlace = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    //Lo primero es actualizar los indexs
    await Place.syncIndexes();
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;

    //Configuramos nodeMail para que envíe el código
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      },
    });

    //Creamos el código que enviará nodemail

    const confirmationCode = Math.floor(
      Math.random() * (999999 - 100000) + 100000
    );

    //Hacer una nueva estancia de usuario
    const newPlace = new Place({ ...req.body, confirmationCode });
    if (req.file) {
      newPlace.image = req.file.path;
    } else {
      newPlace.image = 'Imagen genérica';
    }
    const placeExits = await Place.findOne({
      email: newPlace.email,
      name: newPlace.name,
    });

    if (placeExits) {
      return next(setError(409, 'This place already exists'));
    } else {
      const createPlace = await newPlace.save();
      createPlace.password = null;

      //ENVIAMOS EL CORREO DE CONFIRMACIÓN

      const mailOptions = {
        from: email,
        to: req.body.email,
        subject: 'Confirmation code',
        text: `Here is your confirmation code: ${confirmationCode}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent to ${newPlace}`);
        }
      });

      return res.status(201).json({
        user: createPlace,
        confirmationCode: confirmationCode,
      });
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(
      setError(error.code || 500, error.message || 'Error creating place')
    );
  }
};

//!---------------------------------------
//?-----------CHECK NEW PLACE---------
//!---------------------------------------

const checkNewPlace = async (req, res, next) => {
  try {
    //Del req.body desestructuramos el email y el confirmation code para comprobar si existe
    const { email, confirmationCode } = req.body;
    const placeExists = await Place.findOne({ email });

    if (!placeExists) {
      //Si no existe
      return res.status(404).json('Place not found');
    } else {
      //Si existe, actiualizamos el usuario
      if (confirmationCode === placeExists.confirmationCode) {
        //si existr, actualizamos y le metemos la propiedad true al objeto
        await placeExists.updateOne({ check: true });
        //Testeamos de que se ha actualizado correctamente
        const updatePlace = await Place.findOne({ email });

        //testeamos con un ternario si update user es true or false

        return res
          .status(200)
          .json({ testCheckOk: updatePlace.check == true ? true : false });
      } else {
        //si se equivoca con el código, lo borramos de la base de datos y lo mandamos al registro
        await Place.findByIdAndDelete(placeExists._id);
        //Borramos la imagen
        deleteImgCloudinary(placeExists._id);

        //ahora devolvemos el objeto con un test para ver si el borrado se ha hecho bien
        return res.status(200).json({
          placeExists,
          check: false,
          delet: (await Place.findById(placeExists._id))
            ? 'Error deleting place'
            : 'User deleted',
        });
      }
    }
  } catch (error) {
    return next(setError(500, 'General error checking code'));
  }
};


//!--------------------------------------------------
//?-----------LOGIN PLACE--------------------------------
//!--------------------------------------------------

const loginPlace = async (req, res, next) => {
  try {
    //traemos email y pass del req.body
    const { email, password } = req.body;
    //buscamos el usuario
    const place = await Place.findOne({ email });
    //si no hay user, devolvemos un 404
    if (!place) {
      return res.status(404).json('Place not found');
    } else {
      //si hay user, comparamos la contraseña recibida del req.body con la almacenada en bcrypt
      if (bcrypt.compareSync(password, place.password)) {
        //si la contraseña coincide, generamos un token con la id del user y el email
        const token = generateToken(place._id, email);
        //hacemos un return y devolvemos el token
        return res.status(200).json({ place: { email, _id: place._id }, token });
      } else {
        //si la contraseña no es correcta enviamos un 404 con invalid password
        return res.status(404).json('Invalid password');
      }
    }
  } catch (error) {
    return next(
      setError(500 || error.code, 'Login general error' || error.message)
    );
  }
};


module.exports =  registerPlace ;
module.exports = checkNewPlace;
module.exports = loginPlace

