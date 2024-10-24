import React from "react";
import "../styles/About.scss";
import portrait from "../images/portrait-n&b.jpg";

export function About() {
  return (
    <div className="content row col-9 mx-auto mt-5">
      <img
        src={portrait}
        alt="Portrait"
        className="col-12 col-md-3 mb-4 mb-md-0 img-fluid rounded-pill"
      />
      <p className="col-12 col-md-7">
        Bonjour, <br />
        Après 18 ans passés dans un tout autre domaine, j'ai choisi de me
        réinventer en tant que développeur web, renouant ainsi avec des études
        que j'ai laissé de côté à l'âge de 20 ans. Aujourd'hui, je mets toute ma
        motivation et mon expertise au service de projets web modernes,
        fonctionnels et esthétiques. Mon parcours atypique me permet d'apporter
        un regard neuf, combinant rigueur, créativité et une forte envie
        d'apprendre chaque jour. Vous trouverez ici une sélection de mes
        projets, réalisés avec des technologies telles que HTML, CSS,
        JavaScript, React, et bien d'autres. N'hésitez pas à explorer mon
        travail, et si vous souhaitez en savoir plus ou collaborer, je serais
        ravi d'en discuter !
      </p>
    </div>
  );
}
