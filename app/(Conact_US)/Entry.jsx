"use client";
import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import Mail from './Mail.jsx';
const Entry = () => {
  const { theme, setTheme } = useTheme();



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

      <Mail />

      </div>
    </div>
  );
};

export default Entry;