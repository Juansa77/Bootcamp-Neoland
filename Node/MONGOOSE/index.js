const express = require('express');
// Requerimos el archivo de configuración de nuestra DB
const db = require("./utils/db")


const PORT = 3620;
//nos conectamos del archivo 
db.connect()
const server = express();

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});