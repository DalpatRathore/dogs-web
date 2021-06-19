import React, { useState } from "react";
import "./Home.css";
import Carousel from "../../components/carousel/Carousel";
import Rotating from "../../components/rotating/Rotating";

const Home = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="home">
      <div className="home__container">
        <button className="home__toggle" onClick={() => setToggle(!toggle)}>
          {toggle ? "3D Gallery" : "Coursel"}
        </button>
        {toggle ? (
          <div className="home__carouselContainer">
            <Carousel></Carousel>
          </div>
        ) : (
          <div className="home__rotatingContainer">
            <Rotating></Rotating>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
