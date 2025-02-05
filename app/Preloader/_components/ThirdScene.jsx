"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ThirdScene = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-black overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1.5,
        }}
        className="relative"
      >
        <motion.div
          className="w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Welcome to GDGC
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ThirdScene

