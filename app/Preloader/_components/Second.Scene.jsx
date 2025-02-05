import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const containers = [
  {
    title: "Create",
    subtitle: "Building Tomorrow's Innovations",
    gradient: "from-pink-600 via-rose-600 to-red-600",
    icon: "🚀",
  },
  {
    title: "Learn",
    subtitle: "Expanding Knowledge Horizons",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    icon: "📚",
  },
  {
    title: "Understand",
    subtitle: "Deepening Your Insights",
    gradient: "from-emerald-600 via-green-600 to-teal-600",
    icon: "💡",
  },
  {
    title: "Transform",
    subtitle: "Reshaping The Future",
    gradient: "from-orange-600 via-amber-600 to-yellow-600",
    icon: "✨",
  },
  {
    title: "Educate",
    subtitle: "Sharing Knowledge Together",
    gradient: "from-purple-600 via-fuchsia-600 to-pink-600",
    icon: "🎓",
  },
];

const SecondScene = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const controls = useAnimation();
  const backgroundControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await backgroundControls.start({
        background: [
          "radial-gradient(circle at 50% 50%, rgba(29,78,216,0.3) 0%, rgba(88,28,135,0.2) 50%, rgba(0,0,0,1) 100%)",
          "radial-gradient(circle at 30% 70%, rgba(88,28,135,0.3) 0%, rgba(29,78,216,0.2) 50%, rgba(0,0,0,1) 100%)",
          "radial-gradient(circle at 70% 30%, rgba(29,78,216,0.3) 0%, rgba(88,28,135,0.2) 50%, rgba(0,0,0,1) 100%)",
        ],
        transition: {
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      });
    };
    sequence();
  }, [backgroundControls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= containers.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    initial: (index) => ({
      y: index * 20,
      opacity: 1,
      scale: 1 - index * 0.03,
      filter: "brightness(1)",
    }),
    animate: (index) => ({
      y: index <= activeIndex ? [index * 20, -20, -window.innerHeight * 0.6] : index * 20 - (activeIndex + 1) * 20, // Moves straight up
      opacity: index <= activeIndex ? [1, 1, 0] : 1,
      scale: index <= activeIndex ? [1 - index * 0.03, 1.1, 0.8] : 1 - index * 0.03,
      x: 0, // Remove leftward movement
      filter: index <= activeIndex
        ? ["brightness(1) blur(0px)", "brightness(1.2) blur(1px)", "brightness(0.7) blur(2px)"]
        : "brightness(1) blur(0px)",
    }),
  };

  return (
    <motion.div className="fixed inset-0 bg-black overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="absolute inset-0" animate={backgroundControls} />
      <div className="relative h-screen flex items-center justify-center">
        {containers.map((container, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, ease: "easeInOut", times: [0, 0.4, 1] }}
            className={`absolute p-12 rounded-[2rem] backdrop-blur-lg bg-gradient-to-r ${container.gradient} bg-opacity-20 shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10 w-full max-w-[42rem]`}
            style={{ zIndex: containers.length - index, perspective: "2000px", transformStyle: "preserve-3d" }}
          >
            <motion.div className="relative z-10">
              <motion.div className="flex items-center justify-center mb-6 gap-4">
                <motion.span className="text-5xl">{container.icon}</motion.span>
                <motion.h2 className="text-6xl font-bold text-white" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>
                  {container.title}
                </motion.h2>
              </motion.div>
              <motion.p className="text-xl text-white/80 text-center">{container.subtitle}</motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SecondScene;
