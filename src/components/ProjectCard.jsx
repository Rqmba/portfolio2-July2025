import React from "react";

function ProjectCard({ dataProject }) {
  return (
    <>
      <div className="projectCard">
        <div>{dataProject.title}</div>
      </div>
    </>
  );
}

export default ProjectCard;
