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
          console.log(`Email sent to ${newUser}`);
        }
      });

      return res.status(201).json({
        user: createUser,
        confirmationCode: confirmationCode,
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
          .json({ testCheckOk: updateUser.check == true ? true : false });
      } else {
        //si se equivoca con el código, lo borramos de la base de datos y lo mandamos al registro
      }
    }
  } catch (error) {
    return next(setError(500, "General error checking code"));
  }
};

//!--------------------------------------------------
//?-----------RESEND CODE CONFIRMATION----------
//!--------------------------------------------------

const resendCode = async (req, res, next) => {
  try {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });

    //comprobamos si el usuario existe para enviar el password con findone

    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      const mailOptions = {
        from: email,
        to: req.body.email,
        subjet: "Confirmation code",
        text: `Your confirmation code is ${userExists.confirmationCode}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent to` + info.response);
          return res.status(200).json({
            resend: true,
          });
        }
      });
    } else {
      return res.status(404).json("User not found");
    }
  } catch (error) {
    return next(setError(500, error.message || "General error sending code"));
  }
};

//!--------------------------------------------------
//?-----------LOGIN--------------------------------
//!--------------------------------------------------

const login = async (req, res, next) => {
  try {
    //traemos email y pass del req.body
    const { email, password } = req.body;
    //buscamos el usuario
    const user = await User.findOne({ email });
    //si no hay user, devolvemos un 404
    if (!user) {
      return res.status(404).json("User not found");
    } else {
      //si hay user, comparamos la contraseña recibida del req.body con la almacenada en bcrypt
      if (bcrypt.compareSync(password, user.password)) {
        //si la contraseña coincide, generamos un token con la id del user y el email
        const token = generateToken(user._id, email);
        //hacemos un return y devolvemos el token
        return res.status(200).json({ user: { email, _id: user._id }, token });
      } else {
        //si la contraseña no es correcta enviamos un 404 con invalid password
        return res.status(404).json("Invalid password");
      }
    }
  } catch (error) {
    return next(
      setError(500 || error.code, "Login general error" || error.message)
    );
  }
};

//!-------------------------------------------------------------------------------------
//?-----------CAMBIO CONTRASEÑA SIN ESTAR LOGEADO--------------------------------
//!-------------------------------------------------------------------------------------

const forgotPassword = async (req, res, next) => {
  try {
    //recibimos el email por el req.body
    const { email } = req.body;

    //comprobamos si existe el usuario
    const userDb = await User.findOne({ email });
    if (userDb) {
      //si el usuario existe, redirect al controlador que se encarga del envío y actualización
      return res.redirect(
        `http://localhost:8081/api/v1/users/forgotpassword/sendPassword/${userDb._id}`
      );
    }

    else{
      // Si el usuario no está en la base de datos, devolvemos un 404
      return res.status(404).json("User not registered")
    }
  } catch (error) {
    return next(error)
  }
};

const sendPassword = async(req, res, next)=>{
  try {
    //recibimos la id por parámetros
  const {id} =req.params;
  //el id lo utilizamos para buscar el usuario en la base de datos
  const userDb = await User.findById(id)

  //Aquí configuramos el correo electrónico para enviar el password
  const email = process.env.EMAIL
  const password = process.env.PASSWORD

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email, 
      pass: password,
        }
  })
let passwordSecure = randomPassword()
const mailOptions ={
  from: email,
  to: userDb.email,
  subject: "----------",
  text: `User: ${userDb.name}. Your new code login is ${passwordSecure} Hemos enviado esto porque tenemos una solicitud de cambio de contraseña, si no has sido ponte en contacto con nosotros, gracias.`,
}

//enviamos el correo y en el envío gestionamos el envío de la contraseña

transporter.sendMail(mailOptions, async function(error, info){
  if(error){
    console.log(error)

    //si no se envía el correo retornamos un 404 y le decimos que no se ha hecho nada
  }
})


} catch (error) {
    
  }


}



//!---------------------------------------
//?-----------UPDATE USER--------------
//!---------------------------------------

const updateUser = async (req, res, next) => {
  try {
    const { id, email, password, role, check, confirmationCode } = req.user;

    // Creamos un nuevo modelo de user
    const patchUser = new User(req.body);

    //tengo que verificar lo que es modificable y no en el user. No vamos a cambiar; id, password, role, confirmationcode, check

    patchUser._id = id;
    patchUser.password = password;
    patchUser.role = role;
    patchUser.check = check;
    patchUser.confirmationCode = confirmationCode;
    patchUser.email = email;

    // actualzamos el user

    await User.findByIdAndUpdate(id, patchUser);
    //eliminamos la imagen anterior si se recibió una nueva
    if (req.file) {
      deleteImgCloudinary(req.user.image);
    }

    //-----------Test RUNTIME para ver si se ha actualizado
    //buscamos el usuario actualizado
    const updateUser = await User.findById(id);
    //cogemos la skeys del body
    const updateKeys = Object.keys(req.body);

    //creamos una variable para variar los test
    const testUpdate = [];

    //recorremos las keys y comparamos
    updateKeys.forEach((item, index) => {
      if (updateUser[item] == rq.body[item]) {
        testUpdate.push({ [item]: true });
      } else {
        testUpdate.push({ [item]: false });
      }
    });

    if (req.file) {
      updateUser.image == req.file.path
        ? testUpdate.push({ [item]: true })
        : testUpdate.push({ [item]: false });
    }

    return res.status(200).json(testUpdate);
  } catch (error) {
    deleteImgCloudinary(req.file.path);
    return next(error);
  }
};

//!---------------------------------------
//?-----------DELETE  USER--------------
//!---------------------------------------

const deleteUser = async (req, res, next) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id);
    if (await User.findById(_id)) {
      return res.status(404).json("User not deleted");
    } else {
      deleteImgCloudinary(req.user.image);
      return res.status(200).json("User deleted");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  register,
  checkNewUser,
  updateUser,
  deleteUser,
  resendCode,
  login,
  forgotPassword
};
