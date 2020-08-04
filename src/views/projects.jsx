import React, { Component } from "react";
import ProjectCard from "../components/projectCard";
import "../projects.css";

const Projects = () => {
  let projects = [
    { id: 1, name: "S3 Photo Gallery" },
    { id: 2, name: "Architect site" },
    { id: 3, name: "Bookshop" },
    { id: 4, name: "Design Workshop" },
    { id: 5, name: "Zaha Hadid" },
    { id: 6, name: "Interior Design" },
  ];
  return (
    <React.Fragment>
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.id} />;
      })}
    </React.Fragment>
  );
};

export default Projects;
