import React, { useEffect, useState } from "react";
import "./Photo.css";
import ModalMaterialUi from "../modalMaterialUi/ModalMaterialUi";
import Badge from "../badge/Badge";
import { useSpring, animated } from "react-spring";

const Photo = ({ imageUrl, altName = "Dog", serialNo }) => {
  const [imageLoading, setImageLoading] = useState(true);
  useEffect(() => {
    setImageLoading(true);
    const clearTime = setTimeout(() => {
      setImageLoading(false);
    }, 5000);
    return () => {
      clearTimeout(clearTime);
    };
  }, [imageUrl]);

  const imageSpring = useSpring({
    from: {
      transform: "scale(0) rotate(0deg)",
      opacity: 0.5,
    },
    to: {
      transform: "scale(1) rotate(360deg)",
      opacity: 1,
    },
    config: {
      duration: 1000,
    },
  });
  return (
    <div className="photo">
      <animated.div className="photo__container" style={imageSpring}>
        {imageLoading ? (
          <img
            src="/images/imageLoader.gif"
            alt={altName}
            className="photo__img"
          />
        ) : (
          <img
            src={imageUrl ? imageUrl : "/images/imageLoader.gif"}
            alt={altName}
            // onError={e => (e.target.src = { LoaderImage })}
            className="photo__img"
          />
        )}
      </animated.div>
      {serialNo && (
        <div className="photo__badgeWrapper">
          <Badge serialNo={serialNo}></Badge>
        </div>
      )}

      {!imageLoading && <ModalMaterialUi imageUrl={imageUrl}></ModalMaterialUi>}
    </div>
  );
};

export default Photo;
