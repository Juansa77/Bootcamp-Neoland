import { useState, useRef } from "react"

const CodeUseRef=()=>{

const textInput= useRef(null)
const [name, setName] = useState("Juansa")

const printValue =()=>{

const inputValue = textInput.current?.value
if(inputValue) setName(inputValue)

console.log( "Imprime nombre", inputValue)
    
}

  return(
<div className="useRef">

<h1>Hola, soy {name}</h1>
<input type ="text" placeholder ="name" ref={textInput}/>
<button onClick={printValue}>Mostrar</button>


</div>

  )  
}

export default CodeUseRef