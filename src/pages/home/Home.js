import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import bannerImg from "../../bannerImage-1.jpg";
import starImg from "../../StarImage.JPG";

const Home = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <img src={bannerImg} alt="Dog" />
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
