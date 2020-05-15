import React, { useState } from "react";

const PhotoDisplay = (props) => {
  let photo = props.photo;
  let url = `https://zaldanaraul.s3.ca-central-1.amazonaws.com/photos/${photo}.jpg`;
  let style = { opacity: 0 };
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    style = { opacity: 1 };
  }

  return (
    <div>
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
