import React from "react";
import "../styles/Layout.scss";
import logo from "../images/logo_transparent.png";

export function Header({ language }) {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <a
          className="link"
          href="https://github.com/DavidJLY"
          target="_blank"
          rel="noopener noreferrer"
        >
          {language === "fr" ? "Mon GitHub" : "My GitHub"}
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/david-joly-651a50200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {language === "fr" ? "Mon LinkedIn" : "My LinkedIn"}
        </a>
      </nav>
    </header>
  );
}

export function Footer({ language }) {
  return (
    <footer>
      <nav>
        <a
          className="link"
          href="https://github.com/DavidJLY"
          target="_blank"
          rel="noopener noreferrer"
        >
          {language === "fr" ? "Mon GitHub" : "My GitHub"}
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/david-joly-651a50200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {language === "fr" ? "Mon LinkedIn" : "My LinkedIn"}
        </a>
      </nav>
      <p className="copyright">
        {language === "fr"
          ? "Copyright 2024 | David Joly | Tous droits réservés"
          : "Copyright 2024 | David Joly | All rights reserved"}
      </p>
    </footer>
  );
}
