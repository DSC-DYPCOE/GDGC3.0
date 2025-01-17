import React, { useState } from "react";
import envelopeBg from "../assets/emailbgb.svg"

const Mail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Contact Section */}
      <div className="relative mb-16">
        <div className="relative w-full">
          <img src={envelopeBg} alt="Envelope Background" className="w-full" />
          <div className="absolute top-0 left-0 right-0 text-center pt-8">
            <h2 className="text-2xl text-blue-600 mb-2">Got A Question?</h2>
            <h1 className="text-4xl font-bold">
              Contact <span className="text-blue-600">G</span>
              <span className="text-red-500">D</span>
              <span className="text-yellow-500">S</span>
              <span className="text-green-500">C</span>!
            </h1>
          </div>
          <div className="absolute inset-0 p-8 pt-40">
            <div className="text-center mb-8">
              <p className="text-gray-600 max-w-2xl mx-auto">
                We would love to hear from you! Please feel free to reach out to us with any questions or comments using the contact form below.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Submit
                </button>
              </form>
              <div className="hidden md:block">
                <img src="https://raw.githubusercontent.com/googledeveloperstudentclubs/website-template/main/src/images/contact.svg" alt="Contact illustration" className="w-full max-w-md mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sponsor Section */}
      <div className="text-center relative">
        <div className="absolute -z-10 w-32 h-32 bg-green-500 rounded-full -left-16 -bottom-16 opacity-50" />
        <div className="absolute -z-10 w-32 h-32 bg-yellow-500 rounded-full -right-16 -bottom-16 opacity-50" />
        <h2 className="text-4xl font-bold mb-4">Sponsor Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          By becoming a sponsor, you'll have the opportunity to promote your brand and showcase your commitment to social responsibility.
        </p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Sponsor US
        </button>
      </div>
    </div>
  );
};

export default Mail;
