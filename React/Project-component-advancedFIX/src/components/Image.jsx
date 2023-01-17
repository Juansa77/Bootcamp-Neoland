import React from "react";
import "./Main.css"
import "./Image.css"

const Image =({img, text}) =>{

    return <img className="image" src={img} alt={text} key={text}/>






}

export default Image