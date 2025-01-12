'use client'

import React, { useState, useContext } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"

// Assuming you have a similar structure for your info items
const info = [
  { name: "Home", to: "/", iconName: "home" },
  { name: "About", to: "/about", iconName: "info" },
  { name: "Contact", to: "/contact", iconName: "mail" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <nav className="w-full fixed z-50 transition-all duration-300 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">Logo</span>
          </Link>

          {/* Hamburger Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="sm:hidden"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-6 flex items-center justify-center"
            >
              {isOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </motion.div>
          </Button>

          {/* Menu Items */}
          <div className="hidden sm:flex sm:items-center sm:gap-8">
            <ul className="flex items-center gap-8 text-lg">
              {info.map((item) => (
                <motion.li key={item.name} className="relative">
                  <Link
                    href={item.to}
                    className="flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:text-primary"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {item.iconName}
                    </span>
                    {item.name}
                  </Link>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-4"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu (Framer Motion for Animation) */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="sm:hidden overflow-hidden bg-background"
      >
        <ul className="flex flex-col gap-2 p-4">
          {info.map((item) => (
            <motion.li key={item.name} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.to}
                className="flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-primary/10"
              >
                <span className="material-symbols-outlined text-xl">
                  {item.iconName}
                </span>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}

export default Navbar

