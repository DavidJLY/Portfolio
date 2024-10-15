import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import "../src/styles/portfolio.scss";
import ParticlesBackground from "./components/ParticlesBackground";
import { Header, Footer } from "./components/Layout";
import { Title } from "./components/Title";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { SkillsBars } from "./components/ProgressBar";
import { ContactForm } from "./components/ContactForm";
import { Projects } from "./components/Projects";

function Portfolio() {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: delay } },
  });

  return (
    <div className="App">
      <ParticlesBackground />

      <div className="content container-fluid">
        {" "}
        {/* Conteneur Bootstrap global */}
        <Header language={language} toggleLanguage={toggleLanguage} />
        <main className="container-fluid mt-5">
          {/* Conteneur Bootstrap pour le contenu principal */}
          <div className="row">
            <motion.div
              className="col-12"
              initial="hidden"
              animate="visible"
              variants={fadeInUp(0)}
            >
              <Title language={language} />
            </motion.div>
          </div>
          <div className="row mt-5">
            <motion.div
              id="about"
              className="col-12"
              initial="hidden"
              animate="visible"
              variants={fadeInUp(0.3)}
            >
              <About language={language} />
            </motion.div>
          </div>
          <div className="row">
            <div className="mt-5">
              <motion.div
                id="skills"
                className="col-12 mt-5"
                initial="hidden"
                animate="visible"
                variants={fadeInUp(0.6)}
              >
                <Skills language={language} />
              </motion.div>
            </div>
            <div className="mt-4 mx-auto w-50">
              <motion.div
                className="col-12"
                initial="hidden"
                animate="visible"
                variants={fadeInUp(0.6)}
              >
                <SkillsBars
                  percentage={25}
                  technology="Javascript"
                  language={language}
                />
              </motion.div>
            </div>
            <div className="row mt-5">
              <motion.div
                id="projects"
                className="col-12"
                initial="hidden"
                animate="visible"
                variants={fadeInUp(0.3)}
              >
                <Projects language={language} />
              </motion.div>
            </div>
          </div>
          <div className="row mt-5">
            <motion.div
              id="contact"
              className="col-12"
              initial="hidden"
              animate="visible"
              variants={fadeInUp(1.2)}
            >
              <ContactForm language={language} />
            </motion.div>
          </div>
        </main>
        <Footer language={language} />
      </div>
    </div>
  );
}

export default Portfolio;

{
  /*{
        const response = await axios.get(
          `https://api.airtable.com/v0/app48WhVLwVGIojej/tblmgFEHpLChDRzRD`,
          {
            headers: {
              Authorization: `Bearer patJf5zk4RePFLeGA.91e062b7a19c80ae79568610ea3320054f6de723b861d1fd7bcb891bc7a25234`,
            },*/
}
