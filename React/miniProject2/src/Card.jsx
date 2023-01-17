import React from "react";
import "./Card.css"


export const Card =(props) =>{

    const {character} = props;


    return(

<div >
<img src={character.image}/>
<h2>id:{character.id}</h2>
<h3>Name:{character.name}</h3>
<p>Status:{character.status}</p>



</div>

    )


}

export default Card