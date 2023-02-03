import "./About.css";

const About = ({hero}) => {
  return (
    <div className="about">
      <div className="aboutCard">
      <h3>About me</h3>

{hero.aboutMe.map((element) => {
  return (
    <div key={JSON.stringify(element)}>
     
      <p>{element.info}</p>
    </div>
  );
})}


      </div>

   
    </div>
  );
};

export default About;
