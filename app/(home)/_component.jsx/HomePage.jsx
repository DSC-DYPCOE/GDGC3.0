"use client";
// SingleLineCircle
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
      {/* Network Graph Images */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[3] ">
        <Image
          src="/Ellipse91.png"
          alt="Network Graph 1"
          width={80}
          height={200}
          className="absolute top-[0.5%] left-[15%] transform rotate-[25deg] "
        />
        {/* Left side of the Top Yellow Circle */}
        <Image
          src="/Ellipse91.png"
          alt="Network Graph 1"
          width={42}
          height={200}
          className="absolute top-[3.7%] left-[5%] transform rotate-[25deg] "
        />

        <Image
                  src="/Ellipse91.png"
                  alt="Network Graph 1"
                  width={40}
                  height={200}
                  className="absolute top-[1.5%] left-[55%] transform rotate-[25deg] "
                />

        <Image
          src="/DoubleChain.png"
          alt="Network Graph 2"
          width={80}
          height={150}
          className="absolute top-[2.5%] left-[24%] transform -rotate-12 "
        />
        {/* <Image
          src="/Ellipse91.png"
          alt="Network Graph 3"
          width={180}
          height={180}
          className="absolute bottom-[20%] left-[35%] transform rotate-45 opacity-40"
        /> */}
        {/* <Image */}
          {/* src="/" */}
          {/* alt="Network Graph 4" */}
          {/* width={120} */}
          {/* height={120} */}
          {/* className="absolute top-[25%] right-[15%] transform -rotate-[15deg] opacity-30" */}
        {/* /> */}
        <Image
          src="/FullChain.png"
          alt="Network Graph 5"
          width={400}
          height={160}
          className="absolute top-[6%] left-[8%] transform rotate-[-5deg]"
        />
        {/* This one is the single chain which present between the yello circle of the right side-Right side of Circle */}
        <Image
          src="/SingleLineCircle.png"
          alt="Network Graph 6"
          width={85}
          height={140}
          className="absolute top-[2.9%] left-[74%] transform -rotate-[240deg]"
        />
    {/* /* this is between the yello circle which are on the right side--Left Side of the circle */ }
        <Image
          src="/SingleLineCircle.png"
          alt="Network Graph 6"
          width={75}
          height={140}
          className="absolute top-[2.8%] left-[67.2%] transform -rotate-[-10deg] "
        />

        {/* /* this is at the bottom of the right side with the blue  circlw */ }
        <Image
          src="/SingleLineCircle.png"
          alt="Network Graph 6"
          width={160}
          height={140}
          className="absolute top-[8.9%] left-[66.8%] transform -rotate-[-180deg] "
        />
      </div>

      

      {/* Existing design remains the same as the original code */}
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

      {/* New red circle on the right side */}
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

           {/* New Green circle on the left  side of the GDGC */}
      <div className="absolute  w-full z-[2]" style={{ right: "250px",top:"300px" }}>
        <div
          className="w-[20px] h-[20px] bg-[#30A953] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

 {/* New Yelllo circle on the left side */}
 <div className="absolute top-0 w-full z-[2]" style={{ right: "600px",top:"300px" }}>
        <div
          className="w-[60px] h-[60px] bg-[#F4B400] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

       {/* New Yello circle on the right side */}
 <div className="absolute top-0 w-full z-[2]" style={{ right: "-350px",top:"230px" }}>
        <div
          className="w-[40px] h-[40px] bg-[#F4B400] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

 {/* New red circle below the yellow circle on the right side  */}
 <div className="absolute top-0 w-full z-[2]" style={{ right: "-310px",top:"300px" }}>
        <div
          className="w-[12px] h-[12px] bg-[#E84639] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>
      {/* New red circle at the bottom  */}
 <div className="absolute top-0 w-full z-[2]" style={{ right: "-10px",top:"600px" }}>
        <div
          className="w-[45px] h-[45px] bg-[#E84639] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>
            {/*  new blue circle below the red circle at bottom*/}
      <div className="absolute top-0 w-full z-[2]" style={{ right: "-120px",top:"700px" }}>
        <div
          className="w-[10px] h-[10px] bg-[#4286F5] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>


  {/* another  new blue circle below the red circle at bottom*/}
  <div className="absolute top-0 w-full z-[2]" style={{ right: "110px",top:"700px" }}>
        <div
          className="w-[10px] h-[10px] bg-[#4286F5] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>

 {/* another  new Green  circle below the full chain at bottom*/}
 <div className="absolute top-0 w-full z-[2]" style={{ right: "410px",top:"720px" }}>
        <div
          className="w-[10px] h-[10px] bg-[#3DA856] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>
        {/* New blue circle at the center right  */}
 <div className="absolute top-0 w-full z-[2]" style={{ right: "-640px",top:"370px" }}>
        <div
          className="w-[45px] h-[45px] bg-[#4286EF] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>
        {/* New red circle at the bottom  */}
 <div className="absolute top-0 w-full z-[2]" style={{  right: "-540px",top:"470px" }}>
        <div
          className="w-[32px] h-[32px] bg-[#E84639] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>


{/* another  new blue circle  on the right side at  bottom with conenction with another ellipse*/}
<div className="absolute top-0 w-full z-[2]" style={{ right: "-250px",top:"550px" }}>
        <div
          className="w-[25px] h-[25px] bg-[#4286F5] rounded-full mx-auto"
          style={{
            marginTop: "-20px",
            transform: "scale(1.2)",
            transformOrigin: "center bottom",
          }}
        />
      </div>


      {/* Removing the grid background that was applying to all elements */}
      {/* If you still want the grid, apply it to a specific section only */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
        <div
          className="absolute w-[150px] h-[150px] rounded-full bg-[#FFEA00]/30 -2xl z-[2]"
          style={{
            top: "30%",
            left: "10%",
            zIndex: 5,
          }}
        />
        <div
          className="absolute w-[180px] h-[180px] rounded-full bg-[#F4B400]/30 -2xl z-[2]"
          style={{
            bottom: "20%",
            right: "15%",
            zIndex: 4,
          }}
        />
        {/* This is a green circle at the bottom of the home page */}
        <div
          className="absolute w-[120px] h-[120px] rounded-full bg-[#0F9D58]/30 -2xl"
          style={{
            top: "15%",
            right: "5%",
            zIndex: 3,
          }}
        />
      </div>

      {/* <div className="absolute top-6 right-6 z-10">
        <button className="text-white p-3 hover:bg-white/10 rounded-full transition-colors duration-300">
          <Menu className="w-6 h-6" />
        </button>
      </div> */}
      <div className="relative min-h-screen bg-black">
      <NavigationMenu />

      {/* Image just above the "Google Developer Groups" title */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 mb-8">
        <Image
          src="/GDGC_ICON.png" // Replace this with the actual image path
          alt="Your Image"
          width={220}
          height={250}
          className="rounded-full mb-2" // Reduced margin-bottom for the image
        />
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Google Developer Groups
        </h1>
        <div className="flex items-center gap-3 text-xl md:text-2xl font-medium">
          <span className="text-[#4285F4]">On Campus</span>
          <span className="text-white/80">•</span>
          <span className="text-white">
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
