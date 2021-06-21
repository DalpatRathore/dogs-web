import React, { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import "./Modal.css";

const Modal = props => {
  const { imageUrl, isModalOpen, handleClose } = props;

  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 27) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return ReactDOM.createPortal(
    <div className={`${isModalOpen ? "modal modal__show" : "modal"}`}>
      <div className="modal__overlay">
        <div className="modal__imgContainer">
          <img src={imageUrl} alt="dog" />
          <button className="modal__btnClose" onClick={handleClose}>
            <FaTimes className="modal__closeIcon"></FaTimes>
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
