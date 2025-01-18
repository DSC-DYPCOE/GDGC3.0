"use client";

import { motion } from "framer-motion";
import React from "react";

const Title = ({title,className}) => {
  return (
    <div className={`flex items-center justify-center relative h-24 overflow-hidden ${className}`}>
      {/* Left Logo Animation */}
      <motion.img
        src="./logo1.png"
        alt="Left Logo"
        className="w-8"
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 1.5,
        }}
      />

      <motion.p
        className="mx-8 text-2xl dark:text-white text-black font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
{title}      </motion.p>

      {/* Right Logo Animation */}
      <motion.img
        src="./logo2.png"
        alt="Right Logo"
        className="w-8"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 1.5,
        }}
      />
    </div>
  );
};

export default Title;
