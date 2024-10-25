import React from "react";
import "../styles/About.scss";
import portrait from "../images/portrait-n&b.jpg";

export function About({ language }) {
  return (
    <div className="content row col-9 mx-auto mt-5">
      <img
        src={portrait}
        alt="Portrait"
        className="col-12 col-md-3 mb-4 mb-md-0 img-fluid rounded-pill"
      />
      <p className="col-12 col-md-7 mx-auto">
        {language === "fr"
          ? `
        Après 18 ans passés dans un tout autre domaine dont 9 ans comme chef d'entreprise, j'ai choisi de me
        réinventer en tant que développeur web, renouant ainsi avec des études
        que j'ai laissé de côté à l'âge de 20 ans. Aujourd'hui, je mets toute ma
        motivation et mon expertise au service de projets web modernes,
        fonctionnels et esthétiques. Mon parcours atypique me permet d'apporter
        un regard neuf, combinant rigueur, créativité et une forte envie
        d'apprendre chaque jour. Vous trouverez ici une sélection de mes
        projets, réalisés avec des technologies telles que HTML, CSS,
        JavaScript, React, et bien d'autres. N'hésitez pas à explorer mon
        travail, et si vous souhaitez en savoir plus ou collaborer, je serais
        ravi d'en discuter !`
          : `After spending 18 years in a completely different field, including 9 years as a business owner, I chose to reinvent myself as a web developer, reconnecting with studies I set aside at the age of 20. Today, I bring all my motivation and expertise to modern, functional, and aesthetically pleasing web projects. My unconventional background allows me to offer a fresh perspective, combining rigor, creativity, and a strong desire to learn every day. Here, you will find a selection of my projects, built with technologies such as HTML, CSS, JavaScript, React, and more. Feel free to explore my work, and if you'd like to learn more or collaborate, I'd be delighted to discuss it with you!`}
      </p>
    </div>
  );
}
