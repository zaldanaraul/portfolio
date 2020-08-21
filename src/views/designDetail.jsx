import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useLocation } from "react-router-dom";

import "../aboutMe.css";
import "../css/designDetail.css";
import { isCompositeComponent } from "react-dom/test-utils";

/* let newvar = `<div className="row">
<div className="col-12 top-banner">
  <img
    src="https://zaldanaraul.s3.ca-central-1.amazonaws.com/sphere-banner.jpg"
    class="top-banner-photo profile-photo"
  />
</div>
</div>`; */

const DesignDetail = (props) => {
  const [content, setContent] = useState();

  let { id } = useParams();

  // NOTE: Instead of retrieving the appropriate url every time this page loads,
  // I could have just passed the URL from the GenerativeDesign view since
  // I load all the designs and their URLs in that page.
  // However, that would mean that I would ALWAYS have to load that page before this one
  // and any links to this page just wouldn't work since they wouldn't have the appropriate URL
  useEffect(() => {
    // get the url where content html is stored
    const getContentUrl = async () => {
      try {
        var response = await Axios.get(
          `https://0ctuwq7814.execute-api.ca-central-1.amazonaws.com/dev/design/${id}`
        );
        return response.data;
      } catch (error) {
        console.error(error);
        return "error";
      }
    };

    // get the actual html from the retrieved choice
    const getContent = async () => {
      try {
        var url = await getContentUrl();

        if (!url) {
          setContent(
            "I'm still working on the write-up for this project. Please check back soon!"
          );
          return;
        }

        console.log(url);
        var response = await Axios.get(url);
        setContent(response.data.replace(/className/g, "class"));
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
