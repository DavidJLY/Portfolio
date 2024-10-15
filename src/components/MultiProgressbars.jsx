import React from "react";
import { ProgressBar } from "./ProgressBar";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"; // Import des icônes

export function MultiProgressBars({ language }) {
  return (
    <div>
      <ProgressBar
        percentage={25}
        technology="Javascript"
        language={language}
      />
    </div>
  );
}
