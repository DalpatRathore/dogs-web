import React from "react";
import "./HeroBg.css";
import DogPaw from "./dog-paw.png";
const HeroBg = props => {
  const { image } = props;
  return (
    <div className="herobg">
      <div className="herobg__imgWrapper">
        <img src={image} alt="dog" />
      </div>
      <div className="herobg__blueWave">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="herobg__yellowWave">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="herobg__circles">
        <span></span>
        <span></span>
        <img src={DogPaw} alt="dog paw" />
      </div>
      <div className="herobg__shapes">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default HeroBg;
