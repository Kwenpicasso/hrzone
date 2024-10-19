"use client"; // ensures this component is client-side only

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Logo from "../images/logo.svg";
import { X } from 'lucide-react';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Ensure this component only renders on the client side
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  if (!hasMounted) {
    // This prevents the component from rendering on the server
    return null;
  }

  return (
    <header className="bg-white shadow-xl sticky top-3 z-[100]  px-[0%] w-[95%] lg:w-[90%] rounded-full mx-auto mt-3">
      <div className="mx-auto flex h-16 w-full items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Image src={Logo} alt='logo' className='w-8 h-8 lg:w-10 lg:h-10'/>

        <div className="flex flex-1 items-center justify-end lg:justify-between">
          <nav aria-label="Global" className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm">
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a></li>
              <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a></li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a className="hidden lg:block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition" href="#">Login</a>
              <a className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-500 transition lg:block" href="#">Register</a>
            </div>

            <button onClick={toggleDropdown} className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Dropdown with animation */}
            <div
              className={`absolute inset-0 w-full h-screen bg-white px-[3%] py-[5%] transform transition-transform duration-300 ease-in ${
                dropdownVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
              }`}
            >
              <div className='w-full flex  justify-between items-center'>
              <Image src={Logo} alt='logo' className='w-8 h-8 lg:w-10 lg:h-10'/>
                <X className='text-black w-[24px] h-[24px]' onClick={toggleDropdown} />
              </div>
              <div className='w-full flex flex-col justify-center items-center gap-6 pt-[25%] text-[15px] text-darkGreen'>
              <ul className="flex flex-col items-center gap-8 text-sm py-4 w-full">
          <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">About</a></li>
          <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">Careers</a></li>
          <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">History</a></li>
          <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">Services</a></li>
          <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">Projects</a></li>
          <li><a className="text-gray-500 transition hover:text-gray-500/75" href="#">Blog</a></li>
          <a className=" rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition w-[50%] mx-auto text-center" href="#">Login</a>
          <a className=" rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-500 transition w-[50%] mx-auto text-center" href="#">Register</a>
        </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
