import React, { useState } from "react";
import "./SearchBox.css";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const SearchBox = () => {
  const history = useHistory();
  const [input, setInput] = useState("");

  const handlSubmit = e => {
    e.preventDefault();
    if (!input) return;
    history.push(`/search/v1?=${input}`);
  };
  const handleClearSearch = () => {
    setInput("");
  };
  return (
    <div className="searchBox">
      <form onSubmit={handlSubmit} className="searchBox__form">
        <button type="submit" className="searchBox__Btn">
          <SearchIcon></SearchIcon>
        </button>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="searchBox__inputField"
          placeholder="Search a dog breed"
        />
        {input.length > 0 && (
          <button
            onClick={handleClearSearch}
            className="searchBox__Btn searchBox__Btn--searchClear"
          >
            <CloseRoundedIcon></CloseRoundedIcon>
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBox;
