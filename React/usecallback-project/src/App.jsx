import { useState } from 'react'

import './App.css'
import MyComponent from './components/MyComponent'
import Counter from './components/Counter'
import CodeUseCallback from './components/CodeUseCallBack'

function App() {


  return (
    <div className="App">
<Counter/>
<CodeUseCallback/>
    </div>
  )
}

export default App
