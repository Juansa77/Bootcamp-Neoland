import React from 'react'
import { useState, useEffect } from 'react'
import useAxios from '../useAxios'

const useRequest = (URL) => {

    const [data, setData] = useState([])
    const getData= async()=>{
        console.log(`Nos traemos la data de useRequest y la URL`, URL)
        const data= await useAxios(URL)
        setData(data)
        
    }
    useEffect(()=>{
        
        getData()
    },[])

return(

    <div>useRequest</div>
)

}

export default useRequest