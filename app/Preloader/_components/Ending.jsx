import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  const [hoveredNav, setHoveredNav] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Circuit Board Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M0 25h50 M25 0v50 M12.5 12.5l25 25 M37.5 12.5l-25 25"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5"/>
            <circle cx="25" cy="25" r="2" fill="currentColor"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Hexagon Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse">
            <path d="M25 0l25 14.4v28.8L25 57.8 0 43.4V14.4z" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)"/>
        </svg>
      </div>

      {/* Glowing Lines */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${30 + i * 20}%`,
              background: 'linear-gradient(90deg, transparent, rgba(66, 133, 244, 0.3), transparent)',
              animation: `glow ${3 + i}s infinite linear`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Top Section - Logo and Description */}
        <div className="pt-20 text-center">
          <div className="relative inline-block mb-8">
            <img src="/api/placeholder/64/64" alt="GDSC Logo" className="w-24 h-24" />
            <div className="absolute -inset-4 border border-blue-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mb-12">
            <h2 className="text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent animate-pulse">
              GOOGLE DEVELOPER
            </h2>
            <p className="text-3xl font-bold text-gray-400 tracking-wider">STUDENTS CLUBS VIT</p>
          </div>
         
        </div>

        {/* Middle Section - Email */}
        <div className="mt-24 flex justify-center">
          <a
            href="mailto:dscvitvellore@gmail.com"
            className="group relative inline-flex items-center space-x-4 px-10 py-5 bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded-lg"
          >
            <Mail className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
              dscvitvellore@gmail.com
            </span>
            <div className="absolute inset-0 border border-gray-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Bottom Section - Navigation */}
        <div className="mt-24 pb-20">
          <div className="flex justify-center items-center space-x-20">
            {['ACHIEVEMENTS', 'EVENTS', 'TEAM', 'PROJECTS'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative"
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <span className="text-3xl font-extrabold text-gray-400 group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
                <div className={`
                  absolute -bottom-4 left-0 w-full h-1.5
                  bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 
                  transform scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300 origin-left
                `} />
                <div className={`
                  absolute -inset-x-6 -inset-y-3
                  bg-gradient-to-r from-blue-500/5 to-green-500/5
                  rounded-lg opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                `} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes glow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Footer;