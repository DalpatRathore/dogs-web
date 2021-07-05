import React from "react";
import { motion } from "framer-motion";

const ScrollProgress = props => {
  const { pathLength } = props;

  return (
    <svg
      className="progress"
      viewBox="0 0 1920 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M1910 8C442.029 8 31.6789 8 10 8"
        stroke="url(#paint0progress_linear)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          pathLength,
          scaleX: -1,
        }}
      />
      <defs>
        <linearGradient
          id="paint0progress_linear"
          x1="962.323"
          y1="17.5"
          x2="962.323"
          y2="0.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA6800" />
          <stop offset="1" stopColor="#1F324E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ScrollProgress;
