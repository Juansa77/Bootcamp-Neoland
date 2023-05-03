//Vamos a crear un servidor

//importamos el módulo http  (viene con Node)

const http = require("http")

//Creamos el servidor que escucha desde el puerto 3000. Req es lo requerido, res es la respuesta 

const server = http.createServer((req, res)=>{
    //Se configura la respuesta . StatusCode nos indica si la respuesta es exitosa. De 200 a 299 lo es
    res.statusCode= 200;
    //Los headers transmiten la información acerda del navegador del cliente o las característivas de la petición o respuesta
    res.setHeader('Content-Type', 'text/plain');
    //lo que queremos responder
    res.end("Holas")
})

//ahora decimos que escuche en el puerto 3000

server.listen(3000, ()=>{
    console.log("Servidor escuchando en el puerto 3000")
})