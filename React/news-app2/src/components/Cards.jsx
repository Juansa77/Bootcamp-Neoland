import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Cards = ({ data, topic}) => {


  const [searchInput, setSearchinput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  if (topic) {
   
    data = data.filter((element) => element.topic == topic);
  }
  
  const searchItems = (searchValue) => {
    setSearchinput(searchValue);

    if (searchInput !== "") {
      const filteredData = data.filter((element) => {
        return Object.values(element)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };
  return (
    <div>
    <div className="cardContainer">
      <input type="text" placeholder="Busca las últimas noticias" onChange={(e) => searchItems(e.target.value)} />
     
      {searchInput.length > 1
        ? filteredResults.map((element, index) => (
            <Link key={index} to={`/noticias/${element.topic}/${element.id}`}>
              <figure className="card" id={element.title} key={index}>
                <h5>{element.topic}</h5>
                <img src={element.img} alt={element.title}/>
                <h1>{element.title}</h1>
                <h3>{element.author}</h3>
                <p>Esse elit do aute consequat tempor nostrud reprehenderit eiusmod
            pariatur dolore fugiat duis. Pariatur sunt qui adipisicing quis
            culpa sint deserunt quis enim dolore. Eiusmod reprehenderit officia
            aliqua nostrud nulla tempor aute Lorem adipisicing enim magna nisi
            nulla amet. Sit mollit sit ut quis id nulla excepteur minim.
            Excepteur consequat reprehenderit duis excepteur. </p>
              </figure>
            </Link>
          ))
        : data.map((element, index) => (
            <Link key={index} to={`/noticias/${element.topic}/${element.id}`}>
              <figure className={"card"} id={element.topic} key={index}>
                <h5>{element.topic}</h5>
                <img src={element.img}/>
            
                <h1>{element.title}</h1>
                <h3>{element.author}</h3>
                <p>Esse elit do aute consequat tempor nostrud reprehenderit eiusmod
            pariatur dolore fugiat duis. Pariatur sunt qui adipisicing quis
            culpa sint deserunt quis enim dolore. Eiusmod reprehenderit officia
            aliqua nostrud nulla tempor aute Lorem adipisicing enim magna nisi
            nulla amet. Sit mollit sit ut quis id nulla excepteur minim.
            Excepteur consequat reprehenderit duis excepteur. Enim laboris
            nostrud occaecat fugiat aute consequat. Commodo qui sint quis
            commodo reprehenderit enim tempor ipsum occaecat proident eu sint eu
            elit.</p>
              </figure>
            </Link>
          ))}
    </div>
    </div>
  );
};

export default Cards;
