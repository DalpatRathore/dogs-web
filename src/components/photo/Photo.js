import React, { useState } from "react";
import "./Photo.css";
import ModalMaterialUi from "../modalMaterialUi/ModalMaterialUi";

const Photo = ({ imageUrl }) => {
  return (
    <div className="photo">
      <div className="photo__overlay">
        <img src={imageUrl} alt="" className="photo__img" />
      </div>
      <ModalMaterialUi imageUrl={imageUrl}></ModalMaterialUi>
    </div>
  );
};

export default Photo;
