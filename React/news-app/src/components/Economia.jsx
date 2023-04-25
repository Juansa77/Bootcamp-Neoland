import React from 'react'
import NoticiasFetch from './NoticiasFetch'
import { Navigate } from 'react-router-dom'

const Economia = () => {

  return (
    <div><NoticiasFetch topic={"economy"}/></div>
  )
}

export default Economia