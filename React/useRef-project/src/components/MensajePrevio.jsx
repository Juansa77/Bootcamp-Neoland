import { useState, useEffect, useRef } from "react"


const MensajePrevio =()=>{
const [mensaje, setMensaje] = useState("")
const prevMensaje = useRef("")

useEffect(()=>{

prevMensaje.current =mensaje

}, [mensaje])

const handleChange=(e)=>{
console.log("Está cambiando el Input")
setMensaje(e.target.value)
}

return (

<div>

<input type= "text" onChange={handleChange}/>
<p>Mensaje:{mensaje}</p>
<p>Referencia del mensaje: {prevMensaje.current}</p>


</div>


)


}

export default MensajePrevio