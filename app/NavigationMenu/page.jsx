import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('/');

  useEffect(() => {
    setActiveMenu(window.location.pathname);
  }, []);

  const menuItems = [
    { name: 'Info', id: 'InfoPage', icon: '🏠' },
    { name: 'Technology', id: 'TechnologyPage', icon: '🚀' },
    { name: 'Techfest', id: 'TechfestPage', icon: '📅' },
    { name: 'Team', id: 'TeamPage', icon: '👥' },
    { name: 'Contact Us', id: 'ContactPage', icon: '📧' }
  ];

  const scrollToSection = (id) => {
    setIsOpen(false); // Close menu
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Button */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Centered Navigation Menu */}
      <div 
        className={`fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-md z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="w-full max-w-md px-4">
          <div className="flex flex-col items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left"
              >
                <div 
                  className={`group relative overflow-hidden rounded-xl w-full p-4 transition-all duration-300
                    ${activeMenu === item.id ? 'bg-white/20' : 'hover:bg-white/10'}
                  `}
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className={`text-white text-lg font-medium ${
                      activeMenu === item.id ? 'text-blue-400' : ''
                    }`}>
                      {item.name}
                    </span>
                  </div>
                  
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform transition-transform duration-300 ${
                    activeMenu === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationMenu;
