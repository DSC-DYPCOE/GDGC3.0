"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Cloud,
  Brain,
  Shield,
  SmartphoneIcon as Android,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TechSection() {
  const [theme, setTheme] = useState("light");

  // Detect system theme and apply it
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
    document.documentElement.classList.add(prefersDark ? "dark" : "light");
  }, []);

  const technologies = [
    {
      title: "ANDROID DEVELOPMENT",
      description:
        "From app design/development to store listing, our approach is fully agile and user-centric. We create apps that users love and businesses value.",
      icon: Android,
      link: "/androidrobot.gif",
      bgColor: theme === "dark" ? "bg-green-900" : "bg-green-50",
      textColor: theme === "dark" ? "text-green-300" : "text-green-600",
      buttonColor: theme === "dark" ? "bg-green-700 hover:bg-green-600" : "bg-green-500 hover:bg-green-600",
      buttonText: "KNOW MORE",
      slideFrom: "left",
    },
    {
      title: "WEB DEVELOPMENT",
      description:
        "Learn Web Development at a beautiful place with a great environment. Here, you will learn all about web development from scratch to advance level.",
      icon: Monitor,
      link: "/webDev.gif",
      bgColor: theme === "dark" ? "bg-amber-900" : "bg-amber-50",
      textColor: theme === "dark" ? "text-amber-300" : "text-amber-600",
      buttonColor: theme === "dark" ? "bg-amber-700 hover:bg-amber-600" : "bg-amber-500 hover:bg-amber-600",
      buttonText: "KNOW MORE",
      slideFrom: "right",
    },
    {
      title: "CLOUD COMPUTING",
      description:
        "Get introduced to cloud computing and learn how to effectively leverage cloud services for app and web development. Master cloud deployment.",
      icon: Cloud,
      link: "/androidrobot.gif",
      bgColor: theme === "dark" ? "bg-blue-900" : "bg-blue-50",
      textColor: theme === "dark" ? "text-blue-300" : "text-blue-600",
      buttonColor: theme === "dark" ? "bg-blue-700 hover:bg-blue-600" : "bg-blue-500 hover:bg-blue-600",
      buttonText: "LEARN MORE",
      slideFrom: "left",
    },
    {
      title: "MACHINE LEARNING",
      description:
        "Learn how to make computers learn automatically without human intervention. Get hands-on experience with real-world ML projects.",
      icon: Brain,
      bgColor: theme === "dark" ? "bg-pink-900" : "bg-pink-50",
      textColor: theme === "dark" ? "text-pink-300" : "text-pink-600",
      link: "/mlDark.gif",
      buttonColor: theme === "dark" ? "bg-pink-700 hover:bg-pink-600" : "bg-pink-500 hover:bg-pink-600",
      buttonText: "START NOW",
      slideFrom: "right",
    },
    {
      title: "CYBER SECURITY",
      description:
        "Build cybersecurity core digital skills. Our comprehensive course covers all essential aspects of modern cybersecurity practices.",
      icon: Shield,
      bgColor: theme === "dark" ? "bg-purple-900" : "bg-purple-50",
      textColor: theme === "dark" ? "text-purple-300" : "text-purple-600",
      link: "/cyberSecurity.gif",
      buttonColor: theme === "dark" ? "bg-purple-700 hover:bg-purple-600" : "bg-purple-500 hover:bg-purple-600",
      buttonText: "EXPLORE NOW",
      slideFrom: "left",
    },
    {
      title: "COMPETITIVE PROGRAMMING",
      description:
        "With ever-increasing competition in the IT industry, learn how to keep your knowledge sharp with competitive programming. It will enhance your problem solving skills, logic and many more.",
      icon: Code,
      bgColor: theme === "dark" ? "bg-purple-900" : "bg-purple-50",
      textColor: theme === "dark" ? "text-purple-300" : "text-purple-600",
      link: "/cp.gif",
      buttonColor: theme === "dark" ? "bg-purple-700 hover:bg-purple-600" : "bg-purple-500 hover:bg-purple-600",
      buttonText: "EXPLORE NOW",
      slideFrom: "right",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl font-bold text-black dark:text-white tracking-tight `}
        >
            Technologies We Are Excited About
          </h2>
          <p className={`mt-4 text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            Opportunities to learn & write deep technical content
          </p>
        </div>

        <div className="space-y-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{
                x: tech.slideFrom === "left" ? -100 : 100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ margin: "-100px" }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.4,
              }}
              className={`${tech.bgColor} rounded-lg overflow-hidden`}
            >
              <div
                className={`p-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex flex-col md:items-center gap-8`}
              >
                <div className="flex-1 space-y-4">
                  <tech.icon className={`w-16 h-16 ${tech.textColor}`} />
                  <h3 className={`text-2xl font-bold ${tech.textColor}`}>{tech.title}</h3>
                  <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} max-w-xl`}>
                    {tech.description}
                  </p>
                  <Button className={`${tech.buttonColor} text-white`}>{tech.buttonText}</Button>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 flex items-center justify-center">
                    <img
                      src={tech.link}
                      className={`w-full h-full`}
                      alt={tech.title}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
