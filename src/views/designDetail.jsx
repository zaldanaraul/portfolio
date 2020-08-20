import React, { useState, useEffect } from "react";
import Axios from "axios";

import "../aboutMe.css";
import "../css/designDetail.css";

/* let newvar = `<div className="row">
<div className="col-12 top-banner">
  <img
    src="https://zaldanaraul.s3.ca-central-1.amazonaws.com/sphere-banner.jpg"
    class="top-banner-photo profile-photo"
  />
</div>
</div>`; */

const DesignDetail = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    const getContent = async () => {
      try {
        var response = await Axios.get(
          "https://zaldanaraul.s3.ca-central-1.amazonaws.com/code_inside2.html"
        );
        setContent(response.data.replace(/className/g, "class"));
        console.log(content);
      } catch (error) {
        console.error(error);
      }
    };
    getContent();
  });

  return (
    <React.Fragment>
      <div
        className="container"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      >
        {/*<div className="row text-center">
          <div className="col-12">
            <h1 className="pt-3 pb-3">sphere</h1>
            <p>A visual exploration made with Blender shader nodes</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-12 p-2">
            <img
              src="https://zaldanaraul.s3.ca-central-1.amazonaws.com/sphere-banner-2.jpg"
              className="img-fluid shadow"
            ></img>
          </div>
          <div className="col-md-6 col-12 p-2">
            <img
              src="https://zaldanaraul.s3.ca-central-1.amazonaws.com/sphere-banner-3.jpg"
              className="img-fluid shadow"
            ></img>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-12 p-2">
            <img
              src="https://zaldanaraul.s3.ca-central-1.amazonaws.com/sphere-banner-4.jpg"
              className="img-fluid shadow"
            ></img>
          </div>
          <div className="col-md-6 col-12 p-2">
            <img
              src="https://zaldanaraul.s3.ca-central-1.amazonaws.com/sphere-banner.jpg"
              className="img-fluid shadow"
            ></img>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-justify">
            <div className="container">
              <div className="row align-items-center justify-content-start">
                <div className="col-md-12 copy text-justify-center">
                  <iframe
                    src="https://player.vimeo.com/video/449448761"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    className="myIframe shadow"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default DesignDetail;
