// import React from 'react';
import Image from 'next/image';
import PixelTransition from './PixalTransition';
const TechFestPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden" id='TechfestPage'>
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {/* Title section */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex items-center gap-2 sm:gap-3">
            Techfest 2k25
            <span 
              role="img" 
              aria-label="rocket" 
              className="animate-bounce text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              🚀
            </span>
          </h1>

          {/* Cards Section */}
          <div className="flex gap-6 justify-center flex-wrap max-w-5xl">
            {/* Green Card */}
            <div className="relative group w-72">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl transform transition-transform group-hover:scale-105">
                <div className="absolute inset-0" style={{
                  background: 'repeating-radial-gradient(circle at 50% 50%, transparent 0, #22c55e 40px)',
                  opacity: 0.3
                }}></div>
              </div>
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden">
                <PixelTransition
                  firstContent={
                    <div className="w-full h-full relative">
                      <Image 
                        src="/TypeToSurvive.png"
                        alt="Type To Survive"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "rgba(34, 197, 94, 0.9)"
                      }}
                    >
                      <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>Type To Survive</p>
                    </div>
                  }
                  gridSize={10}
                  pixelColor="#22c55e"
                  animationStepDuration={0.4}
                  className="w-full h-full"
                  aspectRatio="150%"
                />
              </div>
            </div>

            {/* Blue Card */}
            <div className="relative group w-72">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform transition-transform group-hover:scale-105">
                <div className="absolute inset-0" style={{
                  background: 'repeating-radial-gradient(circle at 50% 50%, transparent 0, #3b82f6 40px)',
                  opacity: 0.3
                }}></div>
              </div>
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden">
                <PixelTransition
                  firstContent={
                    <div className="w-full h-full relative">
                      <Image 
                        src="/TechMate.png"
                        alt="Tech Mate"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "rgba(59, 130, 246, 0.9)"
                      }}
                    >
                      <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>Tech Mate</p>
                    </div>
                  }
                  gridSize={10}
                  pixelColor="#3b82f6"
                  animationStepDuration={0.4}
                  className="w-full h-full"
                  aspectRatio="150%"
                />
              </div>
            </div>

            {/* Red Card */}
            <div className="relative group w-72">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl transform transition-transform group-hover:scale-105">
                <div className="absolute inset-0" style={{
                  background: 'repeating-radial-gradient(circle at 50% 50%, transparent 0, #ef4444 40px)',
                  opacity: 0.3
                }}></div>
              </div>
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden">
                <PixelTransition
                  firstContent={
                    <div className="w-full h-full relative">
                      <Image 
                        src="/TechPiece.png"
                        alt="Tech Piece"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "rgba(239, 68, 68, 0.9)"
                      }}
                    >
                      <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>Tech Piece</p>
                    </div>
                  }
                  gridSize={10}
                  pixelColor="#ef4444" 
                  animationStepDuration={0.4}
                  className="w-full h-full"
                  aspectRatio="150%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechFestPage;