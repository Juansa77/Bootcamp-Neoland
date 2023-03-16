import React from 'react'
import Cards from '../components/Cards'
import { newsArrayComplete } from './Noticias'
import useRequest from '../Hooks/useRequest'

const Deportes = () => {
  const urlNewsApi = import.meta.env.VITE_APP_NEWS
  const fetch = useRequest(urlNewsApi)
 
  return (
    <div><Cards data={fetch} topic={"sport"}/></div>
  )
}

export default Deportes