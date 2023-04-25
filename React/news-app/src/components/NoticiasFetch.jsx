import React from "react";
import Card from "./Card";
import UseAxios from "../hooks/UseAxios";

import axios from "axios";
import { useState, useEffect } from "react";
export var newsArray=[]

const NoticiasFetch = ({topic}) => {
  const newsApi = import.meta.env.VITE_APP_NEWS;
  const [data, setData] = useState([]);

  

  const getData =async () => {
  const data = await UseAxios(newsApi)
      setData(data);
    
  };

  
  useEffect(() => {
    getData();
  }, [data]);

newsArray=data
console.log("haciendo el fetch")

  return (
    <div>
<Card data={data} topic={topic}/>
    </div>
  );
};

export default NoticiasFetch;
