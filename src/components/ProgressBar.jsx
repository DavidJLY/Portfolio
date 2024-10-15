import React from "react";

export function ProgressBar({ percentage, technology }) {
  return (
    <div className="mt-3">
      <h4>{technology}</h4>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export function SkillsBars({ language }) {
  return (
    <div>
      <ProgressBar percentage={80} technology="HTML" language={language} />
      <ProgressBar percentage={70} technology="CSS" language={language} />
    </div>
  );
}
