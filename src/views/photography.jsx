import React, { Component } from "react";
import PhotoCard from "../components/photoCard";

const Photography = () => {
  let photos = [1, 2, 3, 4, 5, 10, 11, 8, 9, 3, 1, 2];
  return (
    <div className="container">
      <div className="row">
        {photos.map((photo) => (
          <div className="col-md-3 col-4 p-0 pr-3 pb-3">
            <PhotoCard key={photo} photo={photo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
