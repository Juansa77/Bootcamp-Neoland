import React from "react"

export const ButtonState = ({setter, children}) => {
  //si queremos obtener el valor actualizado del estasp, meter el console dentro de la callback
  return (
    <React.Fragment><button onClick={()=>{
      setter((value)=>{
        const updateValue = value+1;
        console.log(updateValue)
        return updateValue
      })
    }}>{children}</button></React.Fragment>
  )
}

