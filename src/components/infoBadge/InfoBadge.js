import React from "react";
import "./InfoBadge.css";

const InfoBadge = ({ labelStatic, labelDynamic = "Details Not Available" }) => {
  return (
    <div className="infoBadge">
      <span className="infoBadge__labelStatic">{labelStatic}</span>
      <span className="infoBadge__labelDynamic">
        {labelDynamic.length > 0 ? labelDynamic : "Details Not Available"}
      </span>
    </div>
  );
};

export default InfoBadge;
