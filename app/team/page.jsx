"use client";

import React from 'react';
import { Users } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const teamMembers = [
  {
    id: "GDSC-AJ2023",
    name: "Alex Johnson",
    role: "GDSC LEAD",
    image: "/SundarBOI.png",
    badgeColor: "bg-yellow-400"
  },
  {
    id: "GDSC-SL2023",
    name: "Sam Lee",
    role: "TECH LEAD",
    image: "/SundarBOI.png",
    badgeColor: "bg-blue-400"
  },
  {
    id: "GDSC-JS2023",
    name: "Jamie Smith",
    role: "DESIGN LEAD",
    image: "/SundarBOI.png",
    badgeColor: "bg-green-400"
  },
  {
    id: "GDSC-TB2023",
    name: "Taylor Brown",
    role: "ML LEAD",
    image: "/SundarBOI.png",
    badgeColor: "bg-purple-400"
  },
  {
    id: "GDSC-JP2023",
    name: "Jordan Patel",
    role: "WEB LEAD",
    image: "/SundarBOI.png",
    badgeColor: "bg-red-400"
  },
];

const IdCard = ({ member }) => {
  return (
    <div style={{ width: '478.36px', height: '269.89px' }} className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Main content */}
      <div className="flex h-full bg-gray-50 relative">
        {/* Left content */}
        <div className="flex-1 p-6 relative">      
          {/* Content */}
          <div className="relative z-10">
            {/* Logo image */}
            <div className="mb-4">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                <img 
                  src="/GDGC_Icon.png" // Replace with the actual logo path
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                {member.name.split(' ')[0].toUpperCase()}
              </h2>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                {member.name.split(' ')[1].toUpperCase()}
              </h2>
            </div>
            
            <div className="space-y-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{member.role}</h3>
                <p className="text-xs text-gray-500">ID: {member.id}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-1/2 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Meet Our Team ⚡
        </h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={-60}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 250,
            modifier: 1.5,
            slideShadows: true
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active'
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: -30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: -40
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: -60
            }
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <IdCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
