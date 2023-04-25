import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'
import useRequest from './pages/useRequest'

function App() {

  const URLanime= import.meta.env.VITE_APP_ANIME
  const URLmanga= import.meta.env.VITE_APP_MANGA
 const requestAnime= useRequest(URLanime)
 const requestManga= useRequest(URLmanga)

  return (
    <div className="App">

<Outlet context={[requestAnime, requestManga]}/>
    
    </div>
  )
}

export default App
