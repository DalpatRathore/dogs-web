import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchBox from "../searchBox/SearchBox";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__logo">
          <Link to="/">
            <Logo></Logo>
          </Link>
        </div>

        <nav className="header__navLinks">
          <Link to="/">Home</Link>
          <Link to="/pics">Images</Link>
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
            Images
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
