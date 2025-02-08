import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Discord, Facebook, Linkedin, Github, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
          <Image
            src="/CompleteGDGCLogo.png"
            alt="Google Developer Groups"
            width={300}
            height={100}
            className="h-auto"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mb-12 ml-10">
          {/* Contact Us Section */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-4">Contact Us !</h3>
            <p>Prajwal Sanap</p>
          </div>

          {/* First Contribute Section */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-4">Contribute</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:text-blue-600">File a Bug</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-blue-600">View Source</Link>
              </li>
            </ul>
          </div>

          {/* Second Contribute Section */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-4">Contribute</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:text-blue-600">Women Techmakers</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-blue-600">Google Developer Experts</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-blue-600">Google Developer Groups</Link>
              </li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-4">Important Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="#" className="hover:text-blue-600">Firebase Console</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-blue-600">Google Cloud Platform</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:text-blue-600">Action on Google</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Connect Section */}
        <div className="text-center mb-8">
          <h3 className="font-bold text-xl mb-6">Connect !</h3>
          <div className="flex justify-center gap-8"> {/* Increased gap */}
            <Link href="#" className="p-2 bg-black rounded-full hover:bg-gray-800">
              <Twitter className="w-6 h-6 text-white" />
            </Link>
            <Link href="#" className="p-2 bg-black rounded-full hover:bg-gray-800">
              <Facebook className="w-6 h-6 text-white" />
            </Link>
            <Link href="#" className="p-2 bg-black rounded-full hover:bg-gray-800">
              <Linkedin className="w-6 h-6 text-white" />
            </Link>
            <Link href="#" className="p-2 bg-black rounded-full hover:bg-gray-800">
              <Github className="w-6 h-6 text-white" />
            </Link>
            <Link href="#" className="p-2 bg-black rounded-full hover:bg-gray-800">
              <Instagram className="w-6 h-6 text-white" />
            </Link>
            <Link href="#" className="p-2 bg-black rounded-full hover:bg-gray-800">
              <Youtube className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>

        {/* Made with Love */}
        <div className="text-center text-sm">
          <p>MADE BY HUMAN WITH LOVE ❤️</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;