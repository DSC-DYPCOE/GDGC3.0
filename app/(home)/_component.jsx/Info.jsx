"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook, Twitter,Youtube } from "lucide-react";
import Link from "next/link";

export default function GDSCSection() {
  return (
    <div className="min-h-screen grid gap-10 grid-cols-1 md:grid-cols-2 bg-white dark:bg-black text-gray-800 dark:text-gray-300 p-8">
      {/* Main Heading - Slide from left */}
      <div>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6 md:mb-12"
        >
          What is GDSC?
        </motion.h1>

        {/* Description - Slide from right */}
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-gray-900 dark:text-gray-200 max-w-xl mb-6"
        >
          Google Developer Student Clubs is a student-led program supported by
          Google. It's a dynamic platform for students to learn, collaborate on
          web and mobile development, machine learning, and more.
        </motion.p>
        <p className="opacity-60 mb-6">
          GDSC fosters skill-building, networking, and grants access to Google's
          resources and expertise, making it an invaluable opportunity for tech
          enthusiasts.
        </p>

        {/* Social Icons - Fade in from bottom one by one */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {[
            { icon: Github, href: "https://github.com/DSC-DYPCOE" },
            { icon: Linkedin, href: "https://www.linkedin.com/company/dsc-dypcoe/" },
            { icon: Instagram, href: "https://www.instagram.com/gdsc_dypcoe/" },
            { icon: Facebook, href: "https://discord.com/invite/AjHxR5D5rE" },
            { icon: Twitter, href: "https://x.com/DSC_DYPCOE" },
            { icon: Youtube, href: "https://www.youtube.com/channel/UC6xM36BdV14BF76PtpvZJPw" },
          ].map((social, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
            //   viewport={{ margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={social.href}
                className="bg-blue-500 dark:bg-blue-600 p-3 md:p-4 rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6 text-white dark:text-gray-900" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Concept Box - Fade in from bottom */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-block bg-green-200 dark:bg-green-100 text-green-700 dark:text-green-600 px-4 py-2 rounded-full text-lg md:text-xl font-semibold">
            Concept of GDSC
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            The GDSC program is a grassroots channel through which Google
            provides development skills, mobile and web development skills for
            students, towards employability.
          </p>
        </motion.div>

        {/* Target Audience Box - Fade in from bottom with delay */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="inline-block bg-red-200 dark:bg-red-100 text-red-700 dark:text-red-600 px-4 py-2 rounded-full text-lg md:text-xl font-semibold">
            Target Audience
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            The GDSC program is a grassroots channel through which Google
            provides development skills, mobile and web development skills for
            students, towards employability.
          </p>
        </motion.div>

        {/* Why GDSC Box - Fade in from bottom */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-block bg-blue-200 dark:bg-blue-100 text-blue-700 dark:text-blue-600 px-4 py-2 rounded-full text-lg md:text-xl font-semibold">
            Why GDSC?
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            The GDSC program is a grassroots channel through which Google
            provides development skills, mobile and web development skills for
            students, towards employability.
          </p>
        </motion.div>

        {/* Some Other Concept Box - Fade in from bottom with delay */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="inline-block bg-yellow-200 dark:bg-yellow-100 text-yellow-700 dark:text-yellow-600 px-4 py-2 rounded-full text-lg md:text-xl font-semibold">
            Some Other Concept
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            The GDSC program is a grassroots channel through which Google
            provides development skills, mobile and web development skills for
            students, towards employability.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
