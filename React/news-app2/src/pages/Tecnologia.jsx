import React from 'react'
import Cards from '../components/Cards'

import { useOutletContext } from 'react-router-dom'

const Tecnologia = () => {
  const [requestNews] =useOutletContext()
  return (
    <div><Cards data={requestNews} topic={"tecnology"}/></div>
  )
}

export default Tecnologia