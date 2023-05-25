const User = require("../api/models/user.model");
const dotenv = require("dotenv");
const { verifyToken } = require("../utils/token");
dotenv.config();

const isAuth = async (req, res, next) => {
  //Bearer es lo que autentifica el token, le quitamos el prefijo para que pueda ser autentificado

  const token = req.headers.authorization?.replace("Bearer ", '');

  //Si no hay token, instanciamos un nuevo error
  if (!token) {
    return next(new Error("Unauthorized"));
  }

  try {
    //decodificamos el token para que nos devuelva la id y el email y lo verificamos, con el método de verificación y el secret
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    //con los datos obtenidos, lo buscamos por la id
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(error);
  }
};

//?--------------------------------------------------------------
//*---FUNCIÓN PARA VERIFICAR SI UN USUARIO ES ADMIN---------
//?--------------------------------------------------------------

const isAuthAdmin = async (req, res, next) => {
  //Bearer es lo que autentifica el token, le quitamos el prefijo para que pueda ser autentificado

  const token = req.headers.authorization?.replace("Bearer", "");

  if (!token) {
    //Si no hay token, devolvemos la instancia de un nuevo error
    return res.status(new Error("Unauthorized"));
  }

  try {
    //Decodificamos el token con la función verify  y sacamos la id y el email, que es con lo que hemos creado el token
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    //con la id que hemos sacado de decoded, lo buscamos
    req.user = await User.findById(decoded.id);
    //Si el usuario no es el admin, devolvemos mensaje de error
    if (req.user.role != "admin") {
      return next(new Error("Unauthorized"));
    }
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  isAuth,
  isAuthAdmin,
};
