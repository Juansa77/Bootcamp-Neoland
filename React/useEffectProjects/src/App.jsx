import { useState } from 'react'
import EffectOnLoad from './components/EffectOnLoad'
import CodeEffectUnmount from './components/CodeEffectUnmount'

import './App.css'

function App() {


  return (
    <div className="App">

   <EffectOnLoad/>
   <CodeEffectUnmount/>
    </div>
  )
}

export default App
