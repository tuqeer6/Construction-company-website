import logo from "../assets/logo.png";
import Navlinks from "./Navlinks";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/30 text-gray-300 pt-10">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center mb-6">
        <img src={logo} alt="Pir Badshah & Co Logo" className="h-20 w-20 mb-3" />
        <p className="text-green-400 font-semibold text-lg">M/s Pir Badshah & Co</p>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center gap-6 flex-wrap mb-6">
          <ul className=" flex flex-col md:flex-row gap-5 md:gap-10 ">
          <li className="hover:text-emerald-700 font-semibold">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-emerald-700 font-semibold">
            <a href="#ourProjects">Our Projects</a>
          </li>
          <li className="hover:text-emerald-700 font-semibold">
             <a href="#cost">Cost Calculator</a>
          </li>
          <li className="hover:text-emerald-700 font-semibold">
            <a href="#AboutUs">About Us</a>
          </li>
          <li className="hover:text-emerald-700 font-semibold">
            <a href="#ContactUs">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Divider */}
      <div className="w-3/4 border-b border-green-500 mx-auto mb-6" />

      {/* Contact / Social */}
      <div className="flex justify-center gap-6 mb-6">
        <a href="#" className="hover:text-green-400 transition-colors">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:text-green-400 transition-colors">
          <Twitter size={20} />
        </a>
        <a href="#" className="hover:text-green-400 transition-colors">
          <Instagram size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/tuqeer-shah"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-colors"
        >
          <Linkedin size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-sm text-center pb-6">
        &copy; {new Date().getFullYear()} M/s Pir Badshah & Co. All rights reserved.  
        <a href="/" className="text-green-400 hover:underline ml-1">
          www.pirbadshah.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
