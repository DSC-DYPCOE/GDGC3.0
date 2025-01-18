"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import contactbg from "../assets/contactlbg.png";
import enbottom from "../assets/emailbgb.svg";
import entop from "../assets/mailbgt.svg";
import bgg from "../assets/bgg.png";
import bgy from "../assets/bgy.png";
import classes from "./ContactUs.module.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "@/lib/ThemeContext";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  const form = useRef();

  const [userdata, setuserdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const theme = useContext(ThemeContext);

  const submitform = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_be3i6vf",
        "template_21rrgwb",
        form.current,
        "_El3IBTU7KOivsfk4"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
          alert("Couldn't send mail successfully!!");
        }
      );

    emailjs
      .sendForm(
        "service_be3i6vf",
        "template_bdi9xul",
        form.current,
        "_El3IBTU7KOivsfk4"
      )
      .then(
        (result) => {
          alert(
            "Your mail has been sent successfully!! We will soon reach out to you"
          );
          setuserdata({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Couldn't send mail successfully!!");
        }
      );

    setuserdata({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`${classes.mainb} ${
        theme.theme === "light" ? classes.light : classes.dark
      }`}
    >
      <motion.img
        src={entop.src}
        alt=""
        className={classes.emailtop}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.img
        src={enbottom.src}
        alt=""
        className={classes.emailbottom}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.img
        src={contactbg.src}
        alt=""
        className={classes.bg_only}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      />
      <motion.img
        src={bgg.src}
        alt=""
        className={classes.greenbg}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div className={classes.abcd}>
        <motion.img
          src={bgy.src}
          alt=""
          className={classes.yellowbg}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
      </motion.div>

      <div className={classes.insisemail}>
        <motion.p
          className={classes.pques}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Got A Question?
        </motion.p>
        <motion.p
          className={classes.contact}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Contact{" "}
          <span style={{ color: "rgba(234, 67, 53, 1)" }}>G</span>
          <span style={{ color: "rgba(52, 168, 83, 1)" }}>D</span>
          <span style={{ color: "rgba(251, 188, 4, 1)" }}>S</span>
          <span style={{ color: "rgba(66, 133, 244, 1)" }}>C</span>!
        </motion.p>
        <motion.p
          className={classes.would_love}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          We would love to hear from you! Please feel free to reach out to us
          with any questions or comments using the contact form below.
        </motion.p>

        <motion.div
          className={classes.main_contact}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <form
            name="myContact"
            className={classes.contactform}
            onSubmit={submitform}
            ref={form}
          >
            <label className={classes.label}>Name</label>
            <input
              type="text"
              className={classes.input}
              required
              value={userdata.name}
              onChange={(e) =>
                setuserdata({ ...userdata, name: e.target.value })
              }
              name="from_name"
            />
            <label className={classes.label}>Email Address</label>
            <input
              type="email"
              className={classes.input}
              required
              value={userdata.email}
              onChange={(e) =>
                setuserdata({ ...userdata, email: e.target.value })
              }
              name="from_email"
            />
            <label className={classes.label}>Message</label>
            <textarea
              className={classes.doit}
              required
              value={userdata.message}
              onChange={(e) =>
                setuserdata({ ...userdata, message: e.target.value })
              }
              name="message"
            ></textarea>
            <input type="submit" className={classes.submit} />
          </form>
        </motion.div>
      </div>

      <motion.div
        className={classes.backall}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p className={classes.sponsor}>Sponsor Us</p>
        <p className={classes.talk}>
          By becoming a sponsor, you'll have the opportunity to promote your
          brand and showcase your commitment to social responsibility.{" "}
        </p>

        <Button
          label="Sponsor Us"
          margin="40px"
          className="hover:opacity-80 transition"
          onClick={() =>
            window.open("mailto:dsc.dypcoe@gmail.com", "_blank")
          }
        />
      </motion.div>
    </div>
  );
}
