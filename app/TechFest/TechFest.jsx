import React from 'react';
import Image from 'next/image';

const TechFestPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {/* Title section */}
          <h1 className="text-5xl font-bold text-white mb-12 flex items-center gap-3">
            Techfest 2k25
            <span role="img" aria-label="rocket" className="animate-bounce">
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
                <Image 
                  src="/TechEventSample.jpg"
                  alt="Event 1"
                  width={400}
                  height={600}
                  className="object-cover"
                  priority
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
                <Image 
                  src="/TechEventSample.jpg"
                  alt="Event 2"
                  width={400}
                  height={600}
                  className="object-cover"
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
                <Image 
                  src="/TechEventSample.jpg"
                  alt="Event 3"
                  width={400}
                  height={600}
                  className="object-cover"
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