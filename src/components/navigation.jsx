import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import Menu from "./menu";
import Brand from "./brand";

// Navbar (only visible in mobile version)
// It also includes the sliding menu in the mobile version
const Navigation = (props) => {
  // showMenu variable is true if menu is visible
  const [showMenu, setShowMenu] = useState(false);

  // Transitions for menu (it slides in from the left)
  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  // component renders the navbar and the content of the menu variable
  return (
    <div className="pt-0">
      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="position-fixed mobile-menu pl-3"
            >
              <Menu />
            </animated.div>
          )
      )}
      <nav class="navbar navbar-light bg-light">
        <Brand />
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </nav>
    </div>
  );
};

export default Navigation;
