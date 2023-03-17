import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3>Juansa García</h3>
      <ul className="footerList">
        <li>
          <a>Contacto</a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/juan-salvador-garcia-b6183a232/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a 
          target="_blank"
          href="https://github.com/Juansa77">GitHub</a>
        </li>
        <li>
          <a 
          target="_blank"
          href="https://twitter.com/JuanSalvadorGa7">Twitter</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
