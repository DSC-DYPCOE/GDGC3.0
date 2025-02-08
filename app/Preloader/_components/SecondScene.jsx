import { motion } from "framer-motion"

const SecondScene = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full">
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-blue-900/30 via-purple-900/20 to-black"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Particle effect */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -Math.random() * 500],
              x: [null, (Math.random() - 0.5) * 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        ))}

        {/* Welcome text */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h1
            className="text-6xl font-bold mb-8"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
          >
            Welcome to GDGC
          </motion.h1>
          <motion.p
            className="text-2xl max-w-2xl"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            Discover. Learn. Innovate.
          </motion.p>
        </motion.div>

        {/* Animated circles */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-white/20"
            style={{
              width: `${i * 200}px`,
              height: `${i * 200}px`,
              left: `calc(50% - ${i * 100}px)`,
              top: `calc(50% - ${i * 100}px)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default SecondScene

