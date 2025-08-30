// src/components/AnimatedEmailIcon.js (or similar path)

import React from "react";
import { motion } from "framer-motion";

const AnimatedEmailIcon = () => {
  // Animation variants for the envelope flap
  const flapVariants = {
    closed: { rotateX: 0 },
    open: { rotateX: -180 },
  };

  // Animation variants for the "email" paper/dot
  const paperVariants = {
    hidden: { opacity: 0, y: 0 },
    flyOut: { opacity: 1, y: -40, x: 20 },
    gone: { opacity: 0 },
  };

  return (
    <div className="w-full h-full hidden lg:flex items-center justify-center text-parrot">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-16 h-16 lg:w-24 lg:h-24"
        style={{ overflow: "visible" }} 
      >
        {/* The paper that flies out */}
        <motion.path
          d="M3 8L12 14L21 8"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={paperVariants}
          initial="hidden"
          animate={["hidden", "flyOut", "gone"]}
          transition={{
            duration: 1.5,
            times: [0, 0.5, 1], // Animation keyframes: start at 0s, fly out until 0.75s, be gone by 1.5s
            delay: 1, // Wait 1s before starting
            repeat: Infinity,
            repeatDelay: 2.5, // Total animation cycle is 4s
            ease: "easeInOut",
          }}
        />
        
        {/* Main body of the envelope (back part) */}
        <path d="M4 4h16v12H4z" fill="currentColor" fillOpacity="0.2" />
        <path d="M4 4h16v12H4V4zm0 0l8 6 8-6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        
        {/* The animated flap of the envelope */}
        <motion.path
          d="M4 4l8 6 8-6v0" // The 'v0' helps some browsers render the path correctly
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          fillOpacity="0.3"
          style={{ transformOrigin: "center 6px" }} // Set rotation pivot point
          variants={flapVariants}
          initial="closed"
          animate={["closed", "open", "closed"]}
          transition={{
            duration: 1.5,
            times: [0, 0.5, 1],
            delay: 1,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedEmailIcon;