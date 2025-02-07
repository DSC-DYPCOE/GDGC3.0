import React from 'react';
import Image from 'next/image';

const AndroidHero = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full max-w-6xl bg-black py-12 px-8 rounded-xl overflow-hidden ml-16 mb-12"> {/* Reduced padding and bottom margin */}
        {/* Background Layer */}
        <div className="absolute inset-0 bg-black"></div>

        <div className="flex items-center gap-32 relative z-10 ml-16">
          {/* Left side - Android Logo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center shadow-lg"> {/* Adjusted image size */}
              <Image
                src="/Group-Android.png"
                alt="Android Logo"
                width={140}  /* Adjusted width */
                height={140} 
                className="text-green-500"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-grow max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-green-500">Android</span>
              <span className="text-white"> Development</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-6">
              Every year, Google developers release exciting new updates to the world's most popular operating system. We always have sessions to keep you updated and mastering the latest trends in modern Android development.
            </p>
            <button className="bg-green-500 text-black px-8 py-3 rounded-full text-lg font-medium flex items-center gap-3 hover:bg-green-400 transition-colors">
              CodeLabs
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

export default AndroidHero;
