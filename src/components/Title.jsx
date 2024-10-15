import React from "react";
import "../styles/Title.scss";

// Le composant Title prend maintenant en prop la langue et les traductions
export function Title({ language }) {
  return (
    <h1>
      {language === "fr"
        ? "Transformons vos idées en réalité digitale – Bienvenue sur mon portfolio !"
        : "Let's turn your ideas into digital reality – Welcome to my portfolio."}
    </h1>
  );
}
