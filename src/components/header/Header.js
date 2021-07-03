import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchBox from "../searchBox/SearchBox";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { motion } from "framer-motion";

const sloganVariants = {
  enter: {
    x: "80vw",
    opacity: "0",
  },
  center: {
    x: "0",
    opacity: "1",
    transition: {
      x: { type: "spring", bounce: 0.5, duration: 3, delay: 8 },
      opacity: { duration: 0.1, delay: 8 },
    },
  },
};

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__logo">
          <Link to="/">
            <Logo></Logo>
          </Link>
          <motion.small
            className="header__logoSlogan"
            variants={sloganVariants}
            initial="enter"
            animate="center"
          >
            Adopt, Don't Shop
          </motion.small>
        </div>

        <nav className="header__navLinks">
          <Link to="/">Home</Link>
          <Link to="/pics">Photos</Link>
          <Link to="/facts">Facts</Link>
        </nav>
        <nav
          className={` ${
            showLinks
              ? "header__navToggleLinks header__navToggleLinks--active"
              : "header__navToggleLinks"
          }`}
        >
          <Link to="/" onClick={() => setShowLinks(!showLinks)}>
            Home
          </Link>
          <Link to="/pics" onClick={() => setShowLinks(!showLinks)}>
            Photos
          </Link>
          <Link to="/facts" onClick={() => setShowLinks(!showLinks)}>
            Facts
          </Link>
          <span className="header__toggleSearchBox">
            <SearchBox></SearchBox>
          </span>
        </nav>
        <div className="header__wrapper">
          <div className="header__searchBoxContainer">
            <SearchBox></SearchBox>
          </div>

          <button
            className="header__navToggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            {showLinks ? (
              <FaTimes className="header__close"></FaTimes>
            ) : (
              <FaBars className="header__open"></FaBars>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
