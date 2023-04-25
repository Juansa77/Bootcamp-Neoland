import UseAxios from './UseAxios';

import React from 'react'
import { useState, useEffect } from "react";

const useRequest = async(URL) => {
  const [data, setData] = useState([]);

  const getData =async () => {
    const data = await UseAxios(URL)
    setData(data)
  };

  
  useEffect(() => {
    getData();
  }, []);

  return data
}

export default useRequest