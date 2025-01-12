"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // For active menu detection
import { motion } from "framer-motion";
import { ThemeContext } from "@/lib/ThemeContext"; // Import ThemeContext
import { Moon, Sun, Menu, X } from "lucide-react";
import { info } from "@/lib/item";
import Logo from "./Logo";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const pathname = usePathname(); // Get the current path

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <nav
      className={`w-full fixed z-50 shadow-2xl transition-all py-1 duration-300 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div
              className="flex items-center gap-2 text-xl"
              style={{ fontFamily: "Roboto", fontWeight: 400 }}
            >
              <Logo size={25} />
              <div>
                <div>Google Developer Group club</div>
                <div className="text-sm text-slate-400">
                  D.Y.Patil College of Engineering - Pune
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-4 text-lg">
              {info.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.to}
                    className={`relative flex items-center text-[18px] gap-2 px-2 py-2 rounded-md transition-all duration-300 text-black dark:text-white`}
                  >
                    <motion.span
                      whileHover={{
                        scale: 1.1,
                        color: theme === "light" ? "#000" : "#fff",
                      }}
                      style={{
                        color: theme === "light" ? "#000" : "#fff",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                    {/* Animated Underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      animate={{ width: pathname === item.to ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                      style={{
                        backgroundColor: theme === "light" ? "#000" : "#fff",
                      }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {theme === "light" ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleSidebar}
            className="sm:hidden p-2 rounded-md transition-all hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {isSidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg z-50`}
      >
        <div className="p-4 flex justify-between items-center">
          <span className="text-xl font-bold">Menu</span>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md transition-all hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="mt-4 flex flex-col gap-4 px-4">
          {info.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.to}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
                  pathname === item.to
                    ? (theme=="light"?"bg-slate-700 text-white":"bg-slate-300 text-black")
                    : "hover:bg-primary/10"
                }`}
              >
                {item.name}
              </Link>
              {/* Animated Underline */}
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
