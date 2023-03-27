import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

import Hamburger from "./Hamburger";

import { useState } from "react";



const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toogleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  //Hacemos destructuring para sacar las funciones logOut y user del UserContext
  const { logOut, user } = useContext(UserContext);

  return (
    <>
      {/* Si hay usuario, nos pinta navBar*/}
      {user && (
        <div className="navigation">
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
                Salir
              </NavLink>
            </li>
          </ul>
          <div className="hamburger" onClick={toogleHamburger}>
            <Hamburger isOpen={hamburgerOpen} />
          </div>
          <style jsx>{`
            .navigation {
              width: 100%;
              height: 4vh;
              margin-bottom: 3vh;
            }

            .navigation ul {
              display: flex;
              justify-content: space-around;
              margin: 0 20px;
              padding: 0 25px;
              border-bottom: 1px solid grey;
            }
            .navigation ul li {
              list-style-type: none;
              width: 100%;
            }

            .navigation > ul > li > a {
              text-decoration: none;
            }


            @media (max-width: 767px) {

              .navigation{
             margin-right:${hamburgerOpen && "110%"};
            
              }
              
              .hamburger {
                display:flex;
                margin-left:3.2vw;
                position:${hamburgerOpen && "fixed"};
          

               padding-top: 10px;
              
               
                z-index: 6;
              }

              .navigation ul {
                display: ${hamburgerOpen ? "flex" : "none"};
                flex-direction:column;
                margin-top:1vh;
            
                background-color: white;
                color: black;
                height: 70vh;
                width: 50vw;
        
          
                position: fixed;
                margin-bottom:1vh;
              }

              .navigation > ul > li {
                margin-top: 30px;
                text-decoration: none;
                text-align:left;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default NavBar;
