import React, { Component } from "react";

const ProjectCard = (props) => {
  let url = `https://zaldanaraul.s3.ca-central-1.amazonaws.com/photos/projects-${props.project.id}.png`;
  let evenOrOdd = "even";

  if (props.project.id % 2) {
    evenOrOdd = "odd";
  }
  return (
    <div className={"project-card mb-4 " + evenOrOdd}>
      <img
        className="project-img hover-colorize shadow"
        src={url}
        onClick={props.onClick}
      />
      <div className="project-desc shadow">
        <h4>Photo Gallery</h4>
        <p>
          Simple photo gallery that retrieves and displays high-resolution
          images from Amazon S3.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
