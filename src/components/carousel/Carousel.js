import React, { useState, useEffect } from "react";
import "./Carousel.css";

const slides = [
  {
    id: 0,
    slideUrl: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
  },
  {
    id: 1,
    slideUrl: "https://images.dog.ceo/breeds/akita/An_Akita_Inu_resting.jpg",
  },
  {
    id: 2,
    slideUrl: "https://images.dog.ceo/breeds/redbone/n02090379_4138.jpg",
  },
  {
    id: 3,
    slideUrl: "https://images.dog.ceo/breeds/dalmatian/cooper2.jpg",
  },
  {
    id: 4,
    slideUrl: "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg",
  },
];

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = slides[slideIndex];

  const increment = () => {
    setSlideIndex(prevCount => (prevCount + 1) % slides.length);
  };
  useEffect(() => {
    const clearIntval = setInterval(increment, 2000);
    return () => {
      clearInterval(clearIntval);
    };
  }, []);

    return (
      <div
        className="carousel" key={slide}
        style={{ backgroundImage: `url(${slide.slideUrl})`}}
      ></div>
    );
  
};

export default Carousel;
