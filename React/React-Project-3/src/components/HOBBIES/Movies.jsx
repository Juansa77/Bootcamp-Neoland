import "./Movies.css";

const Movies = ({data}) => {

  return (
    <div className="moviesDiv">
      {data.movies.map((element, index) => (
        <div className="movieElement" key={index} id={element.name.replace(/ /g, "")}>
          <div className="textDiv">
            <h1 className="text">{element.name}</h1>
            <h3 className="text">Type: {element.type}</h3>
            <h3 className="text">Genre: {element.genre}</h3>
            <h3 className="text">Vote: {element.vote}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
