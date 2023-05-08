const express =require("express")
const dotenv = require("dotenv")
const connect = require("./src/utils/db")

dotenv.config()

//1. CREAMOS EL SERVIDOR

const server =express()

// le indicamos que la información que le llega a través del body es de tipo JSON y la codifique por url
server.use(express.json())
server.use(express.urlencoded({extended:false}))

//SACAMOS PORT DEL .ENV

const PORT = process.env.PORT

//Usamos connect , extraido de DB y lo arrancamos

connect()

//ASIGNAMOS LAS RUTAS DE ALBUM

const albumRouter = require("./src/api/routes/albums.routes")
server.use("/api/v1", albumRouter)

//ASIGNAMOS LAS RUTAS DE ARTIST

const artistRouter = require("./src/api/routes/artist.routes")
server.use("/api/v1", artistRouter)

//ASIGNAMOS LAS RUTAS NOT FOUND

server.use("*", (req, res, next)=>{
    const error = new Error("Route not found")
    error.status = 404
    next(error)
})

//ACTIVAMOS EL SERVIDOR

server.listen(PORT, ()=>{
    console.log(`Server running om http://localhost:${PORT}`)
})