import React, { useState } from "react";
import VideoCard from "../components/videoCard";

const GenerativeDesign = () => {
  const [videos, setVideos] = useState([
    {
      url:
        "https://zaldanaraul.s3.ca-central-1.amazonaws.com/final_5f3d525472fd8200151f788d_690551.mp4",
    },
    {
      url:
        "https://zaldanaraul.s3.ca-central-1.amazonaws.com/final_5f3d6f1fc8a9110015a7f193_206578.mp4",
    },
    {
      url:
        "https://zaldanaraul.s3.ca-central-1.amazonaws.com/final_5f3d77875759d200159d425f_164183.mp4",
    },
    {
      url:
        "https://zaldanaraul.s3.ca-central-1.amazonaws.com/final_5f3d7962df7ba0001595d60f_230711.mp4",
    },
  ]);

  /*
      <h1>This is the Generative Design page</h1>
      <p>
        This page is still under construction but you can look at some of my
        generative art on my{" "}
        <a href="https://www.instagram.com/ralzal/" target="_blank">
          Instagram page
        </a>
      </p>
      */

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {videos.map((video) => {
            return (
              <div
                className="col-md-3 col-sm-4 col-6 p-0 pr-3 pb-3"
                key={video.url}
              >
                <VideoCard video={video}></VideoCard>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GenerativeDesign;
