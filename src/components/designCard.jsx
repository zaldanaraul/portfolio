import React from "react";
import { Link } from "react-router-dom";
import "../projects.css";

const DesignCard = (props) => {
  let design = props.design;

  return (
    <Link to={`/design-detail/${design.id}`}>
      <video
        onMouseOver={(e) => e.target.play()}
        onMouseOut={(e) => e.target.pause()}
        src={design.thumbnail}
        loop={true}
        className="img-fluid shadow"
      />
    </Link>
  );
};

export default DesignCard;
