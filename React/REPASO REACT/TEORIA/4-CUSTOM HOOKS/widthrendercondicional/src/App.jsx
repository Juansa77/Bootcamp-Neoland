
import React from 'react'
import './App.css'
import useResize from './components/hooks/useResize'


function App() {

  const {width} = useResize()
  console.log(width)

  return (
    <React.Fragment>
{width > 600 && <h1>El ancho es mayor que 600 px</h1>}
    </React.Fragment>
  )
}

export default App
