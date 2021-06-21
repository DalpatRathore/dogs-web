import React, { useContext, useState } from "react";
import "./SearchBox.css";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { SearchContext } from "../../contexts/SearchContext";

const SearchBox = () => {
  const history = useHistory();
  const [input, setInput] = useState("");
  const { dispatch } = useContext(SearchContext);

  const handlSubmit = e => {
    e.preventDefault();
    if (!input) return;
    history.push(`/search/v1?=${input}`);
    dispatch({
      type: "SEARCH_TERM",
      payload: input,
    });
  };
  const handleClearSearch = () => {
    setInput("");
  };
  return (
    <div className="searchBox">
      <form onSubmit={handlSubmit} className="searchBox__form">
        <button type="submit" className="searchBox__btn">
          <SearchIcon className="searchBox__icon"></SearchIcon>
        </button>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="searchBox__inputField"
          placeholder="Search"
        />
        {input.length > 0 && (
          <button
            onClick={handleClearSearch}
            className="searchBox__btn searchBox__btn--searchClear"
          >
            <CloseRoundedIcon className="searchBox__icon"></CloseRoundedIcon>
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBox;
