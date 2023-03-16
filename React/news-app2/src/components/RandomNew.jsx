import React from 'react'
import "./RandomNew.css"
import { Link } from 'react-router-dom'

const RandomNew = ({data}) => {
    var randomNew = Math.floor(Math.random()*data.length)
  return (
    <div className="randomNew">{randomNew !=0 &&
        <Link to={`/noticias/${data[randomNew].topic}/${data[randomNew].id}`}>
        <figure className="cardRandom">
          <h5>{data[randomNew].topic}</h5>
          <img src={data[randomNew].img} />
          <h1>{data[randomNew].title}</h1>
          <h3>{data[randomNew].author}</h3>
          <p>Esse elit do aute consequat tempor nostrud reprehenderit eiusmod
      pariatur dolore fugiat duis. Pariatur sunt qui adipisicing quis
      culpa sint deserunt quis enim dolore. Eiusmod reprehenderit officia
      aliqua nostrud nulla tempor aute Lorem adipisicing enim magna nisi
      nulla amet. Sit mollit sit ut quis id nulla excepteur minim.
      Excepteur consequat reprehenderit duis excepteur. </p>
        </figure>     </Link>}
   
      </div>
  )
}

export default RandomNew