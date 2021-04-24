import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "relative",
    height: "95vh",
    margin: "0 auto",
    backgroundColor: "#069",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  button: {
    position: "absolute",
    bottom: "8px",
    left: "8px",
    width: "94%",
    padding: "0.5rem",
    fontSize: "1rem",
    fontWeight: 550,
    borderRadius: "5px",
    cursor: "pointer",
    color: "#fff",
    letterSpacing: "2px",
    background: "rgba(0,0,0, 0.3)",
    backdropFilter: "blur(5px)",
    outline: " none",
    border: "none",
    zIndex: 105,
  },

  close: {
    position: "absolute",
    top: "5px",
    right: "5px",
    color: "maroon",
    backgroundColor: "#fff",
    fontSize: "3rem",
    cursor: "pointer",
    borderRadius: "50%",
    boxShadow: "3px 3px 5px #000, -2px -2px 3px #333 ",
  },

  images: {
    display: "block",
    height: "100%",
    objectFit: "contain",
  },
}));

const ModalMaterialUi = ({ imageUrl }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className={classes.button}>
        View Image
      </button>
      <Modal className={classes.modal} open={open} onClose={handleClose}>
        <Fade in={open}>
          <div className={classes.paper}>
            <img src={imageUrl} alt="dog" className={classes.images} />

            <CancelRoundedIcon
              className={classes.close}
              onClick={handleClose}
            ></CancelRoundedIcon>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalMaterialUi;
