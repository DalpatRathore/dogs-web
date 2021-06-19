import React from "react";
import { motion } from "framer-motion";

const ScrollProgress = props => {
  const { isComplete, pathLength } = props;

  return (
    <svg width="50" height="50" viewBox="0 0 60 60">
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="orange"
        strokeDasharray="0 1"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          pathLength,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1, // Reverse direction of line animation
        }}
      />
      <motion.path
        fill="none"
        strokeWidth="5"
        stroke="orange"
        d="M14,26 L 22,33 L 35,16"
        initial={false}
        strokeDasharray="0 1"
        animate={{ pathLength: isComplete ? 1 : 0 }}
      />
    </svg>
  );
};

export default ScrollProgress;
