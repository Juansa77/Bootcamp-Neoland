const express = require("express")
const dotenv = require("dotenv")
const nodemailer = require("nodemailer")

dotenv.config()

//Creamos el servidor
const app = express()
//Nos traemos el port del .env
const PORT = process.env.PORT

//-------CONFIGURAMOS EL ROUTER DE EXPRESS PARA PROBAR NODEMAILER ------
const router = express.Router();



//enrutamos y configuramos nodemailer
router.get("/sendNewMail", (req, res, next) => {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;
    //Transporter establece una conexión  saliente y envia el correo, establece quien envía el correo logeándonos
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });
  
//Utilizamos el método sendmail para enviar el email , ponemos el email al que vamos a recibirlo
    const mailOptions = {
      from: email,
      to: "dedalus1977@gmail.com",
      subject: "Confirmation TEST NODEMAILER",
      text: `ok todo bien`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return next(error);
      } else {
        return res.status(200).json("Email sent: " + info.response);
      }
    });
  });


// le decimos al server que use el enrutado 
app.use("/", router)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  
