import React from "react";

function VanillaJS(props) {
  return (
    <div className="projects">
      <div className="card">
        <a href={props.place.projectUrl} target="_blank">
          <img src={props.place.imageUrl} alt="" className="project-img" />
          <h1 className="project-title-one">{props.place.projectTitle}</h1>
        </a>
      </div>
    </div>
  );
}

export default VanillaJS;
