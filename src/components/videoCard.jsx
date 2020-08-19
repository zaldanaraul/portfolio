import React from "react";
import "../projects.css";

const VideoCard = (props) => {
  let url = props.video.url;

  return (
    <video
      onMouseOver={(e) => e.target.play()}
      onMouseOut={(e) => e.target.pause()}
      src={url}
      loop={true}
      className="img-fluid shadow"
    />
  );
};

export default VideoCard;
