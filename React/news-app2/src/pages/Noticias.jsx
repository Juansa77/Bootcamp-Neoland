import React from 'react'
import Cards from '../components/Cards'
import useRequest from '../Hooks/useRequest'
import "./Noticias.css"
import RandomNew from '../components/RandomNew'



const Noticias = () => {
  const urlNewsApi = import.meta.env.VITE_APP_NEWS
const fetch = useRequest(urlNewsApi)




  return (

    <div className='news'>
        <RandomNew data={fetch}/>
    <Cards data={fetch}/>
    </div>
    
  )
}

export default Noticias