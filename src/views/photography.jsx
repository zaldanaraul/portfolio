import React, { useState } from "react";
import PhotoCard from "../components/photoCard";
import PhotoDisplay from "../components/photoDisplay";

const Photography = () => {
  let photos = [
    1,
    2,
    3,
    4,
    5,
    6,
    11,
    8,
    9,
    3,
    1,
    2,
    1,
    2,
    3,
    4,
    5,
    10,
    11,
    8,
    9,
    3,
    1,
    2,
  ];

  let photoDisplay;
  const [photo, setPhoto] = useState(null);
  const [showPhoto, setShowPhoto] = useState(false);

  if (showPhoto) {
    photoDisplay = <PhotoDisplay photo={photo} />;
  }

  return (
    <div className="container">
      {photoDisplay}
      <div className="row">
        {photos.map((photo) => (
          <div className="col-md-3 col-sm-4 col-6 p-0 pr-3 pb-3" key={photo}>
            <PhotoCard
              photo={photo}
              onClick={() => {
                setShowPhoto(true);
                setPhoto(photo);
                console.log("photocard clicked");
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
