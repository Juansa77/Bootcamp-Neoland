import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formData, setFormData] = useState({ username: "", email: "" });

  const { username, email } = formData;
  const onInputChange = ({target}) => {
    const {name, value}= target

    setFormData({...formData, [name]:value})

  };


  useEffect(()=>{
console.log(formData)
  },[formData])
  return (
    <>
      <h1>SIMPLE FORM</h1>
      <hr />
      <input
        type="text"
        value={username}
        name="username"
        id="username"
        onChange={onInputChange}
      />
      <input type="email" id="email" value= {email} onChange={onInputChange} />{" "}
      {username == "Juansa" && <Message/>}
    </>
  );
};

export default SimpleForm;
