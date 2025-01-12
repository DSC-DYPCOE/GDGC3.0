import React from 'react';
import { motion } from 'framer-motion';
import logo from '@/app/assets/gdgc_logo.png'; // Replace with the actual path

const Logo = ({ size = 100 }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: `${size+20}px`,
        height: `${size}px`,
        backgroundColor: 'transparent'
      }}
    >
      <img src={logo.src} alt="Logo" style={{ width: '100%', height: '100%' }} />
    </motion.div>
  );
};

export default Logo;
