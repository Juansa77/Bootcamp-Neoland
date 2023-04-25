import React, { createRef } from "react";
import "./Card.css";
import { useRef } from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Card = ({ data, topic }) => {
  const filtered = data.filter((element) => element.topic == topic);
  const [searchInput, setSearchinput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  //SearchValue es el valor del input. Si el valor del Input no está vacio, hace un filter y crea un array con los valores que coincidan. Si está vacio, ese array será igual que data
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
    }
    else{setFilteredResults(data)}
  };
  //Creamos un array para generar las ref de cada figure
  const figureRefList = useRef(new Array());
  figureRefList.current = data.map(
    (_, index) => figureRefList.current[index] ?? createRef()
  );

  return (
    <div className="cardContainer">
      <input type="text" onChange={(e) => searchItems(e.target.value)} />
      {topic
        ? filtered.map((element, index) => (
          <Link key={index} to={`/noticias/${element.topic}/${element.id}`}>
            <figure
              className="card"
              id={element.title}
              ref={figureRefList.current[index]}
              key={index}
            >
              <h5>{element.topic}</h5>
              <h1>{element.title}</h1>
              <h3>{element.author}</h3>
            </figure>
            </Link>
          ))
        : searchInput.length >1 ? filteredResults.map((element, index) => (
          <Link key={index} to={`/noticias/${element.topic}/${element.id}`}>
            <figure
              className="card"
              id={element.title}
              key={index}
              ref={figureRefList.current[index]}
            >
              <h5>{element.topic}</h5>
              <h1>{element.title}</h1>
              <h3>{element.author}</h3>
            </figure>
            </Link>
          ) ):
        data.map((element, index) => (
          <Link key={index} to={`/noticias/${element.topic}/${element.id}`}>
          
            <figure
              className={"card"}
              id={element.topic}
              key={index}
              ref={figureRefList.current[index]}
            >
              <h5>{element.topic}</h5>
              <h1>{element.title}</h1>
              <h3>{element.author}</h3>
            </figure>
            </Link>
          ))}
    </div>
  );
};

export default Card;
