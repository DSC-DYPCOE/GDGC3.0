import React from 'react';

// Event Card Component
const EventCard = ({ title, date, imgSrc, badgeIcon }) => {
  return (
    <div className="relative pb-8">
      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full transition-transform hover:scale-105">
        <div className="p-4">
          <div className="bg-[#1a1b35] rounded-lg overflow-hidden mb-4 h-[300px] flex items-center justify-center">
            <div className="text-white p-4">
              {imgSrc}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 mb-4">
              {date}
            </p>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors mb-2">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Badge Circle */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
        <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
          {badgeIcon}
        </div>
      </div>
    </div>
  );
};

const PreviousEvents = () => {
  const { 
    Smartphone, 
    Cloud, 
    Globe, 
    Brain, 
    Shield, 
    Code, 
    Terminal, 
    Coffee,
    Layout,
    Zap  // For the badge icon
  } = require('lucide-react');

  const events = [
    { 
      id: 1, 
      title: "FLUTTER FORWARD", 
      date: "10 - 11 January 2023",
      icon: <Smartphone className="w-32 h-32" />,
      badgeIcon: <Zap className="w-6 h-6 text-white" />
    },
    { 
      id: 2, 
      title: "CLOUD STUDY JAM", 
      date: "15 - 16 February 2023",
      icon: <Cloud className="w-32 h-32" />,
      badgeIcon: <Zap className="w-6 h-6 text-white" />
    },
    { 
      id: 3, 
      title: "ANDROID STUDY JAM", 
      date: "20 - 21 March 2023",
      icon: <Smartphone className="w-32 h-32" />,
      badgeIcon: <Zap className="w-6 h-6 text-white" />
    },
    { 
      id: 4, 
      title: "WEB DEV BOOTCAMP", 
      date: "5 - 6 April 2023",
      icon: <Globe className="w-32 h-32" />,
      badgeIcon: <Zap className="w-6 h-6 text-white" />
    },
    { 
      id: 5, 
      title: "ML WORKSHOP", 
      date: "12 - 13 May 2023",
      icon: <Brain className="w-32 h-32" />,
      badgeIcon: <Zap className="w-6 h-6 text-white" />
    },
    { 
      id: 6, 
      title: "CYBER SECURITY", 
      date: "18 - 19 June 2023",
      icon: <Shield className="w-32 h-32" />,
      badgeIcon: <Zap className="w-6 h-6 text-white" />
    },
    { 
      id: 7, 
      title: "DEVFEST 2023", 
      date: "22 - 23 July 2023",
      icon: <Code className="w-32 h-32" />,
      badgeIcon: <Zap className="w-6 h-6 text-white" />
    },
    { 
      id: 8, 
      title: "HACKATHON", 
      date: "1 - 2 August 2023",
      icon: <Terminal className="w-32 h-32" />,
      badgeIcon: <Zap className="w-6 h-6 text-white" />
    },
    { 
      id: 9, 
      title: "CODE JAM", 
      date: "10 - 11 September 2023",
      icon: <Coffee className="w-32 h-32" />,
      badgeIcon: <Zap className="w-6 h-6 text-white" />
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          PREVIOUS EVENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              imgSrc={event.icon}
              badgeIcon={event.badgeIcon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousEvents;
