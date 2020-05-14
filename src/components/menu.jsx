import React, { Component } from "react";

const Menu = () => {
  return (
    <ul className="nav flex-column">
      <li>
        <span className="navbar-brand" href="#">
          Raul Zaldaña
        </span>
      </li>

      <li className="nav-item">
        <a className="nav-link active" href="#">
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Photography
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Generative Design
        </a>
      </li>
    </ul>
  );
};

export default Menu;
