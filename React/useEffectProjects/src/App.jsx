import { useState } from 'react'
import EffectOnLoad from './components/EffectOnLoad'
import CodeEffectUnmount from './components/CodeEffectUnmount'
import CodeEffectUpdate from './components/CodeEffectUpdate'

import './App.css'

function App() {


  return (
    <div className="App">

   <EffectOnLoad/>
   <CodeEffectUnmount/>
   <CodeEffectUpdate/>
    </div>
  )
}

export default App
