const http = require("http")

//en request nos dice que es lo que pide el usuario, así que podemos definir lo que haremos ante una pertición concreta dentro de la URL
const requestHandler = (req, res) =>{
    if(req.url==="/hello"){
        res.setHeader("Content-Type", "text/json")
        //ponemos 200 para definir que esto es la respuesta exitosa
        res.writeHead(200)
        //decimos lo que debe hacer al final
        res.end("Hola holitas desde la terminal de NODEjs")
    }
    console.log(req.url)
}

//definimos el puerto
const PORT = 3400
//creamos el servidor
const server = http.createServer(requestHandler)

//le decimos que escuche a traves del puerto que hemos indicado 

server.listen(PORT, ()=>{
    console.log("Server escuchando en puerto 3400")

})

