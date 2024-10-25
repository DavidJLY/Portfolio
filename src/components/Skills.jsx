import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import "../styles/Skills.scss";

export function Skills({ language }) {
  return (
    <div className="skills container">
      <h2 className="text-center">
        {language === "fr" ? "Mes Technologies" : "My Technologies"}
      </h2>
      <div className="row justify-content-center">
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaHtml5 className="icon icone-html" />
          <span translate="no">HTML5</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaCss3Alt className="icon icone-css" />
          <span translate="no">CSS3</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaSass className="icon icone-sass" />
          <span translate="no">Sass</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaBootstrap className="icon icon-bootstrap" />
          <span translate="no">Bootstrap</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaJs className="icon icon-js" />
          <span>JavaScript</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaReact className="icon icon-react" />
          <span translate="no">React</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaNodeJs className="icon icon-node" />
          <span translate="no">Node.js</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <SiExpress className="icon icon-express" />
          <span translate="no">Express.js</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <SiMongodb className="icon icon-mongo" />
          <span translate="no">MongoDB</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaGitAlt className="icon icon-git" />
          <span translate="no">Git</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaGithub className="icon icon-github" />
          <span>GitHub</span>
        </div>
      </div>
    </div>
  );
}
