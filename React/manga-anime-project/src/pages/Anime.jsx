import "./Anime.css";

import React from "react";
import { useOutletContext } from "react-router-dom";

import Card from "../components/Card";
import Cards from "../components/Cards";

const Anime = () => {
  const [requestManga, user] = useOutletContext();

  return (
    <div className="gallery">
      {/* POR LA PAGINA ANIME ---Gestionar el control del error de la recarga de la pagina 
      por el componente card -----------------------------------------*/}

      {/* {requestAnime.data?.anime.map((animeSingle) => (
                <Card key={animeSingle._id} data={animeSingle} />
              ))} */}

      {/* POR EL COMPONENTE --Gestionar el control del error de la recarga de la pagina por el componente cards */}
      <Cards data={requestManga} />

    </div>
  );
};

export default Anime;
