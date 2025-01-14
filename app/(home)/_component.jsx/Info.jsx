"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function GDSCSection() {
  return (
    <div className="min-h-screen grid gap-10 md:grid-cols-2 bg-white dark:bg-black text-gray-800 dark:text-gray-300 p-8">
      {/* Main Heading - Slide from left */}
      <div>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12"
        >
          What is GDSC ?
        </motion.h1>

        {/* Description - Slide from right */}
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-gray-900 dark:text-gray-200 max-w-xl"
        >
          Google Developer Student Clubs is a student-led program supported by
          Google. It's a dynamic platform for students to learn, collaborate on
          web and mobile development, machine learning, and more. GDSC fosters
          skill-building, networking, and grants access to Google's resources
          and expertise, making it an invaluable opportunity for tech
          enthusiasts.
        </motion.p>

        {/* Social Icons - Fade in from bottom one by one */}
        <motion.div
          className="flex gap-4 mt-8 flex-wrap"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {[
            {
              icon: Github,
              href: "https://github.com/DSC-DYPCOE",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/company/dsc-dypcoe/",
            },
            {
              icon: Instagram,
              href: "https://www.instagram.com/gdsc_dypcoe/",
            },
            {
              icon: MessageCircle,
              href: "https://discord.com/invite/AjHxR5D5rE",
            },
            {
              icon: Youtube,
              href: "https://www.youtube.com/channel/UC6xM36BdV14BF76PtpvZJPw",
            },
            {
              icon: Twitter,
              href: "https://x.com/DSC_DYPCOE",
            },
          ].map((social, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 dark:bg-blue-600 p-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors inline-block"
              >
                <social.icon className="w-6 h-6 text-white dark:text-gray-900" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {[
          {
            title: "Concept of GDSC",
            description:
              "The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
            bgColor: "bg-green-200",
            textColor: "text-green-700",
          },
          {
            title: "Target Audience",
            description:
              "The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
            bgColor: "bg-red-200",
            textColor: "text-red-700",
          },
          {
            title: "Why GDSC?",
            description:
              "The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
            bgColor: "bg-blue-200",
            textColor: "text-blue-700",
          },
          {
            title: "Some Other Concept",
            description:
              "The GDSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.",
            bgColor: "bg-yellow-200",
            textColor: "text-yellow-700",
          },
        ].map((box, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="space-y-4"
          >
            <div
              className={`inline-block ${box.bgColor} text-xl font-semibold px-4 py-2 rounded-full ${box.textColor}`}
            >
              {box.title}
            </div>
            <p className="text-gray-600 dark:text-gray-400">{box.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
