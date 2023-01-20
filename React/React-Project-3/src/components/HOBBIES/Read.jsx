import { HOBBIES } from "./hobbies";
import "./Read.css";

const Read = (props) => {
  const data = props.data;

  var values = Object.values(data.read);

  return (
    <div className="booksDiv">
      <h2 className="titleText">{values[0].toUpperCase()}</h2>
      <div className="imgContainer">
        <img className="bookImage" src={values[6]} />
      </div>
      <h3 className="authorText">
        Author: {values[1]} {values[2]}{" "}
      </h3>
      <h3 className="birthText">Birth: {values[5]}</h3>
      <h3 className="genreText">Genre: {values[3]} </h3>
      <h3 className="dateText">Year: {values[4]}</h3>

      {values[7].map((element) => (
        <a className="linksInfo" href={element.info}>
          {element.text}
        </a>
      ))}
    </div>
  );
};

export default Read;
