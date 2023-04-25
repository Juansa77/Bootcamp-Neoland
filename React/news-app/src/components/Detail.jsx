import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { newsArray } from './NoticiasFetch'
import { Navigate } from 'react-router-dom'

const Detail = () => {
   
    const {newsID} = useParams()
    console.log("this context:", newsID)

const thisNews = newsArray.find(element=> element.id===newsID)

  return (
    <div><h1>{thisNews.title}</h1><p>Aquí va el texto</p></div>
  )
}

export default Detail