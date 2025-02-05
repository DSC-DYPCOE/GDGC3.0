"use client"
import React, { useEffect, useCallback } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { Instagram, Linkedin, Github, Youtube, Twitter, DiscIcon as Discord } from "lucide-react"
import { useInView } from "react-intersection-observer"
import DomainShowcase from "./GDGC_Domain"
import gdgcImgae from "../../assets/gdgc_logo.png"
import Image from 'next/image';
const GDSCInfoSection = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const SocialLink = useCallback(
    ({ Icon, color, href }) => (
      <motion.a
        href={href}
        className="p-4 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-red-500/30 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        whileHover={{
          scale: 1.2,
          rotate: 360,
        }}
        whileTap={{ scale: 0.9 }}
        aria-label={`Visit our ${Icon.name} page`}
      >
        <Icon size={32} color={color} />
      </motion.a>
    ),
    [],
  )

  return (
    <motion.div
      ref={ref}
      className="min-h-screen bg-[#0a0a0a] text-white py-8 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div className="flex items-center justify-center gap-4 mb-12" variants={itemVariants}>
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
            animate={{
              y: [-10, 10],
              transition: {
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            What is GDSC?
          </motion.h1>
          <motion.span
            className="text-4xl sm:text-5xl md:text-6xl"
            animate={{
              rotate: [0, 20, -20, 0],
              scale: [1, 1.2, 1],
              transition: { duration: 3, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            🚀
          </motion.span>
        </motion.div>

        {/* Main Description */}
        <motion.div className="w-full max-w-4xl mx-auto mb-12 px-4 text-center" variants={itemVariants}>
          <motion.p
            className="text-xl sm:text-2xl mb-6 leading-relaxed font-bold"
            animate={{
              color: ["#fff", "#a8b2d1", "#fff"],
              transition: { duration: 5, repeat: Number.POSITIVE_INFINITY },
            }}
          >
            Google Developer Student Clubs is a student-led program supported by Google. It's a dynamic platform for
            students to learn, collaborate on web and mobile development, machine learning, and more.
          </motion.p>
          <motion.p className="text-lg sm:text-xl text-gray-300">
            GDSC fosters skill-building, networking, and grants access to Google's resources and expertise, making it an
            invaluable opportunity for tech enthusiasts.
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex justify-center flex-wrap gap-6 mb-12 px-4" variants={itemVariants}>
          {[
            { Icon: Instagram, color: "#E1306C", href: "#instagram" },
            { Icon: Linkedin, color: "#0077B5", href: "#linkedin" },
            { Icon: Github, color: "#333", href: "#github" },
            { Icon: Discord, color: "#7289DA", href: "#discord" },
            { Icon: Youtube, color: "#FF0000", href: "#youtube" },
            { Icon: Twitter, color: "#1DA1F2", href: "#twitter" },
          ].map((social, index) => (
            <SocialLink key={index} {...social} />
          ))}
        </motion.div>

        {/* Info Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-4 mb-16"
          variants={itemVariants}
        >
          {[
            {
              title: "Concept of GDSC",
              content:
                "GDSC provides a space for students to explore diverse tech fields, focusing on skill development and networking, ideal for tech enthusiasts and aspiring developers.",
              bgColor: "from-purple-500/20 to-pink-500/20",
              icon: "💡",
            },
            {
              title: "Target Audience",
              content:
                "GDSC is tailored for tech-savvy university students seeking to improve coding skills, collaborate on projects, and gain real-world tech experience.",
              bgColor: "from-pink-500/20 to-red-500/20",
              icon: "🎯",
            },
            {
              title: "Why GDSC?",
              content:
                "GDSC is a smart choice for students to focus on practical tech skill development through real-world projects and networking for professional growth.",
              bgColor: "from-blue-500/20 to-teal-500/20",
              icon: "🚀",
            },
            {
              title: "Other Concepts",
              content:
                "GDSC fosters community and student leadership, inspiring collaboration on tech events and initiatives. It's a hub for growth, learning, and connections.",
              bgColor: "from-teal-500/20 to-green-500/20",
              icon: "🌟",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl bg-gradient-to-br ${card.bgColor} backdrop-blur-md border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300`}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-4xl mb-4"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {card.title}
              </h3>
              <p className="text-lg sm:text-xl text-gray-300">{card.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Domain Showcase Section */}
        {/* <DomainShowcase /> */}
      </div>

      {/* Floating GDSC Logo */}
      <motion.div
        className="fixed bottom-8 right-8 w-20 h-20 sm:w-24 sm:h-24"
        animate={{
          y: [-10, 10],
          rotate: [0, 360],
          transition: {
            y: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
            rotate: {
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          },
        }}
      >
        {/* <Image 
  src="/gdgc_logo.png" 
  alt="GDSC Logo" 
  width={500} // Replace with the desired width
  height={500} // Replace with the desired height
  className="w-full h-full object-contain" 
  priority // Ensures the image loads immediately
/> */}
      </motion.div>

      {/* Particle Effect */}
      <ParticleEffect />
    </motion.div>
  )
}

const ParticleEffect = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            style={{
              boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.3)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default GDSCInfoSection

