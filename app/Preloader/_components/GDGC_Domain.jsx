import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Smartphone, Globe, Shield, Paintbrush, Database, BotIcon as Robot, Code, Cpu } from "lucide-react"
import Image from 'next/image';
const domains = [
  { 
    name: "Android Dev", 
    icon: Smartphone, 
    color: "#3DDC84",
    description: "Build cutting-edge mobile applications using Android and Kotlin.",
    gradient: "from-green-400 to-emerald-600"
  },
  { 
    name: "Web Dev", 
    icon: Globe, 
    color: "#F16529",
    description: "Create responsive and dynamic web applications using modern frameworks.",
    gradient: "from-orange-400 to-red-600"
  },
  { 
    name: "Cybersecurity", 
    icon: Shield, 
    color: "#FFD700",
    description: "Learn ethical hacking and protect systems from cyber threats.",
    gradient: "from-yellow-400 to-amber-600"
  },
  { 
    name: "Design", 
    icon: Paintbrush, 
    color: "#FF61F6",
    description: "Master UI/UX principles and create beautiful digital experiences.",
    gradient: "from-pink-400 to-purple-600"
  },
  { 
    name: "Cloud Computing", 
    icon: Database, 
    color: "#4285F4",
    description: "Deploy and scale applications using cloud technologies.",
    gradient: "from-blue-400 to-indigo-600"
  },
  { 
    name: "AI/ML", 
    icon: Robot, 
    color: "#00FFFF",
    description: "Explore machine learning and artificial intelligence applications.",
    gradient: "from-cyan-400 to-teal-600"
  },
  { 
    name: "Blockchain", 
    icon: Code, 
    color: "#F7931A",
    description: "Develop decentralized applications and smart contracts.",
    gradient: "from-amber-400 to-orange-600"
  },
  { 
    name: "IoT", 
    icon: Cpu, 
    color: "#00979D",
    description: "Connect devices and build smart systems.",
    gradient: "from-teal-400 to-cyan-600"
  },
]

const DomainShowcase = () => {
  const [hoveredDomain, setHoveredDomain] = useState(null)
  const [selectedDomain, setSelectedDomain] = useState(null)

  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-black via-purple-900/30 to-blue-900/30 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Explore GDSC Domains
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover exciting technologies and join our community of innovators
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, z: 1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedDomain(selectedDomain === domain ? null : domain)}
              onMouseEnter={() => setHoveredDomain(domain.name)}
              onMouseLeave={() => setHoveredDomain(null)}
            >
              <div className={`
                rounded-xl p-6 h-64 
                bg-gradient-to-br ${domain.gradient}
                bg-opacity-10 backdrop-blur-lg
                border border-white/10
                shadow-[0_0_15px_rgba(0,0,0,0.3)]
                flex flex-col items-center justify-center
                transition-all duration-500
                group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                group-hover:border-white/20
              `}>
                <motion.div
                  animate={{
                    scale: hoveredDomain === domain.name ? 1.2 : 1,
                    rotate: hoveredDomain === domain.name ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl mb-6"
                >
                  <domain.icon 
                    size={56} 
                    className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-center text-white mb-2">
                  {domain.name}
                </h3>
                <p className="text-sm text-center text-white/80">
                  Click to learn more
                </p>
              </div>

              <AnimatePresence>
                {selectedDomain === domain && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-black/95 rounded-xl p-6 flex flex-col items-center justify-center backdrop-blur-lg"
                  >
                    <domain.icon size={40} className={`mb-4 text-${domain.gradient.split('-')[2]}-400`} />
                    <h4 className="text-xl font-bold mb-3">{domain.name}</h4>
                    <p className="text-sm text-center text-gray-300">
                      {domain.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-4 px-4 py-2 rounded-full bg-gradient-to-r ${domain.gradient} text-white text-sm font-semibold`}
                    >
                      Join Workshop
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default DomainShowcase