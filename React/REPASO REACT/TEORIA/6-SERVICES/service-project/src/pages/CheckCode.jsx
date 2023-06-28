import { useAuth } from "../context/authContext"
import "./CheckCode.css"


const CheckCode = () => {
  const {allUser} =useAuth()
  return (
    <div>CheckCode</div>
  )
}

export default CheckCode