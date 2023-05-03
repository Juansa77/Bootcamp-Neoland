const fs = require("fs")


let jsonData = [
    { name: "John Doe", age: 30, city: "New York" },
    { name: "Jane Doe", age: 25, city: "London" }
];



//Aquí la función para convertir un json a csv

const convertJsonToCsv = (jsondata)=>{

    let csv= ""



    //Definimos los encabezados del CSV con las keys del JSON

    let headers = Object.keys(jsondata[0]);
    //se las vamos sumando a la variable csv. \n" significa nueva linea
    csv += headers.join(",") + "\n";

    //Y ahora los datos de la fila 

    //Por cada row del json va a leer la header, y por cada header va  a meter los datos y separarlos por coma
    jsondata.forEach((row) =>{
        headers.forEach((header, index)=>{
            if(index>0){
                csv += ","
            }

            csv += row[header]
        })

        csv += "\n"
    })

    return csv
}
//llamamos a la función metiendo el resultado en una variable
let csvData= convertJsonToCsv(jsonData)

//La función para escribir el fichero.: Primero el nombre y extensión que queremos tenga el archivo, después de donde vamos a sacar los datos y por úyltimo hacemos handle error

fs.writeFile("data.csv", csvData, error =>{
if(error){
    console.log("error escribiendo el fichero")
} else {
    console.log("fichero CSV creado")
}
})