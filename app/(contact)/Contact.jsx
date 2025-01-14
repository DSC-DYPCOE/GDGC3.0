"use client";
import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import UpcomingEvents from './UpcomingEvent';
import sampleImage from "../assets/anvi.jpg"
import PreviousEvents from './PreviousEvent';

const EventsSection = () => {
  const { theme, setTheme } = useTheme();

  const stats = [
    { number: "15", label: "Events", textColor: "text-red-500 dark:text-red-400" },
    { number: "10", label: "Workshop", textColor: "text-green-500 dark:text-green-400" },
    { number: "100+", label: "Members", textColor: "text-yellow-500 dark:text-yellow-400" }
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            EVENTS <span className="text-blue-500">&</span> WORKSHOPS
          </h2>
        </div>

        {/* Stats Grid with Decorative Elements */}
        <div className="relative">
          {/* Left side confetti - Hidden on mobile, visible on larger screens */}
       <div className="hidden lg:block absolute left-0 top-0 h-full">
  <div className="relative w-48 h-full"> {/* Increased width */}
    <div className="absolute w-12 h-4 md:w-16 md:h-6 bg-pink-400 rotate-45 top-[10%] -left-16" /> {/* Increased size */}
    <div className="absolute w-8 h-4 md:w-12 md:h-6 bg-green-400 rotate-12 top-[25%] -left-20" /> {/* Increased size */}
    <div className="absolute w-12 h-4 md:w-16 md:h-6 bg-yellow-400 -rotate-45 top-[40%] -left-12" /> {/* Increased size */}
    <div className="absolute w-8 h-4 md:w-12 md:h-6 bg-purple-400 rotate-[60deg] top-[55%] -left-16" /> {/* Increased size */}
    <div className="absolute w-12 h-4 md:w-16 md:h-6 bg-blue-400 -rotate-12 top-[70%] -left-20" /> {/* Increased size */}
    <div className="absolute w-8 h-4 md:w-12 md:h-6 bg-red-400 rotate-[30deg] top-[85%] -left-12" /> {/* Increased size */}
  </div>
</div>

<div className="hidden lg:block absolute right-0 top-0 h-full">
  <div className="relative w-48 h-full"> {/* Increased width */}
    <div className="absolute w-12 h-4 md:w-16 md:h-6 bg-pink-400 -rotate-45 top-[10%] -right-16" /> {/* Increased size */}
    <div className="absolute w-8 h-4 md:w-12 md:h-6 bg-green-400 -rotate-12 top-[25%] -right-20" /> {/* Increased size */}
    <div className="absolute w-12 h-4 md:w-16 md:h-6 bg-yellow-400 rotate-45 top-[40%] -right-12" /> {/* Increased size */}
    <div className="absolute w-8 h-4 md:w-12 md:h-6 bg-purple-400 -rotate-[60deg] top-[55%] -right-16" /> {/* Increased size */}
    <div className="absolute w-12 h-4 md:w-16 md:h-6 bg-blue-400 rotate-12 top-[70%] -right-20" /> {/* Increased size */}
    <div className="absolute w-8 h-4 md:w-12 md:h-6 bg-red-400 -rotate-[30deg] top-[85%] -right-12" /> {/* Increased size */}
  </div>
</div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative p-6 rounded-lg transition-shadow"
              >
                <div className="text-6xl font-bold mb-2 text-gray-900 dark:text-white">
                  {stat.number}
                </div>
                <div className={`text-xl ${stat.textColor} font-semibold`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <UpcomingEvents />
        <PreviousEvents />
      </div>
    </div>
  );
};

export default EventsSection;