"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import contactbg from '../assets/contactlbg.png';
import enbottom from '../assets/emailbgb.svg';
import entop from '../assets/mailbgt.svg';
import bgg from '../assets/bgg.png';
import bgy from '../assets/bgy.png';
import Button from './_components/Button';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classes from './_components/ContactUs.module.css'; // Make sure the correct path is used

export default function ContactUs() {
    const form = useRef();
    const [userdata, setuserdata] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Manage theme state
    const [theme, setTheme] = useState('light');

    // Check and apply theme on initial render
    useEffect(() => {
        // Check for saved theme in localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.classList.add(savedTheme); // Apply theme class to body
        } else {
            document.body.classList.add('light'); // Default to light theme
        }

        // Initialize AOS animation library
        AOS.init({ duration: 800 });
    }, []);

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.body.classList.remove(theme);
        document.body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme); // Save theme to localStorage
    };

    // Form submission handler
    const submitform = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_be3i6vf', 'template_bdi9xul', form.current, '_El3IBTU7KOivsfk4')
            .then((result) => {
                alert("Your mail has been sent successfully!! We will soon reach out to you.");
                setuserdata({ name: "", email: "", message: "" });
            }, (error) => {
                console.log(error.text);
                alert("Couldn't send mail successfully!!");
            });
    };

    return (
        <div className={`${classes.mainb} ${theme === 'light' ? classes.light : classes.dark}`}>
            {/* <Image src={entop} alt="Email top" className={classes.emailtop} data-aos="fade-down" data-aos-duration="800" /> */}
            <Image src={enbottom} alt="Email bottom" className={classes.emailbottom} data-aos="fade-up" data-aos-duration="800" />
            <Image src={contactbg} alt="Contact background" className={classes.bg_only} data-aos="fade-right" data-aos-delay="800" />
            <Image src={bgg} alt="Green background" className={classes.greenbg} />
            <div className={classes.abcd}>
                <Image src={bgy} alt="Yellow background" className={classes.yellowbg} />
            </div>

            <div className={classes.insisemail} data-aos="fade-up" data-aos-delay="800">
                <p className={classes.pques}>Got A Question?</p>
                <p className={classes.contact}>Contact <span style={{ color: "rgba(234, 67, 53, 1)" }}>G</span><span style={{ color: "rgba(52, 168, 83, 1)" }}>D</span><span style={{ color: "rgba(251, 188, 4, 1)" }}>S</span><span style={{ color: "rgba(66, 133, 244, 1)" }}>C</span>!</p>
                <p className={classes.would_love}>We would love to hear from you! Please feel free to reach out to us with any questions or comments using the contact form below.</p>

                <div className={classes.main_contact} data-aos="flip-left" data-aos-delay="800">
                    <form name="myContact" className={classes.contactform} onSubmit={submitform} ref={form}>
                        <label className={classes.label}>Name</label>
                        <input type='text' className={classes.input} required value={userdata.name} onChange={(e) => setuserdata({ ...userdata, name: e.target.value })} name="from_name" />
                        <label className={classes.label}>Email Address</label>
                        <input type='email' className={classes.input} required value={userdata.email} onChange={(e) => setuserdata({ ...userdata, email: e.target.value })} name="from_email" />
                        <label className={classes.label}>Message</label>
                        <textarea className={classes.doit} required value={userdata.message} onChange={(e) => setuserdata({ ...userdata, message: e.target.value })} name="message" />
                        <input type='submit' className={classes.submit} />
                    </form>
                </div>
            </div>

            <div className={classes.backall}>
                <p className={classes.sponsor} data-aos="zoom-out">Sponsor Us</p>
                <p className={classes.talk} data-aos="fade-up">By becoming a sponsor, you'll have the opportunity to promote your brand and showcase your commitment to social responsibility.</p>
                <Button label='Sponsor US' margin="40px" dataaos="flip-up" onClick={() => { window.open("mailto:dsc.dypcoe@gmail.com", "_blank"); }} />
            </div>
        </div>
    );
}
