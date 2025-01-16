"use client";
import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Discord,
  Twitter,
  Youtube,
  Facebook,
} from "lucide-react";
import styles from "./component.module.css"; // Rename your CSS file accordingly
import Logo from "@/app/components/Logo";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={`${styles.logo} flex flex-col items-center justify-center`}>
        <Logo size={40} />
        <h1>Google Developer Groups on Campus</h1>
        <p className="text-sm text-gray-400">D.Y.Patil College of Engineering - Pune</p>
      </div>
      <div className={styles.links}>
        <div className={`${styles.contribute}`}>
          <h2>Contribute</h2>
          <ul>
            <li>
              <Link
                href="https://github.com/DSC-DYPCOE/GDSC_Web_Frontend/issues/new"
                target="_blank"
              >
                File a Bug
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/DSC-DYPCOE/GDSC_Web_Frontend"
                target="_blank"
              >
                View Source
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.programs}`}>
          <h2>Programs</h2>
          <ul>
            <li>
              <Link
                href="https://developers.google.com/womentechmakers"
                target="_blank"
              >
                Women Techmakers
              </Link>
            </li>
            <li>
              <Link
                href="https://developers.google.com/community/experts"
                target="_blank"
              >
                Google Developer Experts
              </Link>
            </li>
            <li>
              <Link
                href="https://developers.google.com/community/gdg"
                target="_blank"
              >
                Google Developer Groups
              </Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.impLinks}`}>
          <h2>Important Links</h2>
          <ul>
            <li>
              <Link href="https://console.firebase.google.com/" target="_blank">
                Firebase Console
              </Link>
            </li>
            <li>
              <Link href="https://console.cloud.google.com/" target="_blank">
                Google Cloud Platform
              </Link>
            </li>
            <li>
              <Link href="https://console.actions.google.com/" target="_blank">
                Action on Google
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.connect}>
        <h2>Connect</h2>
        <ul className="flex gap-4">
          <Link href="https://github.com/DSC-DYPCOE" target="_blank">
            <Github size={30} className="text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/dsc-dypcoe/"
            target="_blank"
          >
            <Linkedin size={30} className="text-white" />
          </Link>
          <Link href="https://www.instagram.com/dsc_dypcoe/" target="_blank">
            <Instagram size={30} className="text-white" />
          </Link>
          <Link href="https://discord.com/invite/AjHxR5D5rE" target="_blank">
            {/* <Discord size={30} className="text-white" /> */}
          </Link>
          <Link href="https://twitter.com/DSC_DYPCOE" target="_blank">
            <Twitter size={30} className="text-white" />
          </Link>
          <Link href="https://www.youtube.com/@gdscdypcoe6579" target="_blank">
            <Youtube size={30} className="text-white" />
          </Link>
          <Link href="https://www.facebook.com/dsc.dypcoe" target="_blank">
            <Facebook size={30} className="text-white" />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
