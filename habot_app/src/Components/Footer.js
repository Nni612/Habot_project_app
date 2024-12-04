import React from 'react';
import logo from '../Assets/Images/Group 4.svg';
import { BsLinkedin } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-blue-950 text-white py-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
    {/* Column 1: Logo */}
    <div className="flex items-center justify-center md:justify-start">
      <img src={logo} alt="Logo" className="h-12" />
    </div>

    {/* Column 2: Company Info */}
    <div className="flex flex-col items-center md:items-start">
      <h3 className="font-bold text-lg mb-4">Company</h3>
      <ul>
        <li className="mb-2"><a href="#about" className="hover:underline">About</a></li>
        <li className="mb-2"><a href="#blog" className="hover:underline">FAQ</a></li>
      </ul>
    </div>

    {/* Column 3: Terms Info */}
    <div className="flex flex-col items-center md:items-start">
      <h3 className="font-bold text-lg mb-4">Terms</h3>
      <ul>
        <li className="mb-2"><a href="#faq" className="hover:underline">Data Privacy</a></li>
        <li className="mb-2"><a href="#contact" className="hover:underline">Terms</a></li>
        <li className="mb-2"><a href="#help" className="hover:underline">Accessibility</a></li>
      </ul>
    </div>

    {/* Column 4: Related Info */}
    <div className="flex flex-col items-center md:items-start">
      <h3 className="font-bold text-lg mb-4">Related</h3>
      <ul>
        <li className="mb-2"><a href="#privacy" className="hover:underline">Find Buyer</a></li>
        <li className="mb-2"><a href="#terms" className="hover:underline">Feedback</a></li>
      </ul>
    </div>

    {/* Column 5: Social Icons */}
    <div className="flex justify-center items-center gap-6 md:justify-end space-x-4">
      <a><FaLinkedin size={20}/></a>
      <a><FaTwitter size={20}/></a>
      <a><FaFacebook size={20}/></a>
      <a><FaInstagram size={20}/></a>

    </div>
  </div>
</div>

  );
}

export default Footer;
