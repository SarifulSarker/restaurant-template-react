import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/food-logo.png';
import DarkMode from './Dark';

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container mx-auto py-3 sm:py-0 px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <img className="w-10" src={Logo} alt="Logo" />
            </div>

            {/* Nav Links & Actions */}
            <div className="flex items-center gap-4">
              <DarkMode />

              <ul className="hidden sm:flex gap-4">
                <li>
                  <a href="#" className="inline-block py-4 px-4 hover:text-primary">Home</a>
                </li>
                <li>
                  <a href="#" className="inline-block py-4 px-4 hover:text-primary">About</a>
                </li>
                <li>
                  <a href="#" className="inline-block py-4 px-4 hover:text-primary">Contact</a>
                </li>
              </ul>

              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-2">
                Order
                <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
