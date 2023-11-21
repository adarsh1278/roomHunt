"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const quotes = [
  'Find your perfect space.',
  'Discover comfort in every corner.',
  'Make your living experience extraordinary.',
  'Transform your living. Elevate your lifestyle.',
  'Explore a new level of living spaces.',
];

const Home = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const currentQuote = quotes[quoteIndex].substring(0, typingIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typingIndex < quotes[quoteIndex].length) {
        setTypingIndex((prevIndex) => prevIndex + 1);
      } else {
        // Wait for a moment before resetting the typing effect
        setTimeout(() => {
          setTypingIndex(0);
          setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 1500);
      }
    }, 100); // Typing speed

    return () => clearInterval(interval);
  }, [quoteIndex, typingIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4 relative transform hover:scale-105">
          <span className="text-blue-500 inline-block">Room</span>
          <span className="text-green-500 inline-block ml-2">Hunt</span>
        </h1>
        <span className="block text-3xl italic mb-6 animate-float"> ㅤ {currentQuote}</span>
        <div className="flex flex-col items-center space-y-6">
          <Link href="/room-flat"
            className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300 w-full sm:w-72 transform hover:scale-105 border-4 border-white">
              Explore Rooms and Flats
          
          </Link>
          <Link href="/pg"
            className="bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 w-full sm:w-72 transform hover:scale-105 border-4 border-white">
              Explore PGs
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
