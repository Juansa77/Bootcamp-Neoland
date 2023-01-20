import "./Movies.css"

const Movies= (props) =>{

    const data= props.data.movies



    return(
<div className="moviesDiv">

{data.map((element)=>(
<div className="movieElement" id={element.name.replace(/ /g,"")}>
<div className="textDiv">
<h1 className="text">{element.name}</h1>
<h3 className="text">Type: {element.type}</h3>
<h3 className="text">Genre: {element.genre}</h3>
<h3 className="text">Vote: {element.vote}</h3>
</div>
</div>
))}

</div>
    )





}

export default Movies