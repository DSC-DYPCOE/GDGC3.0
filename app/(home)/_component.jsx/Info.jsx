'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function GDSCSection() {
  return (
    <div className="min-h-screen bg-black text-gray-300 p-8">
      {/* Main Heading - Slide from left */}
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-400 mb-12"
      >
        What is GDSC ?
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Concept Box - Fade in from bottom */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-xl font-semibold">
            Concept of GDSC
          </div>
          <p className="text-gray-400">
            The GDSC program is a grassroots channel through which Google provides development skills, 
            mobile and web development skills for students, towards employability.
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
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-xl font-semibold">
            Target Audience
          </div>
          <p className="text-gray-400">
            The GDSC program is a grassroots channel through which Google provides development skills, 
            mobile and web development skills for students, towards employability.
          </p>
        </motion.div>
      </div>

      {/* Description - Slide from right */}
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-gray-500 mb-12 max-w-2xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula arcu ut dictum condimentum. 
        Phasellus pulvinar at quam eu suscipit. Aliquam id vehicula lacus, vel commodo ligula.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Why GDSC Box - Fade in from bottom */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xl font-semibold">
            Why GDSC?
          </div>
          <p className="text-gray-400">
            The GDSC program is a grassroots channel through which Google provides development skills, 
            mobile and web development skills for students, towards employability.
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
          <div className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-xl font-semibold">
            Some Other Concept
          </div>
          <p className="text-gray-400">
            The GDSC program is a grassroots channel through which Google provides development skills, 
            mobile and web development skills for students, towards employability.
          </p>
        </motion.div>
      </div>

      {/* Social Icons - Fade in from bottom one by one */}
      <motion.div 
        className="flex gap-4"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {[
          { icon: Github, href: '#' },
          { icon: Linkedin, href: '#' },
          { icon: Instagram, href: '#' },
          { icon: Facebook, href: '#' },
          { icon: Twitter, href: '#' },
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
              className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors inline-block"
            >
              <social.icon className="w-6 h-6" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

