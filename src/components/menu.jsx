import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
  );
};

export default Menu;
