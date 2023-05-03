//requerimos fs de Node
const fs= require("fs")



//creamos un array con las personas que vamos a utilizar 
const avengers = [
    {
        name: 'SpiderMan',
        power: 70
    },
    {
        name: 'Dr.Strange',
        power: 80
    },
    {
        name: 'Hulk',
        power: 110
    }
];

// Pasamos el array en un JSON en formato String
const avengersJson = JSON.stringify(avengers)

//Usamos el método para escribir en un fichero de forma asíncrona 
//Ahora fs creará un archivo al que damos el nombre de avengers.json

//1. Primero el nombre que le vamos a dar el archivo, segundo lo que le vamos a meter, y tercero la callback Y LE DAMOS A NPM RUN WRITE (EL NOMBRE DEL ARCHIVO EN EL QUE ESCRIBIMOS)

fs.writeFile("avengers.json", avengersJson, ()=>{
    console.log("avengers.json created!")
})



