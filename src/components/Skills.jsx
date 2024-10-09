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
          <FaHtml5 className="icon" />
          <span>HTML5</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaCss3Alt className="icon" />
          <span>CSS3</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaSass className="icon" />
          <span>Sass</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaBootstrap className="icon" />
          <span>Bootstrap</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaJs className="icon" />
          <span>JavaScript</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaReact className="icon" />
          <span>React</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaNodeJs className="icon" />
          <span>Node.js</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <SiExpress className="icon" />
          <span>Express.js</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <SiMongodb className="icon" />
          <span>MongoDB</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaGitAlt className="icon" />
          <span>Git</span>
        </div>
        <div className="skill-card col-6 col-md-4 col-lg-3 mb-4 mx-1">
          <FaGithub className="icon" />
          <span>GitHub</span>
        </div>
      </div>
    </div>
  );
}
