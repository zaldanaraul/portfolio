import React, { Component } from "react";

const PhotoCard = (props) => {
  let photo = props.photo;
  let url = `https://zaldanaraul.s3.ca-central-1.amazonaws.com/thumbnails/${photo}.jpg`;

  return (
    <img className="img-fluid hover-invert" src={url} onClick={props.onClick} />
  );
};

export default PhotoCard;
