import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Detail.css"

const Detail = () => {
  const { newsID } = useParams();
  var thisNews = [];
  const urlNewsApi = import.meta.env.VITE_APP_NEWS;
  const [data, setData] = useState([]);

  //Hacemos la petición a axios de la Api
  useEffect(() => {
    axios
      .get(urlNewsApi)
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  //almecenamos la data en localstorage cuando se renderiza el elemento

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(data));
  }, [data]);

  //cuando se renderiza, solicitamos los datos del localStorage
  useEffect(() => {
    const miData = localStorage.getItem("array");
    if (miData) {
      setData(JSON.parse(miData));
    }
  }, []);
  //filtramos
  thisNews = data.find((element) => element.id === newsID);



  return (
    <div className="newsContainer">
      {thisNews && (
        <div className="new">
        <h4>{thisNews.topic}</h4>
          <h1>{thisNews.title}</h1>
          <p className="resume">    Esse elit do aute consequat tempor nostrud reprehenderit eiusmod
            pariatur dolore fugiat duis. Pariatur sunt qui adipisicing quis</p>
            <img src={thisNews.img} alt={thisNews.title}></img>
            <h4 className="author">{thisNews.author}</h4>
          <p className="text">
            Esse elit do aute consequat tempor nostrud reprehenderit eiusmod
            pariatur dolore fugiat duis. Pariatur sunt qui adipisicing quis
            culpa sint deserunt quis enim dolore. Eiusmod reprehenderit officia
            aliqua nostrud nulla tempor aute Lorem adipisicing enim magna nisi
            nulla amet. Sit mollit sit ut quis id nulla excepteur minim.
            Excepteur consequat reprehenderit duis excepteur. Enim laboris
            nostrud occaecat fugiat aute consequat. Commodo qui sint quis
            commodo reprehenderit enim tempor ipsum occaecat proident eu sint eu
            elit.
          </p>
        </div>
      )}
    </div>
  );
};

export default Detail;
