import React from "react";
import "../styles/Layout.scss";

export function Header({ language, toggleLanguage }) {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand">David JOLY</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                {" "}
                {/* Lien vers About */}
                {language === "fr" ? "À propos" : "About"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                {" "}
                {/* Lien vers Skills */}
                {language === "fr" ? "Compétences" : "Skills"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                {" "}
                {/* Lien vers Projects */}
                {language === "fr" ? "Projets" : "Projects"}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                {" "}
                {/* Lien vers ContactForm */}
                {language === "fr" ? "Contact" : "Contact"}
              </a>
            </li>
          </ul>
          <a
            className="link mx-2 fa-2x"
            href="https://github.com/DavidJLY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="link mx-2 fa-2x"
            href="https://www.linkedin.com/in/david-joly-651a50200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <button onClick={toggleLanguage} className="btn btn-dark ms-3">
            {language === "fr" ? "Switch to English" : "Passer en Français"}
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer({ language }) {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <nav>
        <a
          className="link mx-2 fa-2x"
          href="https://github.com/DavidJLY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="link mx-2 fa-2x"
          href="https://www.linkedin.com/in/david-joly-651a50200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </nav>
      <p className="copyright">
        {language === "fr"
          ? " ©  Copyright 2025 | David Joly | Tous droits réservés"
          : " © Copyright 2025 | David Joly | All rights reserved"}
      </p>
    </footer>
  );
}
