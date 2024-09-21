import React from "react";
import "../styles/Title.scss";

// Le composant Title prend maintenant en prop la langue et les traductions
export function Title({ language }) {
  return (
    <h1>
      {language === "fr"
        ? "À la recherche d'un développeur web ?"
        : "Looking for a web developer?"}
    </h1>
  );
}
