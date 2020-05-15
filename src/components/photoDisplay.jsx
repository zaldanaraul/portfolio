import React, { Component } from "react";

const PhotoDisplay = (props) => {
  let photo = props.photo;
  let url = `https://zaldanaraul.s3.ca-central-1.amazonaws.com/photos/${photo}.jpg`;

  return (
    <div>
      <div
        className="mobile-menu-mask position-fixed"
        onClick={props.closeDisplay}
      ></div>
      <img className="full-image" src={url}></img>
    </div>
  );
};

export default PhotoDisplay;
