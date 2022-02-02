import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const iconsVariants = {
  enter: {
    x: "-100vw",
    opacity: 0,
    rotate: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    rotate: 360,
    transition: {
      x: { duration: 1 },
      opacity: { duration: 1 },
      rotate: { duration: 1.5 },
    },
  },
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <ul className="footer__socialIcons">
          <motion.li
            className="footer__socialIcon"
            variants={iconsVariants}
            initial="enter"
            animate="center"
          >
            <a href="https://www.linkedin.com/in/dalpatrathore">
              <FaLinkedin></FaLinkedin>
            </a>
          </motion.li>
          <motion.li
            className="footer__socialIcon"
            variants={iconsVariants}
            initial="enter"
            animate="center"
          >
            <a href="https://twitter.com/ingenuity_brain">
              <FaTwitter></FaTwitter>
            </a>
          </motion.li>
          <motion.li
            className="footer__socialIcon"
            variants={iconsVariants}
            initial="enter"
            animate="center"
          >
            <a href="https://github.com/dalpatrathore">
              <FaGithub></FaGithub>
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
