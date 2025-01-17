"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function AdminLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      // Make an API request to verify the email and password
      const response = await axios.post("/api/admin/login", {
        email,
        password,
      });
      console.log(response.status);
      if (response.status === 200) {
        // Set a cookie for user validation based on API response
        Cookies.set("user", "valid", { expires: 1 }); // Expires in 1 day
        toast.success("Login successful!");
        router.push("/admin/dashboard");
      } else {
        toast.error("Invalid email or password.");
      }
    } catch (error) {
      toast.error("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 dark:text-white text-black border border-gray-300 dark:border-gray-700 p-8 w-80 text-center shadow-md">
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
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-300"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-300"
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

export default AdminLoginPage;
