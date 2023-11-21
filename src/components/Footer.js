"use client"
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="w-full lg:w-2/5">
            <div className="px-6">
              {/* Room Hunt Logo */}
              <Link href="/">
                <img
                  className="w-auto h-7 cursor-pointer mb-4"
                  src="https://merakiui.com/images/full-logo.sg"
                  alt="Room Hunt Logo"
                />
              </Link>

              <p className="max-w-sm mt-2 text-gray-300">
                Discover the perfect space for your next adventure.
              </p>

              <div className="flex mt-6 -mx-2">
                {/* Social Media Icons */}
                <span className="mx-2 text-gray-300 transition-colors duration-300 hover:text-blue-200">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Reddit SVG Path */}
                  </svg>
                </span>

                <span className="mx-2 text-gray-300 transition-colors duration-300 hover:text-blue-200">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Facebook SVG Path */}
                  </svg>
                </span>

                <span className="mx-2 text-gray-300 transition-colors duration-300 hover:text-blue-200">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Github SVG Path */}
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* Navigation Links */}
              <div>
                <h3 className="text-gray-300 uppercase">Explore</h3>
                <Link href="/room-flat">
                  <span className="block mt-2 text-sm hover:underline">Rooms and Flats</span>
                </Link>
                <Link href="/pg">
                  <span className="block mt-2 text-sm hover:underline">PGs</span>
                </Link>
              </div>

              <div>
                <h3 className="text-gray-300 uppercase">About</h3>
                <Link href="/company">
                  <span className="block mt-2 text-sm hover:underline">Company</span>
                </Link>
                <Link href="/contact">
                  <span className="block mt-2 text-sm hover:underline">Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-600 border-none" />

        {/* Copyright */}
        <div>
          <p className="text-center text-gray-300">© Room Hunt 2023 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
