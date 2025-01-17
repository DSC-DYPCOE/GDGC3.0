"use client";

import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
} from "lucide-react";
import styles from "./component.module.css"; // Rename your CSS file accordingly
import Logo from "@/app/components/Logo";

const Footer = () => {
  return (
    <div className={`${styles.main} bg-gray-100 dark:bg-gray-900 text-white dark:text-gray-200 py-8`}>
      <div className={`${styles.logo} flex flex-col items-center justify-center`}>
        <Logo size={40} />
        <h1 className="text-lg font-bold dark:text-white top-2 relative dark:top-0">Google Developer Groups on Campus</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">D.Y.Patil College of Engineering - Pune</p>
      </div>
      <div className={styles.links}>
        <div className={`${styles.contribute}`}>
          <h2 className="text-gray-700 dark:text-gray-300">Contribute</h2>
          <ul>
            <li>
              <Link
                href="https://github.com/DSC-DYPCOE/GDSC_Web_Frontend/issues/new"
                target="_blank"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                File a Bug
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/DSC-DYPCOE/GDSC_Web_Frontend"
                target="_blank"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                View Source
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.programs}`}>
          <h2 className="text-gray-700 dark:text-gray-300">Programs</h2>
          <ul>
            <li>
              <Link
                href="https://developers.google.com/womentechmakers"
                target="_blank"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Women Techmakers
              </Link>
            </li>
            <li>
              <Link
                href="https://developers.google.com/community/experts"
                target="_blank"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Google Developer Experts
              </Link>
            </li>
            <li>
              <Link
                href="https://developers.google.com/community/gdg"
                target="_blank"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Google Developer Groups
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.impLinks}`}>
          <h2 className="text-gray-700 dark:text-gray-300">Important Links</h2>
          <ul>
            <li>
              <Link href="https://console.firebase.google.com/" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400">
                Firebase Console
              </Link>
            </li>
            <li>
              <Link href="https://console.cloud.google.com/" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400">
                Google Cloud Platform
              </Link>
            </li>
            <li>
              <Link href="https://console.actions.google.com/" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400">
                Action on Google
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.connect}>
        <h2 className="text-gray-700 dark:text-gray-300">Connect</h2>
        <ul className="flex gap-4">
          <Link href="https://github.com/DSC-DYPCOE" target="_blank">
            <Github size={30} className="text-white dark:text-white" />
          </Link>
          <Link href="https://www.linkedin.com/company/dsc-dypcoe/" target="_blank">
            <Linkedin size={30} className="text-white dark:text-white" />
          </Link>
          <Link href="https://www.instagram.com/dsc_dypcoe/" target="_blank">
            <Instagram size={30} className="text-white dark:text-white" />
          </Link>
          <Link href="https://twitter.com/DSC_DYPCOE" target="_blank">
            <Twitter size={30} className="text-white dark:text-white" />
          </Link>
          <Link href="https://www.youtube.com/@gdscdypcoe6579" target="_blank">
            <Youtube size={30} className="text-white dark:text-white" />
          </Link>
          <Link href="https://www.facebook.com/dsc.dypcoe" target="_blank">
            <Facebook size={30} className="text-white dark:text-white" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
