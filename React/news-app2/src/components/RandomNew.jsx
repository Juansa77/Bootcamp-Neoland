import React from "react";
import "./RandomNew.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const RandomNew = ({ data }) => {
  const [randomIndex, setRandomIndex] = useState(0);
  var newsLength = data.length;

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * (newsLength - 1) + 1));
  }, [newsLength]);

  return (
    <div className="randomNew">
      {randomIndex != 0 && (
        <Link
          to={`/noticias/${data[randomIndex].topic}/${data[randomIndex].id}`}
        >
          <figure className="cardRandom">
            <h5>{data[randomIndex].topic}</h5>
            <img src={data[randomIndex].img} />
            <h1>{data[randomIndex].title}</h1>
            <h3>{data[randomIndex].author}</h3>
            <p>
              Esse elit do aute consequat tempor nostrud reprehenderit eiusmod
              pariatur dolore fugiat duis. Pariatur sunt qui adipisicing quis
              culpa sint deserunt quis enim dolore. Eiusmod reprehenderit
              officia aliqua nostrud nulla tempor aute Lorem adipisicing enim
              magna nisi nulla amet. Sit mollit sit ut quis id nulla excepteur
              minim. Excepteur consequat reprehenderit duis excepteur.{" "}
            </p>
          </figure>{" "}
        </Link>
      )}
    </div>
  );
};

export default RandomNew;
