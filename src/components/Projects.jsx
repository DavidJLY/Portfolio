import React from "react";
import "../styles/Project.scss";
import siteAxfenbio from "../images/siteAxfenbio.png";
import siteSteamfroid from "../images/siteSteamfroid.png";

export function Projects({ language }) {
  return (
    <div className="projects">
      <h2>{language === "fr" ? "Mes projets réalisés" : "My projects"}</h2>
      <div className="projects-img">
        <section className="axfenbio">
          <h3>
            {language === "fr"
              ? "Site pour la société AxfenBio"
              : "Website for the company AxfenBio"}
          </h3>
          <img
            className="imprimecran"
            src={siteAxfenbio}
            alt="site de la société axfenbio"
          />
        </section>
        <section className="steamfroid">
          <h3>
            {language === "fr"
              ? "Site pour la société SteamFroid"
              : "Website for the company SteamFroid"}
          </h3>
          <img
            className="imprimecran"
            src={siteSteamfroid}
            alt="site de la société Steam Froid"
          />
        </section>
      </div>
    </div>
  );
}
