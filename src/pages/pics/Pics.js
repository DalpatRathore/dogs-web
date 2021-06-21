import React, { useState, useEffect } from "react";
import "./Pics.css";
import axios from "axios";
import Photo from "../../components/photo/Photo";
import Loader from "../../components/loader/Loader";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import ErrorMessage from "../../components/error-message/ErrorMessage";

/* ---- Framer Animation ---- */

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
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const [breedName, setBreedName] = useState("");
  const [loadingBreeds, setLoadingBreeds] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);
  const [errorBreeds, setErrorBreeds] = useState(false);
  const [errorImages, setErrorImages] = useState(false);

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
                    <InView threshold={0} triggerOnce="true" key={index}>
                      {({ inView, ref }) => (
                        <motion.div
                          className="pics__photoWrapper"
                          ref={ref}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={inView && { scale: 1, opacity: 1 }}
                          // transition={{
                          //   duration: 0.3,
                          // }}
                        >
                          <Photo imageUrl={image} serialNo={index + 1}></Photo>
                        </motion.div>
                      )}
                    </InView>
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
                  <InView threshold={0} triggerOnce="true" key={index}>
                    {({ inView, ref }) => (
                      <motion.p
                        className="pics__breedCategory"
                        ref={ref}
                        initial={{ x: "100%" }}
                        animate={inView && { x: "0" }}
                        transition={{
                          duration: 0.3,
                        }}
                        onClick={() => setBreedName(breed)}
                      >
                        <span>{index + 1}.</span>
                        {breed}
                      </motion.p>
                    )}
                  </InView>
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
