import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchBox from "../searchBox/SearchBox";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <nav className="header__navLinks">
        <Link to="/facts">
          <h1>Facts</h1>
        </Link>
        <Link to="/pics">
          <h1>Images</h1>
        </Link>
      </nav>
      <div className="header__searchBoxContainer">
        <SearchBox></SearchBox>
      </div>
    </header>
  );
};

export default Header;
