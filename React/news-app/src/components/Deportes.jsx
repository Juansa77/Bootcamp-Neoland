import React from 'react'
import NoticiasFetch from './NoticiasFetch'
import { Navigate } from 'react-router-dom'

const Deportes = () => {


  return (
    <div><NoticiasFetch topic={"sport"}/></div>
  )
}

export default Deportes