import React from "react";
import { useOutletContext } from "react-router-dom";
import Cards from "../components/Cards";

const Manga = () => {
  const [requestManga, user] = useOutletContext();

  return <div className="gallery">

    <Cards data={requestManga}/>
  </div>;
};

export default Manga;
