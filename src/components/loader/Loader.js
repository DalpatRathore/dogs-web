import React from "react";
import "./Loader.css";

const Loader = ({ loaderImg }) => {
  return (
    <div className="loader">
      <div className="loader__imageWrapper">
        <img src={loaderImg} alt="" />
      </div>
      <span className="loader__spinner"></span>
    </div>
  );
};

export default Loader;
