import React, { Component } from "react";
import { Link } from "react-router-dom";
import Brand from "./brand";

/* This is the side-panel on the left in both the desktop and
mobile versions. In the mobile version, the panel is hidden
by default and slides into view when pressing the button on
the Navbar */
const Menu = () => {
  return (
    <ul className="nav flex-column">
      <li>
        <Brand />
      </li>

      <li className="nav-item">
        <Link to="/aboutme">
          <a className="nav-link active" href="#">
            About Me
          </a>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/projects">
          <a className="nav-link" href="#">
            Projects
          </a>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/photography">
          <a className="nav-link" href="#">
            Photography
          </a>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/generative-design">
          <a className="nav-link" href="#">
            Generative Design
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
