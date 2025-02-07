"use client"
import React, { useEffect, useState } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import SecondScene from "./Second.Scene.jsx";
import ThirdScene from "./ThirdScene.jsx";
// Enhanced letter animation variants with floating effect
const letterVariants = {
  hidden: { y: 150, opacity: 0, scale: 0, rotate: -20 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: [0.4, 0.0, 0.2, 1],
    },
  }),
};
// Particle Effect Component
const ParticleEffect = ({ count = 50 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            y: [null, -Math.random() * 500],
            x: [null, (Math.random() - 0.5) * 200],
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Fluid Wave Component
const FluidWave = ({ corner, delay }) => {
  const getInitialPosition = () => {
    switch (corner) {
      case "topLeft":
        return { top: -300, left: -300, rotate: 45 };
      case "topRight":
        return { top: -300, right: -300, rotate: -45 };
      case "bottomLeft":
        return { bottom: -300, left: -300, rotate: -45 };
      case "bottomRight":
        return { bottom: -300, right: -300, rotate: 45 };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className="absolute w-[800px] h-[800px] rounded-[40%] mix-blend-screen will-change-transform backdrop-blur-sm"
      style={{
        background: `radial-gradient(circle at center, 
          ${corner.includes("top") ? "#4F46E5" : "#06B6D4"} 0%,
          ${corner.includes("Left") ? "#8B5CF6" : "#3B82F6"} 50%,
          transparent 70%)`,
        ...getInitialPosition(),
      }}
      animate={{
        scale: [1, 1.8, 1.2],
        x: corner.includes("Left") ? [0, 100, 50] : [0, -150, -50],
        y: corner.includes("top") ? [0, 150, 50] : [0, -150, -50],
        rotate: [0, 360, 180],
        opacity: [0, 0.9, 0.7],
      }}
      transition={{
        delay,
        duration: 4,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  );
};

// Enhanced Ripple Effect
const Ripple = ({ delay }) => (
  <motion.div
    className="absolute inset-0 will-change-transform"
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0, 0.15, 0],
      scale: [1, 1.8, 1],
    }}
    transition={{
      delay,
      duration: 4,
      ease: "easeInOut",
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    }}
  >
    <div className="w-full h-full bg-gradient-radial from-blue-500/40 via-purple-500/30 to-transparent" />
  </motion.div>
);

// Lightning Effect Component
const LightningEffect = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        opacity: [0, 0.3, 0],
        scale: [0.8, 1.1, 1],
        transition: { duration: 0.3 },
      });
    };

    animate();
  }, [controls]);

  return (
    <motion.div
      className="absolute inset-0 bg-white/10 mix-blend-overlay"
      animate={controls}
      initial={{ opacity: 0 }}
    />
  );
};
// Main Component
const GDGCAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentScene, setCurrentScene] = useState(1)

  useEffect(() => {
    setIsLoaded(true)

    // Sequence the scene transition
    const timer = setTimeout(() => {
      setCurrentScene(2)
    }, 5000) // Adjust timing as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScene === 1 && (
          <motion.div
            key="scene1"
            className="fixed inset-0"
            exit={{
              scale: 0,
              opacity: 0,
              transition: {
                duration: 0.8,
                ease: [0.4, 0.0, 0.2, 1],
              },
            }}
          >
            {/* Background Effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-blue-900/30 via-purple-900/20 to-black will-change-transform"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            {/* Existing Effects */}
            {isLoaded && <ParticleEffect count={30} />}
            <FluidWave corner="topLeft" delay={2} />
            <FluidWave corner="topRight" delay={2.4} />
            <FluidWave corner="bottomLeft" delay={2.8} />
            <FluidWave corner="bottomRight" delay={3.2} />
            <Ripple delay={3.6} />
            <Ripple delay={4} />
            <LightningEffect />

            {/* GDGC Text Container */}
            <motion.div className="fixed inset-0 flex items-center justify-center z-10" initial={{ opacity: 1 }}>
              <div className="flex items-center relative">
                {["G", "D", "G", "C"].map((letter, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.span
                      className="text-[15rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-200 to-white mx-8"
                      style={{
                        filter: "drop-shadow(0 0 20px rgba(255,255,255,0.7))",
                        WebkitTextStroke: "3px rgba(255,255,255,0.9)",
                      }}
                      animate={{
                        textShadow: [
                          "0 0 30px rgba(255,255,255,0.3)",
                          "0 0 60px rgba(255,255,255,0.5)",
                          "0 0 30px rgba(255,255,255,0.3)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      {letter}
                    </motion.span>

                    {/* Enhanced Glow effect behind letters */}
                    <motion.div
                      className="absolute inset-0 -z-10 blur-2xl will-change-transform"
                      animate={{
                        opacity: [0.4, 0.9, 0.4],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <div className="w-full h-full bg-gradient-radial from-blue-500/60 via-purple-500/40 to-transparent" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 1 }}
            >
              <motion.span
                className="mb-3 text-2xl font-light tracking-widest"
                animate={{
                  opacity: [1, 0.4, 1],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                {/* Scroll Down */}
              </motion.span>
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  opacity: [1, 0.4, 1],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="text-3xl"
              >
                ↓
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* {currentScene === 2 && <SecondScene />}
        {currentScene === 2 && <ThirdScene />} */}
      </AnimatePresence>
    </div>



  )
}

export default GDGCAnimation