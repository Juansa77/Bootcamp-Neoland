import React from "react";

const Movies = React.memo(({ title, poster }) => {
    console.log("Renderizando Movie...");
  
    return (
      <div>
        <h3>{title}</h3>
        <img src={poster} alt={title} width={200} />
      </div>
    );
  });

export default Movies;
