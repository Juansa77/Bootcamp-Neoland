const express = require("express");

const app = express();

const router = express.Router();

const PORT = 8080;

// Routing

//Vamos con los parámetros opciones QUERY

router.get("/name", (req, res) => {
  const id = req.query.id;
  //Hacemos destructuring para sacar name
  /* const {name} =req.params

    const people=["Luis", "Manolo", "Pepe"]
   const peopleToLowerCase = people.map((element)=> element.toLowerCase())
   const index = peopleToLowerCase.indexOf(name)

    index === -1? res.send(console.log("no lo encuentro")): res.send(console.log(`Se encuentra en la posición ${index}`))*/
  //Es un parametro opcional y que no rompe la ejecución del controlador
  //Para acceder
  res.send(`La query es ${id}`);
});

router.get("/person/:name", (req, res) => {
  const { name } = req.params;

  const people = ["Luis", "Manolo", "Pepe", "Mawi", "Nora", "Marta"];
  const peopleLowerCase = people.map((word) => word.toLowerCase());
  const targetNameIndex = peopleLowerCase.indexOf(name)
  console.log(peopleLowerCase);

  if (targetNameIndex == -1) {
    res.send("No lo he encontrado");
    console.log(targetNameIndex);
  } else {
    res.send(`Se encuentra en la posicion ${targetNameIndex}`);
    console.log(targetNameIndex);
  }
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`escuchando en port http://localhost:${PORT}`);
});
