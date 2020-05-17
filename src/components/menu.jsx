import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Brand from "./brand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faMapMarkerAlt,
  faGraduationCap,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

/* This is the side-panel on the left in both the desktop and
mobile versions. In the mobile version, the panel is hidden
by default and slides into view when pressing the button on
the Navbar */
const Menu = (props) => {
  return (
    <div className="container p-0">
      <div className="row">
        <div className="col-12 pr-0">
          <ul className="nav flex-column">
            <li>
              <Brand />
            </li>

            <li className="nav-item">
              <NavLink
                to="/aboutme"
                onClick={props.closeMenu}
                className="nav-link"
                activeClassName="active"
              >
                About Me
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/projects"
                className="nav-link"
                activeClassName="active"
                onClick={props.closeMenu}
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/photography"
                className="nav-link"
                activeClassName="active"
                onClick={props.closeMenu}
              >
                Photography
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/generative-design"
                className="nav-link"
                activeClassName="active"
                onClick={props.closeMenu}
              >
                Generative Design
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="row pl-3 pr-3 mt-5 mb-5">
        <a
          className="col-12 mt-2 mb-2 social-media"
          href="https://www.linkedin.com/in/raulzaldanacalles/"
          target="_blank"
        >
          <FontAwesomeIcon style={{ fontSize: "1.5em" }} icon={faLinkedin} />
        </a>
        <a
          className="col-12 mt-2 mb-2 social-media"
          href="https://github.com/zaldanaraul"
          target="_blank"
        >
          <FontAwesomeIcon style={{ fontSize: "1.5em" }} icon={faGithub} />
        </a>
        <a
          className="col-12 mt-2 mb-2 social-media"
          href="https://twitter.com/RaulZaldana"
          target="_blank"
        >
          <FontAwesomeIcon style={{ fontSize: "1.5em" }} icon={faTwitter} />
        </a>
        <a
          className="col-12 mt-2 mb-2 social-media"
          href="https://www.instagram.com/ralzal/"
          target="_blank"
        >
          <FontAwesomeIcon style={{ fontSize: "1.5em" }} icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export default Menu;
