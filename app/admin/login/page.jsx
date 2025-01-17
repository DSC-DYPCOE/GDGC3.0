"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Cookies from 'js-cookie';

function AdminLoginPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Simple validation (replace with real validation logic)
    if (email === "admin@example.com" && password === "password123") {
      // Set a cookie for user validation
      Cookies.set('user', 'admin', { expires: 1 }); // Expires in 1 day
      alert("Login successful!");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div
      className={`flex justify-center items-center h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`bg-white border border-gray-300 p-8 w-80 text-center shadow-md ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>

        <motion.form
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleLogin}
        >
          <motion.input
            type="text"
            name="email"
            placeholder="Email"
            className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 focus:ring-blue-300"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="password"
            name="password"
            placeholder="Password"
            className={`w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 focus:ring-blue-300"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            Log In
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

export default AdminLoginPage;
