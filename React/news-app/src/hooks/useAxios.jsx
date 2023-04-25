import React from 'react'
import axios from 'axios'

const UseAxios = async(options) => {
  return await axios.request(options).then((res)=>res.data)
  
}

export default UseAxios