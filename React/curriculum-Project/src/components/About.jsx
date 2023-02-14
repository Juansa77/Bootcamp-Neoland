import "./About.css";

const About = ({hero}) => {
  return (
    <div className="about">
      <div className="aboutTitle"> <h3>About me</h3></div>
      <div className="aboutCard">
 

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
