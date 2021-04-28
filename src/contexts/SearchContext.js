import React, { createContext, useReducer } from "react";
import { searchReducer } from "../reducers/searchReducer";

export const SearchContext = createContext();

const SearchContextProvider = props => {
  const [searchTerm, dispatch] = useReducer(searchReducer, "");

  return (
    <SearchContext.Provider value={{ searchTerm, dispatch }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
