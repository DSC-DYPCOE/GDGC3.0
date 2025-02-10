import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Discord, Facebook, Linkedin, Github, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <div className="w-full bg-white" id='ContactPage'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <Image
            src="/CompleteGDGCLogo.png"
            alt="Google Developer Groups"
            width={300}
            height={100}
            className="h-auto w-[200px] sm:w-[300px]"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-4 sm:px-0">
          {/* Contact Us Section */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Contact Us !</h3>
            <p>Prajwal Sanap</p>
          </div>

          {/* First Contribute Section */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Contribute</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-600">File a Bug</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">View Source</Link>
              </li>
            </ul>
          </div>

          {/* Second Contribute Section */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Contribute</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-600">Women Techmakers</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">Google Developer Experts</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">Google Developer Groups</Link>
              </li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg sm:text-xl mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-blue-600">Firebase Console</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">Google Cloud Platform</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-600">Action on Google</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Connect Section */}
        <div className="text-center mb-8">
          <h3 className="font-bold text-lg sm:text-xl mb-6">Connect !</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <Link href="#" className="p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </Link>
            <Link href="#" className="p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </Link>
            <Link href="#" className="p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </Link>
            <Link href="#" className="p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </Link>
            <Link href="#" className="p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </Link>
            <Link href="#" className="p-2 bg-black rounded-full hover:bg-gray-800 transition-colors">
              <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </Link>
          </div>
        </div>

        {/* Made with Love */}
        <div className="text-center text-xs sm:text-sm">
          <p>MADE BY HUMAN WITH LOVE ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;