"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 shadow fixed w-screen z-10 text-white">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link href="/Land">
              <img
                className="w-auto h-12 sm:h-12 w-25 cursor-pointer"
                src="https://ecommercebharat.co/wp-content/uploads/2020/10/ebharat-png-1.png"
                alt=""
              />
            </Link>

            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                href="/Land"
                className="my-2 text-gray-300 hover:text-blue-500 md:mx-4 md:my-0"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/Pg"
                className="my-2 text-gray-300 hover:text-blue-500 md:mx-4 md:my-0"
                onClick={toggleMenu}
              >
                Pg
              </Link>
              <Link
                href="/Rooms"
                className="my-2 text-gray-300 hover:text-blue-500 md:mx-4 md:my-0"
                onClick={toggleMenu}
              >
                Rooms & Flats
              </Link>
              <Link
                href="/About"
                className="my-2 text-gray-300 hover:text-blue-500 md:mx-4 md:my-0"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/Mess"
                className="my-2 text-gray-300 hover:text-blue-500 md:mx-4 md:my-0"
                onClick={toggleMenu}
              >
                Mess
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
