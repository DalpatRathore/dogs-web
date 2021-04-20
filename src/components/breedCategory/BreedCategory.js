import React, { useEffect, useState } from "react";
import { useFetchAPI } from "../hookFetchAPI/useFetchAPI";
import Photo from "../photo/Photo";
import "./BreedCategory.css";

const BreedCategory = ({ breed, sNo }) => {
  const [breedName, setBreedName] = useState("");
  const [images, loading] = useFetchAPI(
    `https://dog.ceo/api/breed/${breedName}/images`
  );

  const handleClick = () => {
    setBreedName(breed);
  };
  return (
    <div className="breedCategory">
      {images.length > 0 &&
        Object.keys(images.message).map((image, index) => {
          <Photo key={index} imageUrl={image}></Photo>;
        })}
      <p onClick={handleClick}>
        <span>{sNo}</span>
        {breed}
      </p>
    </div>
  );
};

export default BreedCategory;
