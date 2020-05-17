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
      <div className="container main">
        <div className="row">
          <div className="col-md-5 col-12">
            <img
              src="https://zaldanaraul.s3.ca-central-1.amazonaws.com/photos/profile.jpg"
              className="img-fluid"
            />
          </div>
          <div className="col-md-7 col-12">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>Hi, I'm Raul</h1>
                  <p>
                    I'm a Web Developer and AWS Certified Solutions Architect
                    based in Toronto, Canada. My interests range from Cloud
                    Technologies and Systems Architecture, on the infrastructure
                    side of things, to Generative Design and Photography, on the
                    interaction side.
                  </p>

                  <p>
                    Here are some of the technologies I've been using recently:
                  </p>
                  {/* <ul>
                    <li>React.js</li>
                    <li>P5.js</li>
                    <li>Javascript (ES6+)</li>
                    <li>AWS Lambda</li>
                    <li>Amazon RDS</li>
                    <li>Amazon CloudFront</li>
                    <li>MySQL</li>
                  </ul>*/}

                  <img src={s3Logo} className="tech-logo img-fluid" />
                  <img src={p5Logo} className="tech-logo img-fluid" />
                  <img src={lambdaLogo} className="tech-logo img-fluid" />
                  <img src={reactLogo} className="tech-logo img-fluid" />
                  <img src={rdsLogo} className="tech-logo img-fluid" />
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
