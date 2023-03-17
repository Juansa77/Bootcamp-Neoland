import React from 'react'

import Cards from '../components/Cards'
import useRequest from '../Hooks/useRequest'

const Economia = () => {
  const urlNewsApi = import.meta.env.VITE_APP_NEWS
  const fetch = useRequest(urlNewsApi)

  return (
    <div><Cards data={fetch} topic={"economy"}/></div>
  )
}

export default Economia