import "./More.css";

const More = ({languages,habilities, volunteer}) => {
  return (
    <div className="more">

<div className="moreCard">
<div className="titleMore" id="lenguaguesDiv"><h3>Languages</h3></div>
      <div className="lenguagesCard">
    
        <p>Language: {languages.language}</p>
        <p>WrLevel: {languages.wrlevel}</p>
        <p>SLevel: {languages.splevel}</p>
      </div>
      <div className="titleMore" id="habilitiesDiv"><h3>Habilities</h3></div>
      <div className="habilitiesCard">
    
        {habilities.map((element) => {
          return (
            <div key={JSON.stringify(element)}>
              <p>{element}</p>
        
            </div>
          );
        })}
      </div>
      <div className="titleMore" id="volunteerDiv"><h3>Volunteer</h3></div>
      <div className="volunteerCard">

        {volunteer.map((element) => {
          return (
            <div key={JSON.stringify(element)}>
              <h4>{element.name}</h4>
              <p>{element.where}</p>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </div>

    </div>

  );
};

export default More;
