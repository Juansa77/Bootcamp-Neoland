import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Anime from './pages/Anime'
import Manga from './pages/Manga'
import AnimeDetail from './pages/AnimeDetail'
import MangaDetail from './pages/MangaDetail'
import Ejemplo from './pages/Ejemplo'
import Page404 from './pages/Page404'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename='/'>
  <Routes>
    <Route path='/' element={<App/>}>
    <Route index element={<Home/>}/>
    <Route path="/anime" element={<Anime/>}/>
    <Route path="/manga" element={<Manga/>}/>
    <Route path="/anime/:id" element={<AnimeDetail/>}/>
    <Route path="/manga/:id" element={<MangaDetail/>}/>
    <Route path="/*" element={<Page404/>}/>
    <Route path="/ejemplo" element={<Ejemplo/>}/>
      
</Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
