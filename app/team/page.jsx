"use client";

import React from 'react';
import { Users } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const teamMembersLead = [
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


const teamMembersCoordinators = [
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
    <div 
      style={{ maxWidth: '478.36px', width: '100%', height: 'auto', minHeight: '269.89px' }} 
      className="rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300" id='TeamPage'
    >
      {/* Main content */}
      <div className="flex flex-col md:flex-row h-full bg-gray-50 relative">
        {/* Left content */}
        <div className="flex-1 p-4 md:p-6 relative">      
          {/* Content */}
          <div className="relative z-10">
            {/* Logo image */}
            <div className="mb-4 relative">
              {/* Top yellow part */}
              <div
                className="absolute w-[100px] h-[27px] bg-[#F4B400F0] rounded-full mx-auto hidden md:block"
                style={{
                  marginTop: "17px",
                  marginLeft: "130px",
                  transform: "scale(1.2)",
                  transformOrigin: "center bottom",
                }}
              />

              <div className="w-12 md:w-14 h-12 md:h-14 rounded-lg flex items-center justify-center">
                <img 
                  src="/GDGC_Icon.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                {member.name.split(' ')[0].toUpperCase()}
              </h2>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                {member.name.split(' ')[1].toUpperCase()}
              </h2>
            </div>
            
            <div className="space-y-2">
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">{member.role}</h3>
                <div className="absolute top-0 left-0 w-full z-[2] hidden md:block" style={{ left: "-150px" }}>
                  {/* Green part at the bottom */}
                  <div
                    className="w-[250px] h-[35px] bg-[#30A953] rounded-full mx-auto"
                    style={{
                      marginTop: "190px",
                      transform: "scale(1.2)",
                      transformOrigin: "center bottom",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 h-48 md:h-full overflow-hidden relative">
          {/* Red Shape */}
          <div
            className="absolute w-[120px] h-[35px] bg-[#EA4335] rounded-full mx-auto z-0 hidden md:block"
            style={{
              marginTop: "10px",
              marginLeft: "170px",
              transform: "scale(1.2)",
              transformOrigin: "center bottom",
            }}
          />
          {/* Blue Shape */}
          <div
            className="absolute w-[180px] h-[35px] bg-[#4286F5] rounded-full mx-auto z-0 hidden md:block"
            style={{
              marginTop: "101px",
              marginLeft: "80px",
              transform: "scale(1.2)",
              transformOrigin: "center bottom",
            }}
          />
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover z-10 relative"
          />
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Meet Our Team ⚡
        </h2>

        {/* Leads Section */}
        <div className="flex justify-center mb-6 md:mb-10">
          <div className="w-48 md:w-64 px-6 md:px-10 py-3 md:py-4 bg-white rounded-full shadow-md border border-gray-300 text-center">
            <h1 className="text-xl md:text-2xl font-bold text-black">Leads</h1>
          </div>
        </div>

        {/* Swiper for Leads */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={-30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 250,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: -20 },
            480: { slidesPerView: 1.5, spaceBetween: -30 },
            640: { slidesPerView: 2, spaceBetween: -40 },
            1024: { slidesPerView: 3, spaceBetween: -60 },
          }}
        >
          {teamMembersLead.map((member) => (
            <SwiperSlide key={member.id}>
              <IdCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Coordinators Section */}
        <div className="flex justify-center mt-12 md:mt-16 mb-6 md:mb-10">
          <div className="w-48 md:w-64 px-6 md:px-10 py-3 md:py-4 bg-white rounded-full shadow-md border border-gray-300 text-center">
            <h1 className="text-xl md:text-2xl font-bold text-black">Coordinators</h1>
          </div>
        </div>

        {/* Swiper for Coordinators */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={-30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 250,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: -20 },
            480: { slidesPerView: 1.5, spaceBetween: -30 },
            640: { slidesPerView: 2, spaceBetween: -40 },
            1024: { slidesPerView: 3, spaceBetween: -60 },
          }}
        >
          {teamMembersCoordinators.map((member) => (
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