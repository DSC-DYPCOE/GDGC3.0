import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebDevHero = () => {
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
        className="relative w-full max-w-6xl bg-black py-8 md:py-12 px-4 md:px-8 rounded-xl overflow-hidden mx-4 md:ml-16 mb-8 md:mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 bg-black"></div>

        <div className="flex flex-col-reverse md:flex-row items-center md:gap-24 relative z-10 md:ml-16">
          {/* Left side - Content */}
          <div 
            className="flex-grow max-w-2xl text-center md:text-left mt-8 md:mt-0"
            data-aos="slide-right"
            data-aos-delay="400"
          >
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span className="text-[#F4B400]">Web</span>
              <span className="text-white"> Development</span>
            </h1>
            <p 
              className="text-gray-200 text-base md:text-lg lg:text-xl mb-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Learn the core foundations of a delightful web experience both for the user and developer. Stay up to tabs with emerging and trending technologies. Get access to a guided, tutorial and hands-on coding experience.
            </p>
            <button 
              className="bg-[#F4B400] text-black px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-medium flex items-center gap-2 md:gap-3 hover:bg-yellow-400 transition-colors mx-auto md:mx-0"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              CodeLabs
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Right side - Image */}
          <div 
            className="flex-shrink-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center shadow-lg">
              <Image
                src="/web-development.png"
                alt="Web Development Logo"
                width={200}
                height={140}
                className="text-yellow-500 scale-75 md:scale-100"
                data-aos="fade-in"
                data-aos-delay="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevHero;