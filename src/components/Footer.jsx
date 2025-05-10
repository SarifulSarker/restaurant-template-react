import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MapPin, Phone, Home, Info,  BookOpen, LogIn } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* First Column: Foodie Description */}
        <div  data-aos = "fade-left"
data-aos-duration = "600"
data-aos-once = "true" 
        className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4 text-white">Foodie</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facere ab
            hic accusantium omnis dolor voluptatibus illo, tempore cum tenetur.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400">Gazipur, Dhaka</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Phone className="h-4 w-4 text-gray-400" />
            <span className="text-gray-400">+91 123456789</span>
          </div>
          <div className="mt-4 flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <FaLinkedinIn className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Second Column: Important Links 1 */}
        <div   data-aos = "fade-left"
data-aos-duration = "600"
data-aos-once = "true"
        className="mb-6 md:mb-0">
          <h3 className="text-l font-semibold mb-4 text-white">Important Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Info className="h-4 w-4" />
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column: Important Links 2 (Duplicate) */}
        <div data-aos = "fade-right"
data-aos-duration = "500"
data-aos-once = "true" className="mb-6 md:mb-0">
          <h3 className="text-l font-semibold mb-4 text-white">Important Links</h3>
          <ul className="space-y-2">
             <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Info className="h-4 w-4" />
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth Column: Important Links 3 */}
        <div  data-aos = "fade-right"
data-aos-duration = "600"
data-aos-once = "true" className="mb-6 md:mb-0">
          <h3 className="text-l font-semibold mb-4 text-white">Important Links</h3>
          <ul className="space-y-2">
             <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <Info className="h-4 w-4" />
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                 <BookOpen className="h-4 w-4" />
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Made With Love */}
      <div className="mt-8 text-center border-t border-gray-700 pt-6">
        <p className="text-gray-400">
          &copy; copyright 2025 All rights reserved || Made with ❤️ by Shariful
        </p>
      </div>
    </footer>
  );
};

export default Footer;
