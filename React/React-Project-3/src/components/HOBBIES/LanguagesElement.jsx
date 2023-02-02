import "./LanguagesElement.css"

const LanguagesElement = ({ data }) => {







    return (
  <div className="languagesDiv">
      <h3>Language: {data.languages.language}</h3>
      <h3>WrLevel: {data.languages.wrlevel}</h3>
      <h3>SpLevel: {data.languages.splevel}</h3>
      </div>
    )
  };
  
  export default LanguagesElement;
  