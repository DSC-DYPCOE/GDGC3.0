import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CyberSecurityHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: false,
      startEvent: 'DOMContentLoaded',
    });
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div 
        className="relative w-full max-w-6xl bg-black py-12 px-8 rounded-xl overflow-hidden ml-16 mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 bg-black"></div>

        <div className="flex items-center gap-32 relative z-10 ml-16">
          {/* Left side - CyberSecurity Image */}
          <div 
            className="flex-shrink-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="w-48 h-48 rounded-full flex items-center justify-center shadow-lg">
              <Image
                src="/CyberPassword.png"
                alt="CyberSecurity"
                width={180}
                height={140}
                className="text-[#0F9D58]"
                data-aos="fade-in"
                data-aos-delay="500"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div 
            className="flex-grow max-w-2xl"
            data-aos="slide-left"
            data-aos-delay="400"
          >
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span className="text-[#0F9D58]">Cyber</span>
              <span className="text-white"> Security</span>
            </h1>
            <p 
              className="text-gray-200 text-lg md:text-xl mb-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              With the exponential rise in the digital world, cyberattacks are growing at an alarming rate. Learn how to keep your applications safe in this world of information technology.
            </p>
            <button 
              className="bg-[#0F9D58] text-black px-8 py-3 rounded-full text-lg font-medium flex items-center gap-3 hover:bg-green-500 transition-colors"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityHero;