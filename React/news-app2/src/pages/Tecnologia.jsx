import React from 'react'
import Cards from '../components/Cards'
import { newsArrayComplete } from './Noticias'
import useRequest from '../Hooks/useRequest'

const Tecnologia = () => {
  const urlNewsApi = import.meta.env.VITE_APP_NEWS
  const fetch = useRequest(urlNewsApi)
  return (
    <div><Cards data={fetch} topic={"tecnology"}/></div>
  )
}

export default Tecnologia