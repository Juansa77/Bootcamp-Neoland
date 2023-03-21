import React from 'react'

import Cards from '../components/Cards'
import { useOutletContext } from 'react-router-dom'

const Economia = () => {
  const [requestNews] =useOutletContext()
 

  return (
    <div><Cards data={requestNews} topic={"economy"}/></div>
  )
}

export default Economia