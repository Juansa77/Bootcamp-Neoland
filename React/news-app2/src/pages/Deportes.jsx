import React from 'react'
import Cards from '../components/Cards'
import useRequest from '../Hooks/useRequest'
import { useOutletContext } from 'react-router-dom'

const Deportes = () => {

  const [requestNews] =useOutletContext()
 
  return (
    <div><Cards data={requestNews} topic={"sport"}/></div>
  )
}

export default Deportes