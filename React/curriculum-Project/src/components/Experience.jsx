import "./Experience.css"

const Experience=({experience})=>{



    return(

<div className="experience">
<div className="experienceCard">
<h3>Experience</h3>
{experience.map((element)=> { return(

<div key={JSON.stringify(element)}>
<h4 className="name">📕{element.name}</h4>
<p>{element.where}</p>
<p>{element.date}</p>
<p>{element.description}</p>


</div>



) })}


</div>

</div>

    )
}

export default Experience