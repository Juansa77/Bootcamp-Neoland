//Nos traemos express

const express = require("express")

//creamos el puerto

const PORT = 8080

//creamoos el servidor

const app = express()

// Escuchamos el servidor y le asociamos el puerto

app.listen(PORT, ()=>{console.log(`server escuchando puerto ${PORT}`)})