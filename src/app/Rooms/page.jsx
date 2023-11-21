"use client"
// pages/room-flat.js
// pages/room-flat.js
// pages/room-flat.js
// pages/room-flat.js
import { useRoomContext } from '../RommContext';
import { useState } from 'react';

const RoomFlatPage = () => {
  const { rooms, flats } = useRoomContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rooms.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + rooms.length) % rooms.length);
  };

  return (
    <div>
      <h1>Available Rooms and Flats</h1>
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {rooms.map((room, roomIndex) => (
          <div key={room.id} className="mb-4 border p-4 overflow-hidden rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
            <div className="relative mb-4">
              {/* Image Slider */}
              <div className="relative w-full h-64">
                <img
                  src={room.images[currentImageIndex]}
                  alt={`Room ${room.name} Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 transform scale-100"
                />
                <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600" onClick={prevImage}>
                  &lt;
                </button>
                <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600" onClick={nextImage}>
                  &gt;
                </button>
              </div>
            </div>
            <p className="text-gray-600">{room.type} Room</p>
            <p className="text-gray-800">${room.price} / month</p>
            <p>Description: {room.description}</p>
            <p>
              Location: <a href={room.location} target="_blank" rel="noopener noreferrer" className="text-blue-500">View on Map</a>
            </p>
            {/* Embed Map */}
            <iframe
              src={room.location}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </section>
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {flats.map((flat, flatIndex) => (
          <div key={flat.id} className="mb-4 border p-4 overflow-hidden rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">{flat.name}</h3>
            <div className="relative mb-4">
              {/* Image Slider */}
              <div className="relative w-full h-64">
                <img
                  src={flat.images[currentImageIndex]}
                  alt={`Flat ${flat.name} Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 transform scale-100"
                />
                <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600" onClick={prevImage}>
                  &lt;
                </button>
                <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600" onClick={nextImage}>
                  &gt;
                </button>
              </div>
            </div>
            <p className="text-gray-800">${flat.price} / month</p>
            <p>Description: {flat.description}</p>
            <p>
              Location: <a href={flat.location} target="_blank" rel="noopener noreferrer" className="text-blue-500">View on Map</a>
            </p>
            {/* Embed Map */}
            <iframe
              src={flat.location}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RoomFlatPage;

