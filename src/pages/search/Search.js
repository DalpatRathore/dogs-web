import React, { useState, useEffect, useReducer, useContext } from "react";
import "./Search.css";
import InfoBadge from "../../components/infoBadge/InfoBadge";

import Loader from "../../components/loader/Loader";
import axios from "axios";
import { SearchContext } from "../../contexts/SearchContext";
import { motion } from "framer-motion";
import ErrorMessage from "../../components/error-message/ErrorMessage";

const infoVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const headingVariants = {
  enter: {
    x: "-100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 500, duration: 0.5 },
      opacity: { duration: 0.5 },
    },
  },
};

const Search = () => {
  const [loadingResults, setLoadingResults] = useState(true);
  const [someError, setSomeError] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    setLoadingResults(true);
    axios
      .get(`https://api.thedogapi.com/v1/breeds/search?q=${searchTerm.term}`)
      .then(response => {
        setSearchResults(response.data);
        setLoadingResults(false);
        setSomeError(false);
      })
      .catch(error => {
        console.log("error :>> ", error);
        setLoadingResults(false);
        setSomeError(true);
      });
  }, [searchTerm.term]);

  if (loadingResults) {
    return (
      <div className="search">
        <div className="search__loaderContainer">
          <Loader loaderImg="/images/loader-2.gif"></Loader>
        </div>
      </div>
    );
  }
  if (someError) {
    return (
      <div className="search">
        <div className="search__errorMsgContainer">
          <ErrorMessage></ErrorMessage>
        </div>
      </div>
    );
  }

  return (
    <div className="search">
      <div className="search__resultHeading">
        <motion.h3 variants={headingVariants} initial="enter" animate="center">
          <span>{searchResults.length}</span>Results
        </motion.h3>
      </div>

      {searchResults.length > 0 ? (
        searchResults.map((result, index) => (
          <motion.div
            className="search__container"
            key={result.id}
            variants={infoVariants}
            initial="enter"
            animate="center"
          >
            <div className="search__info">
              <div className="search__badgeWrapper">
                <span>{index + 1}</span>
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
          </motion.div>
        ))
      ) : (
        <div className="search__infoMsgContainer">
          <img src="/images/loader-3.gif" alt="" />
          <p>Sorry! No Information Available</p>
        </div>
      )}
    </div>
  );
};

export default Search;
