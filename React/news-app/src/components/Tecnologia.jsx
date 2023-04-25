import React from 'react'
import NoticiasFetch from './NoticiasFetch'
import { Navigate } from 'react-router-dom'

const Tecnologia = () => {

  return (
    <div><NoticiasFetch topic="tecnology"/></div>
  )
}

export default Tecnologia