const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const setError = require("../../helpers/handleError");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");
//!Falta el .env en el token
const { generateToken } = require("../../utils/token");
const randomPassword = require("../../utils/randomPassword");
dotenv.config();

//!---------------------------------------
//?-----------REGISTER NEW USER---------
//!---------------------------------------

const register = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    //Lo primero es actualizar los indexs
    await User.syncIndexes();
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;

    //Configuramos nodeMail para que envíe el código
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });

    //Creamos el código que enviará nodemail

    const confirmationCode = Math.floor(
      Math.random() * (99999999 - 10000000) + 100000000
    );

    //Hacer una nueva estancia de usuario
    const newUser = new User({ ...req.body, confirmationCode });
    if (req.file) {
      newUser.image = req.file.path;
    } else {
      newUser.image = "Imagen genérica";
    }
    const userExits = await User.findOne({
      email: newUser.email,
      name: newUser.name,
    });

    if (userExits) {
      return next(setError(409, "This users already exits"));
    } else {
      const createUser = await newUser.save();
      createUser.password = null;

      //ENVIAMOS EL CORREO DE CONFIRMACIÓN

      const mailOptions = {
        from: email,
        to: req.body.email,
        subject: "Confirmation code",
        text: `Here is your confirmation code: ${confirmationCode}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sento to ${newUser}`);
        }
      });

      return res.status(201).json({
        user: createUser,
        confirmatioCode: confirmationCode,
      });
    }
  } catch (error) {
    deleteImgCloudinary(catchImg);
    return next(
      setError(error.code || 500, error.message || "Error creating user")
    );
  }
};

//!---------------------------------------
//?-----------CHECK NEW USER---------
//!---------------------------------------

const checkNewUser = async (req, res, next) => {
  try {
    //Del req.body desestructuramos el email y el confirmation code para comprobar si existe
    const { email, confirmationCode } = req.body;
    const userExists = await User.findOne({ email });
    if (!userExists) {
      //Si no existe
      return res.status(404).json("User not found");
    } else {
      //Si existe, actiualizamos el usuario
      if (confirmationCode === userExists.confirmationCode) {
        //si existr, actualizamos y le metemos la propiedad true al objeto
        await userExists.updateOne({ check: true });
        //Testeamos de que se ha actualizado correctamente
        const updateUser = await User.findOne({ email });

        //testeamos con un ternario si update user es true or false

        return res
          .status(200)
          .json({ testCheclOk: updateUser.check == true ? true : false });
      } else{

        //si se equivoca con el código, lo borramos de la base de datos y lo mandamos al registro 

      }
    }
  } catch (error) {

    return next(setError(500, "General error checking code"))
  }
};


//!--------------------------------------------------
//?-----------RESEND CODE CONFIRMATION----------
//!--------------------------------------------------







module.exports = { register, checkNewUser };
