import "./App.css";
import axios from "axios";
import Figure from "./components/figure";

import { useState, useEffect } from "react";

function App() {
//La fecha en formato ISO(año, mes, día)
  const today = new Date(Date.now()).toISOString().slice(0,10);
  //Variable para el estado de  Apod (picture of the day) con un objeto vacio
  const [apod, setApod] = useState({})
  //Seteamos la variable today para convertirla en un estado
  const [date, setDate] = useState(today)
  //Variable con la  URL de la api de la Nasa
  const NasaURL = "https://api.nasa.gov/"
  //Mi API KEY
  const NasaApiKey = "hUgOtTtBe20kOrmD3sNyhpDsTeiZ7IQeK5f2gExC"

useEffect(()=>{
const getApod= async()=>{

  const response = await axios.get(

    `${NasaURL}planetary/apod?date=${date}&api_key=${NasaApiKey}`
  )
  //Seteamos la respuesta con los datos del fetch de Axios
setApod(response.data)
}
getApod()
},[date])

const handleInput =(e)=>{
setDate(e.target.value.toLocaleString())
}


  return (
  
  <div className="App">
  <div className="bar">
  <h2 className="title">NASA API </h2><img src="public\NASA_logo.svg.webp" alt="Nasa logo"/></div>
  <h1>Picture of the day</h1>
  <input type ="date" id="photo-date" onChange={handleInput}/>
  {date>today? (<h2>Select a previous date</h2>): (<Figure data={apod}/>)}
  <div className="standard-dialog center">
        <h1 className="dialog-text">@lethamburn - 2022 - <a href="https://api.nasa.gov/">https://api.nasa.gov/</a></h1>
      </div>






  </div>)
}

export default App;
