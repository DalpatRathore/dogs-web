import React, { useState, useEffect, useReducer, useContext } from "react";
import "./Search.css";
import InfoBadge from "../../components/infoBadge/InfoBadge";
import Badge from "../../components/badge/Badge";
import Loader from "../../components/loader/Loader";
import axios from "axios";
import { SearchContext } from "../../contexts/SearchContext";

const Search = () => {
  const [loadingResults, setLoadingResults] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    setLoadingResults(true);
    axios
      .get(`https://api.thedogapi.com/v1/breeds/search?q=${searchTerm.term}`)
      .then(response => {
        setSearchResults(response);
        setLoadingResults(false);
        console.log("respone :>> ", response);
      })
      .catch(error => {
        console.log("error :>> ", error);
      });
  }, [searchTerm.term]);

  return (
    <div className="search">
      {!loadingResults && <h3>{searchResults.data.length} Search Results</h3>}

      {loadingResults ? (
        <div className="search__loaderContainer">
          <Loader loaderImg="/images/loader-2.gif"></Loader>
        </div>
      ) : searchResults.data.length > 0 ? (
        searchResults.data.map((result, index) => (
          <div className="search__container" key={result.id}>
            <div className="search__info">
              <div className="search__badgeWrapper">
                <Badge serialNo={index + 1}></Badge>
              </div>
              <InfoBadge
                labelStatic="Name"
                labelDynamic={result.name}
              ></InfoBadge>
              <InfoBadge
                labelStatic="Breed Group"
                labelDynamic={result.breed_group}
              ></InfoBadge>
              <InfoBadge
                labelStatic="Origin"
                labelDynamic={result.origin}
              ></InfoBadge>
              <InfoBadge
                labelStatic="Temperament"
                labelDynamic={result.temperament}
              ></InfoBadge>
              <InfoBadge
                labelStatic="Bred For"
                labelDynamic={result.bred_for}
              ></InfoBadge>
              <InfoBadge
                labelStatic="Life Span"
                labelDynamic={result.life_span}
              ></InfoBadge>
              <InfoBadge
                labelStatic="Weight"
                labelDynamic={`Imperial: "${result.weight.imperial}" & Metric: "${result.weight.metric}"`}
              ></InfoBadge>
              <InfoBadge
                labelStatic=" Height"
                labelDynamic={`Imperial: "${result.height.imperial}" & Metric: "${result.height.metric}"`}
              ></InfoBadge>
            </div>
          </div>
        ))
      ) : (
        <div className="search__messageContainer">
          <h1>Sorry! No Information Available</h1>
        </div>
      )}
    </div>
  );
};

export default Search;
