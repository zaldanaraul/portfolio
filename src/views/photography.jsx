import React, { useState } from "react";
import PhotoCard from "../components/photoCard";
import PhotoDisplay from "../components/photoDisplay";
import { useTransition, animated } from "react-spring";

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

  // state to display photos individually
  // this will contain the elemet that displays a photo individually over a dark background
  let photoDisplay;
  const [photo, setPhoto] = useState(null);
  const [showPhoto, setShowPhoto] = useState(false);

  {
    /* if (showPhoto) {
    photoDisplay = (
      <PhotoDisplay photo={photo} closeDisplay={() => setShowPhoto(false)} />
    );
  }*/
  }

  const MaskTransitions = useTransition(showPhoto, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="container">
      {MaskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              onClick={props.closeDisplay}
              style={{ zIndex: 100 }}
              onClick={() => setShowPhoto(false)}
            >
              <PhotoDisplay
                photo={photo}
                closeDisplay={() => console.log("hello")}
              />
            </animated.div>
          )
      )}
      <div className="row">
        {photos.map((photo) => (
          <div className="col-md-3 col-sm-4 col-6 p-0 pr-3 pb-3" key={photo}>
            <PhotoCard
              photo={photo}
              onClick={() => {
                setShowPhoto(true);
                setPhoto(photo);
                console.log("hello");
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
