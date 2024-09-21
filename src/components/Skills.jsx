import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
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
    <div className="skills">
      <h2>{language === "fr" ? "Mes Technologies" : "My Technologies"}</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <FaHtml5 className="icon" />
          <span>HTML5</span>
        </div>
        <div className="skill-card">
          <FaCss3Alt className="icon" />
          <span>CSS3</span>
        </div>
        <div className="skill-card">
          <FaSass className="icon" />
          <span>Sass</span>
        </div>
        <div className="skill-card">
          <FaJs className="icon" />
          <span>JavaScript</span>
        </div>
        <div className="skill-card">
          <FaReact className="icon" />
          <span>React</span>
        </div>
        <div className="skill-card">
          <FaNodeJs className="icon" />
          <span>Node.js</span>
        </div>
        <div className="skill-card">
          <SiExpress className="icon" />
          <span>Express.js</span>
        </div>
        <div className="skill-card">
          <SiMongodb className="icon" />
          <span>MongoDB</span>
        </div>
        <div className="skill-card">
          <FaGitAlt className="icon" />
          <span>Git</span>
        </div>
        <div className="skill-card">
          <FaGithub className="icon" />
          <span>GitHub</span>
        </div>
      </div>
    </div>
  );
}
