import React from "react";
import BreedCategory from "../../components/breedCategory/BreedCategory";
import { useFetchAPI } from "../../components/hookFetchAPI/useFetchAPI";
import ResponseBreeds from "../../components/response/ResponseBreeds";
import "./Pics.css";
import FlipMove from "react-flip-move";
import ResponseImages from "../../components/response/ResponseImages";
import Photo from "../../components/photo/Photo";

// AllBreeds = "https://dog.ceo/api/breeds/list/all"
// Random Images(50) = "https://dog.ceo/api/breeds/image/random/50"
// Choose a dog breed = `https://dog.ceo/api/breed/${breed}/images`

const Pics = () => {
  // const [data, loading] = useFetchAPI(
  //   "https://dog.ceo/api/breeds/image/random/50"
  // );
  // console.log("data :>> ", data);
  // console.log("loading :>> ", loading);

  // const [breeds, loading] = useFetchAPI("https://dog.ceo/api/breeds/list/all");
  // console.log("breeds :>> ", breeds);
  // console.log("loading :>> ", loading);

  /*--- This is Dummy All Breeds Category Data --- */
  const breeds = ResponseBreeds;
  const images = ResponseImages;

  return (
    <div className="pics">
      <div className="pics__container">
        {images.message.map((image, index) => (
          <Photo key={index} imageUrl={image}></Photo>
        ))}
      </div>
      <div className="pics__categoryContainer">
        <h1>Dogs Breed</h1>
        {Object.keys(breeds.message).map((breed, i) => (
          <BreedCategory key={i} breed={breed} sNo={i + 1}></BreedCategory>
        ))}
      </div>
    </div>
  );
};

export default Pics;
