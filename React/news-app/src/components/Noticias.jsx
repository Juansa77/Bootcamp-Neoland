import React from 'react'
import NoticiasHome from './NoticiasHome'
import NoticiasFetch from './NoticiasFetch'
import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'
import useRequest from '../hooks/newRequest'
import Card from './Card'


const Noticias = () => {





  return (
    <div>{<NoticiasHome/>}
    {<NoticiasFetch/>}
    </div>
  )
}

export default Noticias