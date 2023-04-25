import "./Home.css";

import { useEffect, useRef } from "react";

import { userAuth } from "../Contexts/UserContext";

const Home = () => {
  const textInput = useRef(null);
  const { login, user } = userAuth();
  useEffect(() => {
    
    
  }, [user])
  
  
  return (
    <div className="containerLogin">
      {!localStorage.getItem("user") && (
        <>
          <h2>Por favor introduzca su nombre para poder ver el contenido de la página</h2>
          <input type="text" ref={textInput} />
          <button className="loginButton" onClick={() => login(textInput.current.value)}>
            {" "}
            Registrar
          </button>
        </>
      ) }
    </div>
  );
};

export default Home;
