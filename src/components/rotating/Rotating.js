import React, { useState, useEffect } from "react";
import "./Rotating.css";
import { largeImages, smallImages } from "../carousel/carouseldata";
import { motion } from "framer-motion";

const rotatingVariants = {
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

const Rotating = () => {
  const [slides, setSlides] = useState(smallImages);
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

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [slides, viewWidth]);
  return (
    <motion.div
      className="rotating"
      variants={rotatingVariants}
      initial="enter"
      animate="center"
    >
      {slides.map(slide => {
        const { id, image } = slide;
        return (
          <div className="rotating__slide" key={id}>
            <img src={image} alt="" />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Rotating;
