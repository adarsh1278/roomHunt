"use client"
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, dolor nec tristique
          ultrices, orci arcu efficitur metus, in bibendum velit felis a sem.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">Adarsh Tiwari</h3>
            <p>Team Leader</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-2">Aditya Maheshwari</h3>
            <p>Team Member</p>
          </div>

          {/* Add more team members as needed */}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Contact Us</h2>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all duration-300 transform translate-x-0.5 translate-y-0.5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutPage;

