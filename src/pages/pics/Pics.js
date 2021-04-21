import React, { useState, useEffect } from "react";
import "./Pics.css";
import axios from "axios";
import Photo from "../../components/photo/Photo";
// import { useFetchAPI } from "../../components/hookFetchAPI/useFetchAPI";
// import FlipMove from "react-flip-move";
import responseBreeds from "../../fixtures/responseBreeds";
import responseImages from "../../fixtures/responseImages";
import responseBreedImages from "../../fixtures/responseBreedImages";

const Pics = () => {
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const [breedName, setBreedName] = useState("");

  /*--- This useEffect Brings all Breed Dog Names --- */

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        setBreeds(Object.keys(response.data.message));
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
    axios
      .get("https://dog.ceo/api/breeds/image/random/50")
      .then(response => {
        setImages(response.data.message);
        // console.log("response :>> ", response);
      })
      .catch(error => {
        console.log(error);
      });
    return () => {
      console.log("Clean Up");
    };
  }, []);

  /*--- This useEffect Brings all Images Related to Selected Dog  Breed --- */

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breedName}/images`)
      .then(response => {
        setImages(response.data.message);
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
        <span>
          {" "}
          <h1>{breedName}</h1>
          <h2>({images.length} Images)</h2>
        </span>
        <div className="pics__imagesGrid">
          {breedName.length > 0
            ? images.map((image, index) => (
                <Photo key={index} imageUrl={image}></Photo>
              ))
            : images.map((image, index) => (
                <Photo key={index} imageUrl={image}></Photo>
              ))}
        </div>
      </div>
      <div className="pics__categoryContainer">
        <h1>Dogs Breed</h1>
        {breeds.map((breed, i) => (
          <p
            className="pics__breedCategory"
            key={i}
            onClick={() => setBreedName(breed)}
          >
            <span>{i + 1}</span>
            {breed}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Pics;
