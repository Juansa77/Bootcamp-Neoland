import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CodeUseRef from './components/CodeUseRef'
import CodeRefFocus from './components/CodeRefFocus'
import CodeTaxCalculator from './components/CodeTaxCalculator'
import Counter from './components/Counter'
import MensajePrevio from './components/MensajePrevio'


function App() {


  return (
    <div className="App">
  <CodeUseRef/>
  <CodeRefFocus/>
  
  <CodeTaxCalculator/>
  <MensajePrevio/>
  <Counter/>


    </div>
  )
}

export default App
