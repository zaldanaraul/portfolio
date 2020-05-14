import React, { Component } from "react";
import { Link } from "react-router-dom";
import Brand from "./brand";

/* This is the side-panel on the left in both the desktop and
mobile versions. In the mobile version, the panel is hidden
by default and slides into view when pressing the button on
the Navbar */
const Menu = (props) => {
  return (
    <ul className="nav flex-column">
      <li>
        <Brand />
      </li>

      <li className="nav-item">
        <Link to="/aboutme" onClick={props.closeMenu} className="nav-link">
          About Me
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/projects" className="nav-link" onClick={props.closeMenu}>
          Projects
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/photography" className="nav-link" onClick={props.closeMenu}>
          Photography
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/generative-design"
          className="nav-link"
          onClick={props.closeMenu}
        >
          Generative Design
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
