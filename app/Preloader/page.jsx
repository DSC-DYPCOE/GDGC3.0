"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GDGCAnimation from "./_components/GDGC_Loader";
import GDSCInfoSection from "./_components/LetsDoIt";
import DomainShowcase from "./_components/GDGC_Domain";
import FaqSection from "./_components/FreqenlyAsk";
import Footer from "./_components/Ending";
import Home from "../(home)/_component.jsx/Home";
const GDGCReveal = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true); // Show home page after animation
    }, 3000); // Adjust the delay based on animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-[100vh] bg-black">
      <div className="fixed inset-0 bg-black z-[-1]" />

      <AnimatePresence mode="wait">
        {!animationComplete ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* <GDGCAnimation /> */}
          </motion.div>
        ) : (
          <motion.div
            key="homepage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Home />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GDGCReveal;
