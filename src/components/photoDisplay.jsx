import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PhotoDisplay = (props) => {
  let photo = props.photo;
  let url = photo.fullSizeUrl;
  let style = { opacity: 0 };
  let loaderStyle = { opacity: 1 };

  // a state variable that says whether the image has finished loaded
  const [loaded, setLoaded] = useState(false);

  // if the image has finished loaded, change it's opacity from 0
  // to 1 so that it displays and the loader variable will be set to null
  // the full-image class has a transition to animate the change
  // in opacity
  if (loaded) {
    style = { opacity: 1 };
    loaderStyle = { opacity: 0 };
  }

  // the image will set the loaded variable to true once
  // it is done loading (through the onLoad prop)
  return (
    <div>
      <div className="loader-wrapper">
        <div className="loader loader-photoDisplay" style={loaderStyle}></div>
      </div>

      <FontAwesomeIcon
        icon={faTimes}
        onClick={props.closeDisplay}
        className="closeButton"
        style={style}
      />

      <img
        className="full-image"
        src={url}
        onLoad={() => setLoaded(true)}
        style={style}
      ></img>
    </div>
  );
};

export default PhotoDisplay;
