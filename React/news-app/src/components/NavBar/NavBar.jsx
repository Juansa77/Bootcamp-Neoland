import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import { useContext } from "react";

const NavBar = () => {
  //Hacemos destructuring para sacar las funciones logOut y user del UserContext
  const { logOut, user } = useContext(UserContext);

  return (
    <>
      {/* Si hay usuario, nos pinta navBar*/}
      {user && (
    
        <div className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/noticias">Noticias</NavLink>
            </li>
            <li>
              <NavLink to="/noticias/deportes">Deportes</NavLink>
            </li>
            <li>
              <NavLink to="/noticias/economia">Economia</NavLink>
            </li>
            <li>
              <NavLink to="/noticias/tecnologia">Tecnologia</NavLink>
            </li>
            <li className="userName">{`Hola, ${user}`}</li>

            {/* Hacemos el navlink hasta el home. Al hacer click también nos activa el lOGOUT, que nos elimina el user, así que como no hay user, no pinta la barra */}
            <li>
              <NavLink to="/" onClick={() => logOut()}>
                Log out
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
