import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete, duration = 5000 }) => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: [0.9, 1],
        opacity: [0, 1],
        transition: { 
          duration: 0.6, 
          ease: "easeOut" 
        }
      });

      const timer = setTimeout(() => {
        controls.start({
          scale: [1, 1.1, 0],
          opacity: [1, 0.8, 0],
          transition: { 
            duration: 0.8, 
            ease: "easeInOut" 
          }
        }).then(() => {
          setLoading(false);
          onComplete();
        });
      }, duration - 800);

      return () => clearTimeout(timer);
    };

    sequence();
  }, [controls, duration, onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
          animate={controls}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
          {/* Advanced Particle Background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => {
              const size = Math.random() * 3 + 1;
              const delay = Math.random() * 3;
              const duration = Math.random() * 5 + 3;

              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/10"
                  style={{
                    width: size,
                    height: size,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [
                      Math.random() * 100 - 50, 
                      Math.random() * 100 - 50, 
                      Math.random() * 100 - 50
                    ],
                    y: [0, -Math.random() * 200 - 100, 0],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </div>

          {/* Lens Flare Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/3 left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>

          {/* Main Logo Container */}
          <motion.div 
            className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { 
                duration: 1,
                ease: "easeOut"
              }
            }}
          >
            {/* Dynamic Glow Effect */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-radial from-white/20 via-white/10 to-transparent" 
              animate={{
                boxShadow: [
                  "0 0 30px rgba(255,255,255,0.3)",
                  "0 0 60px rgba(255,255,255,0.5)",
                  "0 0 30px rgba(255,255,255,0.3)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Logo Image with Enhanced Reveal */}
            <motion.img
              src="/GDGC_ICON.png"
              alt="Logo"
              className="w-[180px] h-[180px] object-contain z-10 relative"
              initial={{ scale: 0.2, opacity: 0, rotateY: 90 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotateY: 0,
                filter: [
                  "drop-shadow(0 0 10px rgba(255,255,255,0.4))", 
                  "drop-shadow(0 0 20px rgba(255,255,255,0.6))", 
                  "drop-shadow(0 0 10px rgba(255,255,255,0.4))"
                ]
              }}
              transition={{ 
                duration: 1.2,
                delay: 0.3,
                filter: {
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />

            {/* Orbital Rings with Enhanced Animation */}
            {[1.2, 1.4].map((scale, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full border border-white/10"
                style={{ 
                  width: `${scale * 100}%`, 
                  height: `${scale * 100}%`, 
                  left: `${(1 - scale) * 50}%`, 
                  top: `${(1 - scale) * 50}%` 
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  rotate: index % 2 === 0 ? [0, 360] : [360, 0]
                }}
                transition={{ 
                  scale: { duration: 0.8, delay: 0.5 + (index * 0.2) },
                  opacity: { duration: 0.8, delay: 0.5 + (index * 0.2) },
                  rotate: { 
                    duration: 20 + (index * 5), 
                    repeat: Infinity, 
                    ease: "linear" 
                  }
                }}
              />
            ))}
          </motion.div>

          {/* Enhanced Loading Text */}
          <motion.div
            className="absolute bottom-10 md:bottom-[10%] left-1/2 transform -translate-x-1/2 text-white/90 font-light tracking-widest text-center w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 1,
              duration: 0.6
            }}
          >
            <div className="flex items-center justify-center space-x-4">
              {/* Animated Loading Text */}
              <div className="flex space-x-1">
                {"LOADING".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-sm sm:text-base uppercase font-extralight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      textShadow: [
                        "0 0 5px rgba(255,255,255,0.3)",
                        "0 0 10px rgba(255,255,255,0.5)",
                        "0 0 5px rgba(255,255,255,0.3)"
                      ]
                    }}
                    transition={{
                      delay: 1 + (i * 0.1),
                      duration: 0.4,
                      textShadow: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Animated Loading Dots */}
              <div className="flex space-x-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-white/80"
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;