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
      <h1>Projects</h1>
      <p>This page is still under construction but you can look at some of my projects on my <a href="https://github.com/zaldanaraul?tab=repositories" target="_blank">Github page</a></p>
      <p>Images and text below are just for illustration purposes</p>
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.id} />;
      })}
    </React.Fragment>
  );
};

export default Projects;
