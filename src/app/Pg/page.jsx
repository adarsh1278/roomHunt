// RoomView.js
"use client"
// RoomView.js

// import React, { useState } from 'react';

// const ImageSlider = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const images = [
//     'https://www.bing.com/ck/a?!&&p=95ea3478760960d0JmltdHM9MTY5OTgzMzYwMCZpZ3VpZD0wNzY5ZWE1Ny1jZWQ2LTZkNTctMTE0OS1mOWNjY2ZkMDZjNTImaW5zaWQ9NTU3Nw&ptn=3&ver=2&hsh=3&fclid=0769ea57-ced6-6d57-1149-f9cccfd06c52&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZXMgb2Ygcm9vbXMmRk9STT1JUUZSQkEmaWQ9RjM3NDE5ODc0NDQwM0VGMDI3NzhERDVGMjBEMDU2QjM2MkIxMzE2NQ&ntb=1',
//     'https://www.bing.com/ck/a?!&&p=95ea3478760960d0JmltdHM9MTY5OTgzMzYwMCZpZ3VpZD0wNzY5ZWE1Ny1jZWQ2LTZkNTctMTE0OS1mOWNjY2ZkMDZjNTImaW5zaWQ9NTU3Nw&ptn=3&ver=2&hsh=3&fclid=0769ea57-ced6-6d57-1149-f9cccfd06c52&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZXMgb2Ygcm9vbXMmRk9STT1JUUZSQkEmaWQ9RjM3NDE5ODc0NDQwM0VGMDI3NzhERDVGMjBEMDU2QjM2MkIxMzE2NQ&ntb=1',
//     'https://th.bing.com/th/id/R.25b86c23a77f0e94d5e909cc1b3bceff?rik=Djcc7WwfZAnIjA&riu=http%3a%2f%2fcache.marriott.com%2fmarriottassets%2fmarriott%2fSTFCT%2fstfct-guestroom-0045-hor-clsc.jpg%3finterpolation%3dprogressive-bilinear%26&ehk=Qfi1Qy2RPsgQGGJQ%2bDLh1pnflcQlURsqEc584MAYrZI%3d&risl=&pid=ImgRaw&r=0',
//     'https://via.placeholder.com/500?text=Room+4',
//     'https://via.placeholder.com/500?text=Room+5',
//   ];

//   const nextImage = () => {
//     setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="relative mb-4">
//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
//         onClick={prevImage}
//       >
//         &lt;
//       </button>

//       <div className="flex">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Room ${index + 1}`}
//             className={`w-full h-48 object-cover ${index === currentImage ? '' : 'hidden'}`}
//           />
//         ))}
//       </div>

//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
//         onClick={nextImage}
//       >
//         &gt;
//       </button>
//     </div>
//   );
// };

// const RoomView = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Room Details</h2>
      
//       {/* Image Slider */}
//       <ImageSlider />

//       {/* Room Information */}
//       <div className="my-4">
//         <p className="text-xl font-semibold mb-2">Price: $500/month</p>

//         {/* Facilities List */}
//         <div className="mb-2">
//           <p className="text-xl font-semibold mb-2">Facilities:</p>
//           <ul className="list-disc ml-6">
//             <li>Grizzer</li>
//             <li>Mess</li>
//             <li>Washroom</li>
//             <li>Shower</li>
//             <li>Fridge</li>
//           </ul>
//         </div>

//         <p className="mb-2">Distance from College: 2 miles</p>
//         <p className="mb-2">Location: <a href="#map">View on Map</a></p>
//       </div>

//       {/* Google Maps Embed */}
//       <div className="bg-gray-200 p-4 rounded-md mb-4">
//         <iframe
//           id="map"
//           title="Room Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...."  // Replace with your Google Maps embed URL
//           width="100%"
//           height="400"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         />
//       </div>

//       {/* Landlord Information */}
//       <div className="flex justify-between items-center">
//         <div className="text-xl font-semibold">Landlord: John Doe</div>
//         <div className="text-xl font-semibold">
//           <a href="tel:+1234567890" className="text-blue-500 hover:underline">Call/WhatsApp</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomView;

// pages/pg.js
// app/pages/pg.js
import React, { useState } from 'react';
import { useRoomContext } from '../RommContext';

const PGPage = () => {
  const { pgs } = useRoomContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pgs.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pgs.length) % pgs.length);
  };

  return (
    <div>
      <h1>Available PGs</h1>
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pgs.map((pg, pgIndex) => (
          <div key={pg.id} className="mb-4 border p-4 overflow-hidden rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">{pg.name}</h3>
            <div className="relative mb-4">
              {/* Image Slider */}
              <div className="relative w-full h-64">
                <img
                  src={pg.images[currentImageIndex]}
                  alt={`PG ${pg.name} Image ${currentImageIndex + 1}`}
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
            <p className="text-gray-800">${pg.price} / month</p>
            <p>Description: {pg.description}</p>
            <p>Facilities: {pg.facilities}</p>
            <p>Availability: {pg.availability}</p>
            <p>Entering Time: {pg.enteringTime}</p>
            <p>Cleaning Facilities: {pg.cleaningFacilities.join(', ')}</p>
            {/* Render other details as needed */}
            <p>
              Location: <a href={pg.location} target="_blank" rel="noopener noreferrer" className="text-blue-500">View on Map</a>
            </p>
            {/* Embed Map */}
            <iframe
              src={pg.location}
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

export default PGPage;

