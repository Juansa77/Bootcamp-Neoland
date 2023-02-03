import "./Education.css"

const Education=({education})=>{



    return(

<div className="education">
<div className="educationCard">
<h3>Education</h3>
{education.map((element)=> { return(

<div key={JSON.stringify(element)}>
<p className="name">📕{element.name}</p>
<p>{element.where}</p>
<p>{element.date}</p>


</div>



) })}


</div>

</div>

    )
}

export default Education