import React from "react";

import "./Image.css"

const Image =(props) =>{

    return <img className="image" src={props.src} alt={props.alt}  width={props.width} height={props.height}/>;






};

export default Image