"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TeamCard = ({ name, role, image, bio, index, onDragEnd, onClick }) => {
  const [randomTilt, setRandomTilt] = useState(0);

  useEffect(() => {
    setRandomTilt(Math.random() * 10 - 5); // Random tilt between -5 and 5 degrees
  }, []);

  return (
    <motion.div
      className="absolute w-72 h-96 rounded-2xl cursor-pointer"
      initial={{ scale: 1, y: index * 15, rotate: randomTilt }}
      whileHover={{ scale: 1.05, y: -10, rotate: 0 }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.9}
      onDragEnd={(event, info) => {
        if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) {
          onDragEnd();
        }
      }}
      onClick={onClick}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ zIndex: 1000 - index }}
    >
      <motion.div className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="relative h-[45vh]">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            style={{ objectFit:"cover",objectPosition:"center" }}
          />
        </div>
        <div className="p-4 bg-white bg-opacity-90 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-purple-600">{role}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamCard;
