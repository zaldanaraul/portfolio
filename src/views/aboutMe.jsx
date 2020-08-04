import React, { Component } from "react";
import s3Logo from "../logos/aws-s3.svg";
import p5Logo from "../logos/p5js.svg";
import lambdaLogo from "../logos/aws-lambda.png";
import reactLogo from "../logos/React.webp";
import rdsLogo from "../logos/rds.webp";

import "../aboutMe.css";

const AboutMe = () => {
  return (
    <React.Fragment>
      <div className="container main h-100">
        <div className="row h-100">
          <div className="col-md-5 col-12">
            <img
              src="https://zaldanaraul.s3.ca-central-1.amazonaws.com/thumbnails/profile.jpg"
              className="img-fluid profile-photo shadow"
            />
          </div>
          <div className="col-md-5 col-12 text-justify">
            <div className="container">
              <div className="row">
                <div className="col-12 copy">
                  <p>
                    I'm a <mark>Web Developer</mark> and{" "}
                    <mark>AWS Certified Solutions Architect</mark> based in
                    Toronto, Canada.{" "}
                  </p>

                  <p>
                    My interests range from Cloud Technologies and Systems
                    Architecture, on the infrastructure side of things, to
                    Generative Design and Photography, on the interaction side.
                  </p>

                  <p>
                    Here are some of the technologies I've been using for recent
                    projects:
                  </p>
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <p>React.js</p>
                      </div>
                      <div className="col-6">
                        <p>P5.js</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <p>MySQL</p>
                      </div>
                      <div className="col-6">
                        <p>AWS Lambda</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <p>Amazon CloudFront</p>
                      </div>
                      <div className="col-6">
                        <p>Amazon S3</p>
                      </div>
                    </div>
                  </div>
                  {/* <ul>
                    <li>React.js</li>
                    <li>P5.js</li>
                    <li>Javascript (ES6+)</li>
                    
                    <li>MySQL</li>
                  </ul>*/}

                  {/* <img src={s3Logo} className="tech-logo img-fluid" />
                  <img src={p5Logo} className="tech-logo img-fluid" />
                  <img src={lambdaLogo} className="tech-logo img-fluid" />
                  <img src={reactLogo} className="tech-logo img-fluid" />
                  <img src={rdsLogo} className="tech-logo img-fluid" />*/}
                </div>
              </div>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
