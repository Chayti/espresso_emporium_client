import React from "react";
import './Footer.css';
import logo from '../../assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAddressBook, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-image1">
            <div className="container mx-auto footer grid grid-cols-1 md:grid-cols-2 gap-8 p-10">

                <div className="social-icons">
                    <div><img className="logo" src={logo} alt="" /></div>
                    <h2>Espresso Emporium</h2>
                    <p className="py-4">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="links">
                        <div className="link flex content-start">
                            <a href="https://web.facebook.com/" className="mr-4" target="_blank"><FaFacebook size={30} /></a>
                            <a href="https://twitter.com/" className="mr-4" target="_blank"><FaTwitter size={30} /></a>
                            <a href="https://www.instagram.com/" className="mr-4" target="_blank"><FaInstagram size={30} /></a>
                            <a href="https://www.linkedin.com/" className="mr-4" target="_blank"><FaLinkedin size={30} /></a>
                        </div>
                    </div>

                    <h2 className="mt-10">Get in Touch</h2>
                    <div className="mt-4">
                        <div className="">
                            <p><FontAwesomeIcon icon={faPhone} />&emsp;+8801533333333</p>
                            <p><FontAwesomeIcon icon={faMailBulk} />&emsp;info@espresso.com</p>
                            <p><FontAwesomeIcon icon={faAddressBook} />&emsp;72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <h2 className="my-3 text-center" style={{ color: "#331a15", fontWeight: "bold", textShadow: "none" }}>Connect with Us</h2>
                    <div className="w-3/4">
                        <input className="block p-2 rounded w-full" type="text" placeholder="Name" name="name" />
                        <input className="rounded block my-2 p-2 w-full" type="email" placeholder="Your email" name="email" />
                        <textarea className="block rounded p-2 w-full" rows="5" placeholder="Message" name="message" />
                        <input type="submit" className="rounded-full btn2 my-2 px-2" value="Send Message" />
                    </div>
                </div>

            </div>
            <div className="text-center py-2 text-[#eceae3] bg-image2">
                <small className="copyright">© Copyright Espresso Emporium | All Rights Reserved.</small>
            </div>

        </div>
    );
}

export default Footer;