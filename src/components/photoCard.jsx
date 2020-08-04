import React, { Component } from "react";

const PhotoCard = (props) => {
  let photo = props.photo;
  let url = photo.thumbnailUrl;

  return (
    <img className="img-fluid hover-invert" src={url} onClick={props.onClick} />
  );
};

export default PhotoCard;
