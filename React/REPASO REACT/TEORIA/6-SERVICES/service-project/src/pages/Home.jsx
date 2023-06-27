import { useEffect } from "react"
import { useAuth } from "../context/authContext"
import "./Home.css"

const Home = () => {
  const {user} = useAuth()
  useEffect(()=>{console.log(user)},[user])
  return (
    <div>Home</div>
  )
}

export default Home