import React, { useState } from "react"; // Ajout de useState pour gérer la langue
import { motion } from "framer-motion";
import "../src/styles/portfolio.scss";
import ParticlesBackground from "./components/ParticlesBackground";
import { Header } from "./components/Layout";
import { Footer } from "./components/Layout";
import { Title } from "./components/Title";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { ContactForm } from "./components/ContactForm";

// Pas besoin de "translations" ici, le composant Title gère ça
// import translations from "./translations";

function Portfolio() {
  const [language, setLanguage] = useState("fr"); // Le français est la langue par défaut

  // Fonction pour basculer la langue
  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  // Variants pour définir les animations
  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: delay } },
  });

  return (
    <div className="App">
      <ParticlesBackground />

      {/* Ajout du bouton pour permuter la langue */}
      <button onClick={toggleLanguage} className="language-toggle">
        {language === "fr" ? "Switch to English" : "Passer en Français"}
      </button>

      <div className="content">
        <Header language={language} />

        {/* Application des animations avec des délais différents pour chaque section */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp(0)}>
          <Title language={language} /> {/* Passe la langue directement */}
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp(0.3)}>
          <About language={language} />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp(0.6)}>
          <Skills language={language} />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp(0.9)}>
          <Projects language={language} />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp(1.2)}>
          <ContactForm language={language} />
        </motion.div>

        <Footer language={language} />
      </div>
    </div>
  );
}

export default Portfolio;
