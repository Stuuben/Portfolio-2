import { useState } from "react";
import "../scss/Projects.scss";
import { projectsData } from "../constants/projects";
import { ProjectItem } from "../components/ProjectItem";

export const Projects = () => {
  return (
    <div className="projects-wrapper">
      <h3 style={{ textAlign: "center", paddingBottom: "1rem" }}>Projects</h3>
      <div className="projects-inner">
        {projectsData.map((project, index) => (
          <ProjectItem isVisible key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
