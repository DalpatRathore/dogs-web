import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
const Header = () => {
  const [input, setInput] = useState("");

  const handlSubmit = e => {
    e.preventDefault();
    setInput("");
  };
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <form onSubmit={handlSubmit} className="header__form">
        <div className="header__searchBox">
          <button type="submit" className="header__submitBtn">
            <SearchIcon></SearchIcon>
          </button>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="header__input"
            placeholder="Search a dog breed"
          />
        </div>
      </form>
    </header>
  );
};

export default Header;