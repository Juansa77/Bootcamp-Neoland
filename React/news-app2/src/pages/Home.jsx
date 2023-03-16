import React from 'react'
import { UserContext } from '../contexts/userContext';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import "./Home.css"


const Home = () => {
  //Sacamos (destructuring) login y user de UserContext, que lo hemos importado arriba
  const { login} = useContext(UserContext);

  //useNavigate nos proporciona un link rápido a los elementos definidos en Routes
  const navigate = useNavigate();
  const textInput = useRef(null)

  //Cada vez que hay cambio en user, activa useNavigate

  return (
    <div className="loginContainer">
    {!localStorage.getItem("user") ? (<>
      <h3>Por favor, introduzca su nombre de usuario</h3>
      <input type="text" ref={textInput} placeholder="Nombre de usuario" />
     { /*Al pulsar en el botón, llama a la funcuión user para que meta en localStorage el valor del input*/}
      <button onClick={()=> login(textInput.current.value)}>Ingresar</button> </>):<><Navigate replace to="/noticias"/></>
    }
    </div>
  );
};
export default Home