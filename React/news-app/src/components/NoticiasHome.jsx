import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const NoticiasHome = () => {
  console.log("renderizando noticias home")

  return (
    <div>

  
         <button><NavLink to="/noticias/deportes">Deportes</NavLink></button> 
        
         <button><NavLink to="/noticias/economia">Economia</NavLink></button> 
        
         <button><NavLink to="/noticias/tecnologia">Tecnologia</NavLink></button> 
       

    </div>
  )
}

export default NoticiasHome