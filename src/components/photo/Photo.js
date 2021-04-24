import React, { useEffect, useState } from "react";
import "./Photo.css";
import ModalMaterialUi from "../modalMaterialUi/ModalMaterialUi";
import Badge from "../badge/Badge";

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
  return (
    <div className="photo">
      <div className="photo__container">
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
      </div>
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
