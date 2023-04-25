//Nos traemos express

const express = require("express")

//creamos el puerto

const PORT = 8080


//definimos el rooting de la aplicacióin con la librería routing de express. RECUERDA QUE ROUTER ES UN OBJETO, LE PUEDES METES COSAS
const router = express.Router()


router.get("/", (req,res)=>{
    res.send("Hello world")
    
})


router.get("/movies", (req, res)=>{
    const movies =["Dune", "Batman", "Robocop"]
    res.send
    
})






//creamoos el servidor

const app = express()

//Configuramos el PATH PRINCIPAL
app.use("/api/v1/", router)

// Escuchamos el servidor y le asociamos el puerto

app.listen(PORT, ()=>{console.log(`server escuchando puerto http://localhost:${PORT}`)})