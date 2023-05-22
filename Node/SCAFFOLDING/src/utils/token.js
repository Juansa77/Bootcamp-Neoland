const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateToken = (id, email) => {
  if (!id || !email) {
    throw new Error("Missing id or email");
  }
  //!Falta el archivo que hay que meter en el .env
  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "Id" });
};


//* -------------FUNCIÓN PARA VERIFICAR EL TOKEN

const verifyToken = (token)=>{
    if(!token){
        throw new Error("Missing token")
    }

    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports ={generateToken,}