import React from 'react'
import { useState } from 'react';

const SearchBar = () => {

    const [searchInput, setSearchinput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

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
  )
}

export default SearchBar