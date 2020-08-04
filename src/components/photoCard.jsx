import React, { Component } from "react";
import "../projects.css";

const PhotoCard = (props) => {
  let photo = props.photo;
  let url = photo.thumbnailUrl;

  return (
    <img
      className="img-fluid hover-invert shadow"
      src={url}
      onClick={props.onClick}
    />
  );
};

export default PhotoCard;
