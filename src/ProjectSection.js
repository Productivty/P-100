import React from "react";
import data from "./Asset/data";
import VanillaJS from "./VanillaJS";

function ProjectSection() {
  const wallCards = data.map((place) => {
    return <VanillaJS key={place.id} place={place} />;
  });

  return (
    <div className="project-container" id="projects">
      <h3 className="section-title">Projects</h3>
      <div className="vanilla-js">{wallCards}</div>
    </div>
  );
}

export default ProjectSection;
