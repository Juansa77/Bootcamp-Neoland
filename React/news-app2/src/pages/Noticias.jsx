import React from 'react'
import Cards from '../components/Cards'
import { useOutletContext } from 'react-router-dom'
import "./Noticias.css"
import RandomNew from '../components/RandomNew'



const Noticias = () => {
  const [requestNews] =useOutletContext()




  return (

    <div className='news'>
        <RandomNew data={requestNews}/>
    <Cards data={requestNews}/>
    </div>
    
  )
}

export default Noticias