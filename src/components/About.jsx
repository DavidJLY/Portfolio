import React from "react";
import "../styles/About.scss";
import portrait from "../images/portrait.jpg";

export function About() {
  return (
    <div className="content row">
      <img
        src={portrait}
        alt="Portrait"
        className="col-3 img-fluid rounded-pill"
      />
      <p className="col-9">
        Bonjour, <br />
        je suis David Joly, développeur web. Passionné par les technologies
        modernes et en constante évolution, je suis un développeur web dévoué et
        enthousiaste. Chaque ligne de code représente pour moi une opportunité
        de résoudre des problèmes complexes et d'apporter des solutions
        innovantes.
      </p>
    </div>
  );
}
