import React from 'react';
import MLIMgae from "../assets/ml.jpg"
const Android="https://imgs.search.brave.com/1DO3Mtyws24Bi67lvrS1NNLrU0Y3VZMRNArYoVuXowg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/YWdlLmdvb2dsZWFw/aXMuY29tL3dlYmRl/c2lnbmxlZGdlci5w/dWIubmV0d29yay9X/REwvMzEwYTI5YTMt/YW5kcm9pZC1ncmVl/bi05NzB4NjAwLnBu/Zw"
const Flutter="https://imgs.search.brave.com/gRnRKSOWvGRrXPT8FRbKC1iKRg7-0kipTZ1PomPefKM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Ru/ZmllbGQvZmx1dHRl/cl9zdmcvN2QzNzRk/NzEwNzU2MWNiZDkw/NmQ3YzBjYTI2ZmVm/MDJjYzAxZTdjOC9l/eGFtcGxlL2Fzc2V0/cy9mbHV0dGVyX2xv/Z28uc3ZnP3Nhbml0/aXplPXRydWU"
const Cloud = "https://imgs.search.brave.com/zgB1M3DHVcJzVNX1r4y5aYLuldWQ5CiAu4k7TS0Es3I/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/Z29vZ2xlY2xvdWRj/b21tdW5pdHkuY29t/L2h0bWwvYXNzZXRz/L3NvY2lhbC1pY29u/LWdvb2dsZS1jbG91/ZC5wbmc";
const WebDev = "https://imgs.search.brave.com/rDUzbO8Ln_3P4ACI0NobgvaX3isjy-pQWJe2JIJdIc0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlnaHRob3VzZWxh/YnMuY2EvYXNzZXRz/L2ljb25zL2h0bWxh/bmRjc3MtYjBiM2My/Y2ZlZjk0MGE5MjI1/YjNkNWFlMTQ0YzQ4/NzEwOTQ2NzY4ZGZj/ZTFiMzYxMGU1OThj/NjUzZDBmNzFjZS5w/bmc";
const MLWorkshop = "https://imgs.search.brave.com/uK2hvEwi5Wiri4eiisOET6ZQAPK_ANB9zUYJ2G1tSOs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzY3LzA2LzEx/LzM2MF9GXzk2NzA2/MTEyN183SHo0dk9P/ZjB0SVFnU0JnQTNN/d1hRM0RyUUg5UGU1/UC5qcGc";
const CyberSecurity = "https://imgs.search.brave.com/ZtBxy7kl0qBnweA_3bgPHnPLeIe0Tvg3iJA-QtARHE0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzY4LzE2LzAz/LzM2MF9GXzU2ODE2/MDM1M19ReWRNOU5C/Z2I5TkdPVXp4emZ6/UzZwenVvbkZzOGlz/eC5qcGc";
const DevFest = "https://imgs.search.brave.com/KoG2yVw6yKYMXxzWXThnGcqBk8A_WrBv-ZR47s6Dwnc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXJzLmdvb2ds/ZS5jb20vc3RhdGlj/L2V2ZW50cy9pbWFn/ZXMvZGV2ZmVzdC0y/MDI0LnBuZw";
const Hackathon = "https://imgs.search.brave.com/VsgLnuOkNW4nDnGQwvgnCWd-zRRdz_BRcZKDOgq0jnE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/NDExNjY2OC92ZWN0/b3IvaGFja2F0aG9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1pQjVLdVF4dUZU/VEZibGF2a0ZtQXlQ/Vi1fdlNHT1dDYVMz/S3dzQ1MyYU1NPQ";
const CodeJam = "https://imgs.search.brave.com/ZuTRXtB-Jf6vE3T-plZrNr0hF78a7hOlJUDSUSYd-38/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vVDNUQnFu/WlFVNUFET2tFVnUt/WmhDa2IyNUQ2UmVF/UWViaVF5cHc5TzlG/by9yczpmaXQ6NTYw/OjMyMDoxOjAvZzpj/ZS9hSFIwY0hNNkx5/OTFjR3h2L1lXUXVk/MmxyYVcxbFpHbGgv/TG05eVp5OTNhV3Rw/Y0dWay9hV0V2WTI5/dGJXOXVjeTkwL2FI/VnRZaTg0THpnNUww/ZHYvYjJkc1pWOURi/MlJsWDBwaC9iVjlz/YjJkdkxuQnVaeTgy/L05EQndlQzFIYjI5/bmJHVmYvUTI5a1pW/OUtZVzFmYkc5bi9i/eTV3Ym1j.jpeg";

const EventCard = ({ title, date, imgSrc, badgeIcon }) => {
  return (
    <div className="relative pb-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full transition-transform hover:scale-105">
        <div className="p-4">
          <div className="bg-[#1a1b35] rounded-lg overflow-hidden mb-4 h-[300px] flex items-center justify-center">
            <img src={imgSrc} alt={title} className="h-full object-contain" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{date}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors mb-2">Know More</button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
        <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">{badgeIcon}</div>
      </div>
    </div>
  );
};

const PreviousEvents = () => {
  const { Zap } = require('lucide-react');
  const events = [
    { id: 1, title: "FLUTTER FORWARD", date: "10 - 11 January 2023", imgSrc: Flutter, badgeIcon: <Zap className="w-6 h-6 text-white" /> },
    { id: 2, title: "CLOUD STUDY JAM", date: "15 - 16 February 2023", imgSrc: Cloud, badgeIcon: <Zap className="w-6 h-6 text-white" /> },
    { id: 3, title: "ANDROID STUDY JAM", date: "20 - 21 March 2023", imgSrc: Android, badgeIcon: <Zap className="w-6 h-6 text-white" /> },
    { id: 4, title: "WEB DEV BOOTCAMP", date: "5 - 6 April 2023", imgSrc: WebDev, badgeIcon: <Zap className="w-6 h-6 text-white" /> },
    { id: 5, title: "ML WORKSHOP", date: "12 - 13 May 2023", imgSrc: MLWorkshop, badgeIcon: <Zap className="w-6 h-6 text-white" /> },
    { id: 6, title: "CYBER SECURITY", date: "18 - 19 June 2023", imgSrc: CyberSecurity, badgeIcon: <Zap className="w-6 h-6 text-white" /> },
    { id: 7, title: "DEVFEST 2023", date: "22 - 23 July 2023", imgSrc: DevFest, badgeIcon: <Zap className="w-6 h-6 text-white" /> },
    { id: 8, title: "HACKATHON", date: "1 - 2 August 2023", imgSrc: Hackathon, badgeIcon: <Zap className="w-6 h-6 text-white" /> },
    { id: 9, title: "CODE JAM", date: "10 - 11 September 2023", imgSrc: CodeJam, badgeIcon: <Zap className="w-6 h-6 text-white" /> },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">PREVIOUS EVENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <EventCard key={event.id} title={event.title} date={event.date} imgSrc={event.imgSrc} badgeIcon={event.badgeIcon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviousEvents;
