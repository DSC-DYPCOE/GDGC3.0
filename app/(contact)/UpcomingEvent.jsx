import React from 'react';
import sampleImage from "../assets/d2.jpg"
const UpcomingEvents = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          UPCOMING EVENTS
        </h2>

        {/* Event Card */}
        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[300px] transition-transform hover:scale-105">
            {/* Card content wrapper with white background and padding */}
            <div className="p-4">
              {/* Image container with dark background */}
              <div className="bg-[#1a1b35] rounded-lg overflow-hidden mb-4">
            <img
                src={sampleImage}
                alt="Flutter Forward Event"
                className="w-full h-[200px] object-contain p-4"
            />
            </div>
              {/* Event Details */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  FLUTTER FORWARD
                </h3>
                <p className="text-gray-600 mb-4">
                  10 - 11 January 2023
                </p>
                
                {/* Register Button */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;