import React, { Component } from "react";

const PhotoCard = (props) => {
  let photo = props.photo;
  let url = `https://zaldanaraul.s3.ca-central-1.amazonaws.com/photos/${photo}.jpg`;
  return (
    <div className="image">
      <img src={url} />
    </div>
  );
};

export default PhotoCard;
