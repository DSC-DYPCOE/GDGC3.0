import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Techfest', path: '/techfest' },
    { name: 'Event', path: '/event' },
    { name: 'Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      {/* Menu Button */}
      <div className="absolute top-6 right-6 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-3 hover:bg-white/10 rounded-full transition-colors duration-300"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation Overlay */}
      <div className={`fixed inset-0  z-40 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              href={item.path}
              className="relative group"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative overflow-hidden rounded-lg  w-64 p-4 transition-all duration-300 group-hover:bg-white/10">
                <span className="block text-white text-xl font-medium text-center">
                  {item.name}
                </span>
                {/* Animated border */}
                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavigationMenu;