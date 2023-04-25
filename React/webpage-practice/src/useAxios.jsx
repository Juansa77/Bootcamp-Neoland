import axios from "axios"

import React from 'react'
 
const useAxios =async (options) => {
 return await axios.request(options).then((response)=>response.data)
}

export default useAxios