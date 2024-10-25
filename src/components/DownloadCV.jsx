import React from "react";
import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa"; // Optionnel, pour ajouter une icône de téléchargement

export const DownloadCV = ({ language }) => {
  const handleDownload = () => {
    window.open("/cv.pdf", "_blank"); // Ouvre le fichier dans un nouvel onglet
  };

  return (
    <div className="download-cv">
      <Button onClick={handleDownload} variant="primary">
        <FaDownload className="me-2" />{" "}
        {language === "fr" ? "Télécharger mon CV" : "Download CV"}
      </Button>
    </div>
  );
};
