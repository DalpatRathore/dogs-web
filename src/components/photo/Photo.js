import React, { useEffect, useState } from "react";
import "./Photo.css";
import Modal from "../modal/Modal";
import { SiDatadog } from "react-icons/si";

const Photo = ({ imageUrl, altName = "dog", serialNo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="photo">
      <div className="photo__container">
        {imageLoading ? (
          <img src="/images/imageLoader.gif" alt={altName} />
        ) : (
          <img
            src={imageUrl ? imageUrl : "/images/imageLoader.gif"}
            alt={altName}
            onClick={handleOpen}
          />
        )}
        {serialNo && (
          <div className="photo__badgeWrapper">
            <span>{serialNo}</span>
          </div>
        )}
        {imageUrl && (
          <button className="photo__btnOpen" onClick={handleOpen}>
            <SiDatadog className="icon" />
            VIEW
          </button>
        )}
      </div>
      <Modal
        imageUrl={imageUrl}
        isModalOpen={isModalOpen}
        handleClose={handleClose}
      ></Modal>
    </div>
  );
};

export default Photo;
