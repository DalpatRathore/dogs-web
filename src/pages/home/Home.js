import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import starImg from "../../StarImage.JPG";
import Carousel from "../../components/carousel/Carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <div className="home__carouselContainer">
          <Carousel></Carousel>
        </div>
        <div className="home__buttons">
          <Link to="/facts">
            <button className="btn btn--Info">Facts</button>
          </Link>
          <Link to="/pics">
            <button className="btn btn--picture">Pictures</button>
          </Link>
        </div>
      </div>

      <div className="home__aboutContainer">
        <img src={starImg} alt="Dog" />
        <div>
          <h2>Dogs Lover App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            odit voluptatem modi fugit vero architecto officiis ullam error,
            voluptatibus esse similique at laudantium recusandae cupiditate?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
