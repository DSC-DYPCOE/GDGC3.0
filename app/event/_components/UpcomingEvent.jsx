import Image from 'next/image';
import React from 'react';
import Android from '../../assets/event.png';

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
            {/* Card content */}
            <div className="p-4">
              {/* Image */}
              <div className="bg-[#1a1b35]  overflow-hidden mb-4">
                <Image
                  src={Android}
                  alt="Flutter Forward Event"
                  className="w-full h-[300px] object-cover p-4"
                  width={300}
                  height={300}
                />
              </div>

              {/* Event Details */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  FLUTTER FORWARD
                </h3>
                <p className="text-gray-600 mb-4">10 - 11 January 2023</p>

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