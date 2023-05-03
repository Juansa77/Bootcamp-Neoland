//importamos fs de node

const fs = require("fs");

//aquí le hemos indicado primero el nombre del archivo 
fs.readFile("avengers.json", (err, avengers)=>{

    if(err){
        //consoleamos el error en caso de error 
        console.log("Ha habido un error leyendo el fichero")
    } else {



        //si obtenemos los datos y no hay error, se transforma con JSON.parse para poder leeerlo
        const parsedAvengers = JSON.parse(avengers)
        console.log (parsedAvengers)


    }

})


