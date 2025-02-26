"use client";
import React from "react";
import NavigationMenu from "@/app/NavigationMenu/page";
import { Menu } from "lucide-react";
import GDGCPage from "@/app/event/page";
import Image from "next/image";
import Tech from "@/app/Technology/page";
import TeamSection from "@/app/team/page";
import Footer from "../../Footer/page";
import TechFestPage from "@/app/TechFest/TechFest";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Modified Grid Overlay with medium-sized squares matching the image */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
      <div 
      className="w-full h-[100vw]" // Height = Width to create a square
      style={{ maxHeight: "100vh" }} // Ensure it doesn't exceed the viewport height
    >
      {/* Horizontal lines - adjusted to create medium-sized grid */}
      {Array.from({ length: 51 }).map((_, index) => (
        <div 
          key={`h-line-${index}`} 
          className="absolute h-[1px] w-full bg-white/15" 
          style={{ top: `${(index * (100 / 50))}%` }} // 50 lines = 2% spacing
        />
      ))}
      
      {/* Vertical lines - adjusted to create medium-sized grid */}
      {Array.from({ length: 51 }).map((_, index) => (
        <div 
          key={`v-line-${index}`} 
          className="absolute w-[1px] h-full bg-white/15" 
          style={{ left: `${(index * (100 / 50))}%` }} // 50 lines = 2% spacing
        />
      ))}

        </div>
      </div>

      {/* Google-colored circles and network graphics */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[3]">
        <Image
          src="/Ellipse91.png"
          alt="Network Graph 1"
          width={80}
          height={200}
          className="absolute top-[0.5%] left-[15%] transform rotate-[25deg]"
        />
        {/* Left side of the Top Yellow Circle */}
        <Image
          src="/Ellipse91.png"
          alt="Network Graph 1"
          width={42}
          height={200}
          className="absolute top-[3.7%] left-[5%] transform rotate-[25deg]"
        />

        <Image
          src="/Ellipse91.png"
          alt="Network Graph 1"
          width={40}
          height={200}
          className="absolute top-[1.5%] left-[55%] transform rotate-[25deg]"
        />

        <Image
          src="/DoubleChain.png"
          alt="Network Graph 2"
          width={80}
          height={150}
          className="absolute top-[2.5%] left-[24%] transform -rotate-12"
        />

        <Image
          src="/FullChain.png"
          alt="Network Graph 5"
          width={400}
          height={160}
          className="absolute top-[6%] left-[8%] transform rotate-[-5deg]"
        />

        <Image
          src="/SingleLineCircle.png"
          alt="Network Graph 6"
          width={85}
          height={140}
          className="absolute top-[2.9%] left-[74%] transform -rotate-[240deg]"
        />

        <Image
          src="/SingleLineCircle.png"
          alt="Network Graph 6"
          width={75}
          height={140}
          className="absolute top-[2.8%] left-[67.2%] transform -rotate-[-10deg]"
        />

        <Image
          src="/SingleLineCircle.png"
          alt="Network Graph 6"
          width={160}
          height={140}
          className="absolute top-[8.9%] left-[66.8%] transform -rotate-[-180deg]"
        />
      </div>

      {/* Google-colored circles positioned strategically */}
      <div className="absolute top-0 left-0 w-full z-[2]" style={{ left: "-150px" }}>
        <div
          className="w-[150px] h-[150px] bg-[#4285F4] rounded-full mx-auto"
          style={{
            marginTop: "-70px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Red circle on the right side */}
      <div className="absolute top-0 w-full z-[2]" style={{ right: "-600px" }}>
        <div
          className="w-[100px] h-[100px] bg-[#E84639] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Green circle on the left side of the GDGC */}
      <div className="absolute w-full z-[2]" style={{ right: "250px", top: "300px" }}>
        <div
          className="w-[20px] h-[20px] bg-[#30A953] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Yellow circle on the left side */}
      <div className="absolute top-0 w-full z-[2]" style={{ right: "600px", top: "300px" }}>
        <div
          className="w-[60px] h-[60px] bg-[#F4B400] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Yellow circle on the right side */}
      <div className="absolute top-0 w-full z-[2]" style={{ right: "-350px", top: "230px" }}>
        <div
          className="w-[40px] h-[40px] bg-[#F4B400] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Red circle below the yellow circle on the right side */}
      <div className="absolute top-0 w-full z-[2]" style={{ right: "-310px", top: "300px" }}>
        <div
          className="w-[12px] h-[12px] bg-[#E84639] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Red circle at the bottom */}
      <div className="absolute top-0 w-full z-[2]" style={{ right: "-10px", top: "600px" }}>
        <div
          className="w-[45px] h-[45px] bg-[#E84639] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Blue circle below the red circle at bottom */}
      <div className="absolute top-0 w-full z-[2]" style={{ right: "-120px", top: "700px" }}>
        <div
          className="w-[10px] h-[10px] bg-[#4286F5] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Another blue circle below the red circle at bottom */}
      <div className="absolute top-0 w-full z-[2]" style={{ right: "110px", top: "700px" }}>
        <div
          className="w-[10px] h-[10px] bg-[#4286F5] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Green circle below the full chain at bottom */}
      <div className="absolute top-0 w-full z-[2]" style={{ right: "410px", top: "720px" }}>
        <div
          className="w-[10px] h-[10px] bg-[#3DA856] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Blue circle at the center right */}
      <div className="absolute top-0 w-full z-[2]" style={{ right: "-640px", top: "370px" }}>
        <div
          className="w-[45px] h-[45px] bg-[#4286EF] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Red circle at the bottom */}
      <div className="absolute top-0 w-full z-[2]" style={{ right: "-540px", top: "470px" }}>
        <div
          className="w-[32px] h-[32px] bg-[#E84639] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Blue circle on the right side at bottom with connection */}
      <div className="absolute top-0 w-full z-[2]" style={{ right: "-250px", top: "550px" }}>
        <div
          className="w-[25px] h-[25px] bg-[#4286F5] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

      {/* Colored glowing circles for accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
        <div
          className="absolute w-[150px] h-[150px] rounded-full bg-[#FFEA00]/30 blur-2xl z-[2]"
          style={{
            top: "30%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-[180px] h-[180px] rounded-full bg-[#F4B400]/30 blur-2xl z-[2]"
          style={{
            bottom: "20%",
            right: "15%",
          }}
        />
        <div
          className="absolute w-[120px] h-[120px] rounded-full bg-[#0F9D58]/30 blur-2xl"
          style={{
            top: "15%",
            right: "5%",
          }}
        />
      </div>

      <div className="relative min-h-screen bg-black">
        <NavigationMenu />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 mb-8">
          <Image
            src="/GDGC_ICON.png"
            alt="GDG Logo"
            width={220}
            height={250}
            className="rounded-full mb-2"
            loading="lazy"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Google Developer Groups
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-lg sm:text-xl lg:text-2xl font-medium">
            <span className="text-[#4285F4]">On Campus</span>
            <span className="hidden sm:block text-white/80">•</span>
            <span className="text-white text-center">
              D. Y. Patil College Of Engineering-Pune
            </span>
          </div>
        </div>
      </div>
      <GDGCPage />
      <Tech />
      <TechFestPage />
      <TeamSection />
      <Footer />
    </div>
  );
}