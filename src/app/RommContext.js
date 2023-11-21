// app/RoomContext.js
"use client"
// app/RoomContext.js
import React, { createContext, useContext } from 'react';

const RoomContext = createContext();

export const useRoomContext = () => {
  return useContext(RoomContext);
};

export const RoomProvider = ({ children }) => {
  const data = {
    rooms: [
      {
        id: 'room1',
        name: 'Cozy Single Room',
        type: 'Single',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790916.0695588915!2d76.16521204314384!3d28.752911546571784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf51aa4a1f423%3A0xf68bec7aca262ca6!2zS0lFVCDgpJXgpYngpLLgpYfgpJw!5e0!3m2!1shi!2sin!4v1700104246498!5m2!1shi!2sin',
        images: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'],
        price: 8000,
        description: 'A comfortable single room with all necessary amenities. Ideal for individuals looking for a peaceful stay.',
      },
      {
        id: 'room2',
        name: 'Deluxe Double Room',
        type: 'Double',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790916.0695588915!2d76.16521204314384!3d28.752911546571784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf51aa4a1f423%3A0xf68bec7aca262ca6!2zS0lFVCDgpJXgpYngpLLgpYfgpJw!5e0!3m2!1shi!2sin!4v1700104246498!5m2!1shi!2sin',
        images: ['image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg'],
        price: 12000,
        description: 'A spacious double room with modern amenities. Perfect for couples or friends traveling together.',
      },
      // Add more room entries...
    ],
    flats: [
      {
        id: 'flat1',
        name: 'Spacious 2BHK Flat',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790916.0695588915!2d76.16521204314384!3d28.752911546571784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf51aa4a1f423%3A0xf68bec7aca262ca6!2zS0lFVCDgpJXgpYngpLLgpYfgpJw!5e0!3m2!1shi!2sin!4v1700104246498!5m2!1shi!2sin',
        images: ['image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg'],
        price: 15000,
        description: 'A spacious 2BHK flat suitable for families or a group of friends. Modern amenities provided for a convenient living experience.',
      },
      {
        id: 'flat2',
        name: 'Luxury 3BHK Apartment',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790916.0695588915!2d76.16521204314384!3d28.752911546571784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf51aa4a1f423%3A0xf68bec7aca262ca6!2zS0lFVCDgpJXgpYngpLLgpYfgpJw!5e0!3m2!1shi!2sin!4v1700104246498!5m2!1shi!2sin',
        images: ['image16.jpg', 'image17.jpg', 'image18.jpg', 'image19.jpg', 'image20.jpg'],
        price: 25000,
        description: 'A luxurious 3BHK apartment with top-notch amenities. Experience the epitome of comfort and style.',
      },
      // Add more flat entries...
    ],
    pgs: [
      {
        id: 'pg1',
        name: 'Comfort PG',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790916.0695588915!2d76.16521204314384!3d28.752911546571784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf51aa4a1f423%3A0xf68bec7aca262ca6!2zS0lFVCDgpJXgpYngpLLgpYfgpJw!5e0!3m2!1shi!2sin!4v1700104246498!5m2!1shi!2sin',
        images: ['image21.jpg', 'image22.jpg', 'image23.jpg', 'image24.jpg', 'image25.jpg'],
        price: 6000,
        description: 'Comfort PG offers cozy rooms with excellent facilities. Our PG is equipped with a clean and hygienic environment. Enjoy a hassle-free stay with us!',
        availability: 'Available',
        enteringTime: 'Flexible',
        cleaningFacilities: ['Daily Room Cleaning', 'Regular Sanitization'],
      },
      {
        id: 'pg2',
        name: 'Executive PG',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790916.0695588915!2d76.16521204314384!3d28.752911546571784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf51aa4a1f423%3A0xf68bec7aca262ca6!2zS0lFVCDgpJXgpYngpLLgpYfgpJw!5e0!3m2!1shi!2sin!4v1700104246498!5m2!1shi!2sin',
        images: ['image26.jpg', 'image27.jpg', 'image28.jpg', 'image29.jpg', 'image30.jpg'],
        price: 7000,
        description: 'Executive PG with well-furnished rooms and additional facilities. Ideal for professionals and students.',
        availability: 'Available',
        enteringTime: 'Flexible',
        cleaningFacilities: ['Daily Room Cleaning', 'Regular Sanitization'],
      },
      // Add more PG entries...
    ],
  };

  return (
    <RoomContext.Provider value={data}>
      {children}
    </RoomContext.Provider>
  );
};
