
import "./Read.css";

const Read = ({ data }) => {
  return (
    <div className="booksDiv">
      <h2 className="titleText">{data.read.title.toUpperCase()}</h2>
      <div className="imgContainer">
        <img className="bookImage" src={data.read.bookImage} />
      </div>
      <h3 className="authorText">
        Author: {data.read.authorName} {data.read.authorSurname}{" "}
      </h3>
      <h3 className="birthText">Birth: {data.read.authorBirthDate}</h3>
      <h3 className="genreText">Genre: {data.read.genre} </h3>
      <h3 className="dateText">Year: {data.read.dateOfPublication}</h3>

      {data.read.otherBooks.map((element, index) => (
        <a className="linksInfo" href={element.info} key={index}>
          {element.text}
        </a>
      ))}
    </div>
  );
};

export default Read;
