import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { largeImages, smallImages } from "./carouseldata";
import HeroBg from "../hero-image-bg/HeroBg";
import { motion, AnimatePresence } from "framer-motion";
import { v1 as uuidv1 } from "uuid";

const carouselVariants = {
  enter: {
    scale: 0,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const slideVariants = {
  enter: {
    x: "100vw",
    scale: 0,
  },
  center: {
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: "-100vw",
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Carousel = () => {
  const [slides, setSlides] = useState(smallImages);
  const [slideIndex, setSlideIndex] = useState(0);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setViewWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    if (viewWidth >= 1024) {
      setSlides(largeImages);
    } else {
      setSlides(smallImages);
    }

    const lastslideIndex = slides.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastslideIndex);
    }
    if (slideIndex > lastslideIndex) {
      setSlideIndex(0);
    }

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [slideIndex, slides, viewWidth]);

  useEffect(() => {
    let slider = setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [slideIndex]);

  return (
    <motion.div
      className="carousel"
      variants={carouselVariants}
      initial="enter"
      animate="center"
    >
      <AnimatePresence>
        {slides.map((slide, index) => {
          const { image } = slide;

          return (
            <motion.div
              className={`carousel__imgContainer ${
                index === slideIndex ? "carousel__active" : ""
              }`}
              key={uuidv1()}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <HeroBg image={image}></HeroBg>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <button
        className="carousel__prev"
        onClick={() => setSlideIndex(slideIndex - 1)}
      >
        <FiChevronLeft></FiChevronLeft>
      </button>
      <button
        className="carousel__next"
        onClick={() => setSlideIndex(slideIndex + 1)}
      >
        <FiChevronRight></FiChevronRight>
      </button>
    </motion.div>
  );
};

export default Carousel;
