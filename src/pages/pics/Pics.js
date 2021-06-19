import React, { useState, useEffect } from "react";
import "./Pics.css";
import axios from "axios";
import Photo from "../../components/photo/Photo";
import Loader from "../../components/loader/Loader";
import { motion } from "framer-motion";
import { useFetchAPI } from "../../components/hookFetchAPI/useFetchAPI";
import responseBreeds from "../../fixtures/responseBreeds";
import responseImages from "../../fixtures/responseImages";
import responseBreedImages from "../../fixtures/responseBreedImages";
import ErrorMessage from "../../components/error-message/ErrorMessage";
import { v1 as uuidv1 } from "uuid";
import ScrollProgress from "../../components/scroll-progress/ScrollProgress";
/* ---- Framer Animation ---- */
const imagesVariants = {
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
const breedsVariants = {
  enter: {
    x: "100vw",
    scale: 0,
  },
  center: {
    x: 0,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

const headingVariants = {
  enter: {
    x: "-100vw",
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
const countVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Pics = () => {
  // const [breeds, setBreeds] = useState(Object.keys(responseBreeds.message));
  // const [images, setImages] = useState(responseImages.message);
  // const [loadingBreeds, setLoadingBreeds] = useState(false);
  // const [loadingImages, setLoadingImages] = useState(false);

  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const [breedName, setBreedName] = useState("");
  const [loadingBreeds, setLoadingBreeds] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);
  const [errorBreeds, setErrorBreeds] = useState(false);
  const [errorImages, setErrorImages] = useState(false);

  // variants={loaderVariants}
  //                 initial="initial"
  //                 animate="animate"
  /*---- useEffect Brings all Breed Dog Names ---- */

  useEffect(() => {
    setLoadingBreeds(true);
    const source = axios.CancelToken.source();
    axios
      .get("https://dog.ceo/api/breeds/list/all", {
        cancelToken: source.token,
      })
      .then(response => {
        setBreeds(Object.keys(response.data.message));
        setLoadingBreeds(false);
        setErrorBreeds(false);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log(" >> request cancelled ");
        } else {
          console.log(error);
          setLoadingBreeds(false);
          setErrorBreeds(true);
        }
      });
    return () => {
      source.cancel();
    };
  }, []);
  /*--- useEffect Loads 50 Random Images of Dog --- */

  useEffect(() => {
    setLoadingImages(true);
    const source = axios.CancelToken.source();
    axios
      .get("https://dog.ceo/api/breeds/image/random/50", {
        cancelToken: source.token,
      })
      .then(response => {
        setImages(response.data.message);
        setLoadingImages(false);
        setErrorImages(false);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log(" >> request cancelled ");
        } else {
          console.log(error);
          setLoadingImages(false);
          setErrorImages(true);
        }
      });
    setBreedName("");
    return () => {
      source.cancel();
    };
  }, []);

  /*--- This useEffect Brings all Images Related to Selected Dog  Breed --- */

  useEffect(() => {
    setLoadingImages(true);
    const source = axios.CancelToken.source();
    axios
      .get(`https://dog.ceo/api/breed/${breedName}/images`, {
        cancelToken: source.token,
      })
      .then(response => {
        setImages(response.data.message);
        setLoadingImages(false);
        setErrorImages(false);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log(" >> request cancelled ");
        } else {
          console.log(error);
          setErrorImages(true);
          setLoadingImages(false);
        }
      });

    return () => {
      source.cancel();
    };
  }, [breedName]);

  return (
    <div className="pics">
      <div className="pics__container">
        <div className="pics__photosContainer">
          {errorImages ? (
            <div className="pics__errorMsgContainer">
              <ErrorMessage></ErrorMessage>
            </div>
          ) : (
            <>
              <div className="pics__headingContainer">
                {breedName ? (
                  <h1>
                    <motion.span
                      variants={countVariants}
                      initial="enter"
                      animate="center"
                      key={breedName}
                    >
                      {breedName}
                    </motion.span>
                    <motion.span
                      variants={countVariants}
                      initial="enter"
                      animate="center"
                      key={images.length}
                    >
                      {images.length}
                    </motion.span>
                    <span>Records</span>
                  </h1>
                ) : (
                  <motion.h1
                    variants={headingVariants}
                    initial="enter"
                    animate="center"
                  >
                    <span>Random</span>
                    <span>{images.length}</span>
                    <span>Records</span>
                  </motion.h1>
                )}
              </div>

              {loadingImages ? (
                <div className="pics__loaderContainer">
                  <Loader loaderImg="/images/loader-1.gif"></Loader>
                </div>
              ) : (
                <div className="pics__imagesGrid">
                  {images.map((image, index) => (
                    <motion.div
                      className="pics__photoWrapper"
                      key={index}
                      variants={imagesVariants}
                      initial="enter"
                      animate="center"
                    >
                      <Photo imageUrl={image} serialNo={index + 1}></Photo>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        <div className="pics__categoryContainer">
          {errorBreeds ? (
            <div className="pics__errorMsgContainer">
              <ErrorMessage></ErrorMessage>
            </div>
          ) : (
            <>
              <h1>Dog Breeds</h1>
              {loadingBreeds ? (
                <div className="pics__categoryLoaderContainer">
                  <Loader loaderImg="/images/loader-2.gif"></Loader>
                </div>
              ) : (
                breeds.map((breed, index) => (
                  <motion.p
                    className="pics__breedCategory"
                    key={index}
                    variants={breedsVariants}
                    initial="enter"
                    animate="center"
                    onClick={() => setBreedName(breed)}
                  >
                    <span>{index + 1}.</span>

                    {breed}
                  </motion.p>
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pics;
