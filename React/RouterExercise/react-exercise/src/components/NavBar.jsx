import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useResize from "./hooks/useResize";
import Hamburger from "./pages/Hamburguer";

const NavBar = () => {
  const { width } = useResize();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toogleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <React.Fragment>
      <nav>
        <div className="navigation">
          <ul>
            <NavLink to="/home">
              <li>
                <button className="btn-nav">Home</button>
              </li>
            </NavLink>
            <NavLink to="/games">
              <li>
                <button className="btn-nav">Games</button>
              </li>
            </NavLink>
          </ul>
          <div onClick={toogleHamburger}>
            <Hamburger isOpen={hamburgerOpen} />
          </div>
        </div>
      </nav>
      <style jsx>{`
        .navigation {
          width: 100vw;
          height: 10vh;
          display: flex;
          background: black;
          justify-content: center;
        }
        .navigation ul {
          width: 10vw;
          height: 100%;
          display: flex;
          justify-content: space-around;
          color: beige;
          list-style-type: none;
        }

        .btn-nav {
          cursor: pointer;
          border: 1px solid white;
          background: black;
          min-width: 10vw;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          color: beige;
          min-height: 100%;
        }
.hamburger{
    float:right;
}
        .navigation ul {
          display: ${width <700 ? "inline" : "none"};
          text-align: left;
          padding: 5vh;
          background-color: black;

          color: white;
          z-index: 10;
          height: 100vh;
          width: 50vw;
          margin-top: 50px;
          position: fixed;
          color: black;
        }
      `}</style>
    </React.Fragment>
  );
};

export default NavBar;
