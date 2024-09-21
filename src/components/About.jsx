import React from "react";
import { motion } from "framer-motion";
import "../styles/About.scss";
import portrait from "../images/portrait.jpg";

export function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="content">
        <motion.img
          className="portrait"
          src={portrait}
          alt="portrait"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Bonjour, <br />
          je suis David Joly, développeur web. Passionné par les technologies
          modernes et en constante évolution, je suis un développeur web dévoué
          et enthousiaste. Chaque ligne de code représente pour moi une
          opportunité de résoudre des problèmes complexes et d'apporter des
          solutions innovantes. Bien que je sois encore au début de mon
          parcours, ma curiosité et ma soif d'apprendre m'ont déjà permis de
          découvrir de nombreux aspects fascinants de ce domaine. Mon objectif
          est de créer des expériences web élégantes, performantes et
          accessibles. Je suis particulièrement attiré par le développement
          frontend, où je peux donner vie à des interfaces utilisateurs
          intuitives, tout en veillant à une interaction fluide et réactive. À
          travers chaque projet, je cherche à allier créativité et rigueur
          technique pour concevoir des sites et applications de qualité. Je suis
          toujours prêt à relever de nouveaux défis et à élargir mes compétences
          pour rester à la pointe des technologies web. N'hésite pas à explorer
          et à me contacter pour toute collaboration ou opportunité.
        </motion.p>
      </div>
    </motion.div>
  );
}
