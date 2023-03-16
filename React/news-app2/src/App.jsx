import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import useRequest from './Hooks/useRequest'
import NavBar from './components/NavBar'

function App() {
  
  const urlNewsApi = import.meta.env.VITE_APP_NEWS
  const requestNews = useRequest(urlNewsApi)
  console.log(requestNews)

  return (
    <div className="App">
    <h1>EL NOTICIERO</h1>
    <NavBar/>
    <Outlet context={[requestNews, urlNewsApi]}/>
  
    </div>
  )
}

export default App
