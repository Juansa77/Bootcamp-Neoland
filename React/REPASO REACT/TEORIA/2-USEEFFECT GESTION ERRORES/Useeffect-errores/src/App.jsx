import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import HandleError from './components/HandleError'


function App() {
  const [name, setName] = useState("Juansa")
  const [surname, setSurname] = useState("García")

  const inputName = useRef(null)
  const inputSurname = useRef(null)

  return (
    <>
    <h1>Hola {name} {surname}</h1>
    <input type="text" ref={inputName} onChange={()=>setName(inputName.current.value)}></input> 
    <input type="text" ref={inputSurname} onChange={()=>setSurname(inputSurname.current.value)}></input> 

     {name !== "Juansa" && <HandleError/>}
    </>
  )
}

export default App
