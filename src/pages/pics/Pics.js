import React, { useState, useEffect } from "react";
import "./Pics.css";
import axios from "axios";
import Photo from "../../components/photo/Photo";
// import { useFetchAPI } from "../../components/hookFetchAPI/useFetchAPI";
// import FlipMove from "react-flip-move";
import responseBreeds from "../../fixtures/responseBreeds";
import responseImages from "../../fixtures/responseImages";
import responseBreedImages from "../../fixtures/responseBreedImages";
import Badge from "../../components/badge/Badge";
import Loader from "../../components/loader/Loader";

const Pics = () => {
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const [breedName, setBreedName] = useState("");
  const [loadingBreeds, setLoadingBreeds] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);

  /*--- This useEffect Brings all Breed Dog Names --- */

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        setBreeds(Object.keys(response.data.message));
        setLoadingBreeds(false);
      })
      .catch(error => {
        console.log(error);
      });
    return () => {
      console.log("Clean Up");
    };
  }, []);
  /*--- This useEffect Loads 50 Random Images of Dog --- */

  useEffect(() => {
    setLoadingImages(true);
    axios
      .get("https://dog.ceo/api/breeds/image/random/50")
      .then(response => {
        setImages(response.data.message);
        setLoadingImages(false);
        // console.log("response :>> ", response);
      })
      .catch(error => {
        console.log(error);
      });
    setBreedName("");
    return () => {
      console.log("Clean Up");
    };
  }, []);

  /*--- This useEffect Brings all Images Related to Selected Dog  Breed --- */

  useEffect(() => {
    setLoadingImages(true);
    axios
      .get(`https://dog.ceo/api/breed/${breedName}/images`)
      .then(response => {
        setImages(response.data.message);
        setLoadingImages(false);
      })
      .catch(error => {
        console.log(error);
      });

    return () => {
      console.log("Clean Up");
    };
  }, [breedName]);

  /*--- This is Dummy All Breeds Category Data --- */
  // const breeds = responseBreeds;
  // const images = responseImages;
  // const breedImages = responseBreedImages;

  return (
    <div className="pics">
      <div className="pics__container">
        <div className="pics__recordsText">
          {breedName ? (
            <>
              <h1>{breedName}</h1>
              <h2>({images.length} Records)</h2>
            </>
          ) : (
            <>
              <h1>Random</h1>
              <h2>({images.length} Records)</h2>
            </>
          )}
        </div>

        <div className="pics__imagesGrid">
          {loadingImages ? (
            <div className="pics__loaderContainer">
              <Loader loaderImg="/images/loader-3.gif"></Loader>
            </div>
          ) : breedName.length > 0 ? (
            images.map((image, index) => (
              <Photo key={index} imageUrl={image} serialNo={index + 1}></Photo>
            ))
          ) : (
            images.map((image, index) => (
              <Photo key={index} imageUrl={image} serialNo={index + 1}></Photo>
            ))
          )}
        </div>
      </div>
      <div className="pics__categoryContainer">
        <h1>Dogs Breed</h1>
        {loadingBreeds ? (
          <div className="pics__loaderBreeds">
            <Loader loaderImg="/images/loader-2.gif"></Loader>
          </div>
        ) : (
          breeds.map((breed, index) => (
            <p
              className="pics__breedCategory"
              key={index}
              onClick={() => setBreedName(breed)}
            >
              <Badge serialNo={index + 1}></Badge>

              {breed}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default Pics;
