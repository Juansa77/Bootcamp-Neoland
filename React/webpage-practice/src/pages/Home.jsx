import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'


const Home = () => {
  const [requestAnime, requestManga]= useOutletContext()

  useEffect(()=>{
    console.log(`requestAnime: ${requestAnime}` )
    console.log(`requestManga: ${requestManga}`  )

  },[])
  return (
    <div>Home</div>
  )
}

export default Home