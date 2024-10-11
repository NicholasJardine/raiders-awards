// import { useState } from 'react';

// const ServicesGrid = () => {
//   // Handle tilt effect when hovering over tiles
//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
//     const tile = document.getElementById(`tile-${index}`);
//     if (tile) {
//       const rect = tile.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const centerX = rect.width / 2;
      
//       // Fixed rotateX value to make the card lean back as if anchored at the bottom
//       const rotateX = 15; // Adjust to control the leaning angle
//       const rotateY = -15; // Slight tilt based on horizontal mouse position
  
//       // Set the transform origin to the bottom center of the card
//       tile.style.transformOrigin = 'bottom center';
//       tile.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
//     }
//   };
  
//   const handleMouseLeave = (index: number) => {
//     const tile = document.getElementById(`tile-${index}`);
//     if (tile) {
//       tile.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
//       tile.style.transformOrigin = 'center'; // Reset the transform origin
//     }
//   };
  
//   return (
//     <section className="py-10 bg-[#1D1D1B] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
//       {[
//         { src: "/web_and_mobile.svg", alt: "Web and Mobile Development", text: "Name Surname" },
//         { src: "/design.svg", alt: "Wireframes and Design", text: "Wireframes and Design" },
//         { src: "/data_analytics.svg", alt: "Data Analytics", text: "Data Analytics" },
//         { src: "/cloud_hosting.svg", alt: "Cloud Migration", text: "Cloud Migration" },
//         { src: "/e-commerce.svg", alt: "e-commerce", text: "e-commerce" },
//         { src: "/testing.svg", alt: "Quality Assurance", text: "Quality Assurance" }
//       ].map((service, index) => (
//         <div
//           key={index}
//           id={`tile-${index}`}
//           className="bg-[#1D1D1B] p-6 rounded-lg shadow-md transition duration-300 flex flex-col items-center transform hover:shadow-2xl cursor-pointer"
//           style={{ perspective: "1000px" }}
//           onMouseMove={(e) => handleMouseMove(e, index)}
//           onMouseLeave={() => handleMouseLeave(index)}
//         >
//           <div className="service-tile flex flex-col items-center">
//             <img
//               src={service.src}
//               alt={service.alt}
//               className="h-20 w-20 mb-4 rounded-full object-cover"
//               style={{ minWidth: '80px', minHeight: '80px' }} // Ensures the image maintains circular shape
//             />
//             <p className="text-xs font-semibold text-[#DDC164] text-center truncate w-full">{service.text}</p>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default ServicesGrid;




import { useState } from 'react';

const ServicesGrid = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const tile = document.getElementById(`tile-${index}`);
    if (tile) {
      const rect = tile.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const centerX = rect.width / 2;
      const rotateX = 15;
      const rotateY = -15;
      tile.style.transformOrigin = 'bottom center';
      tile.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
    }
  };

  const handleMouseLeave = (index: number) => {
    const tile = document.getElementById(`tile-${index}`);
    if (tile) {
      tile.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      tile.style.transformOrigin = 'center';
    }
  };

  return (
    <section className="py-10 bg-[#1D1D1B] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
      {[
        { src: "/web_and_mobile.svg", alt: "Web and Mobile Development", text: "Name Surname" },
        { src: "/design.svg", alt: "Wireframes and Design", text: "Wireframes and Design" },
        { src: "/data_analytics.svg", alt: "Data Analytics", text: "Data Analytics" },
        { src: "/cloud_hosting.svg", alt: "Cloud Migration", text: "Cloud Migration" },
        { src: "/e-commerce.svg", alt: "e-commerce", text: "e-commerce" },
        { src: "/testing.svg", alt: "Quality Assurance", text: "Quality Assurance" }
      ].map((service, index) => (
        <div
          key={index}
          id={`tile-${index}`}
          className="bg-[#1D1D1B] p-6 rounded-lg shadow-md transition duration-300 flex flex-col items-center transform hover:shadow-2xl cursor-pointer"
          style={{ perspective: "1000px" }}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="service-tile flex flex-col items-center">
            <img
              src={service.src}
              alt={service.alt}
              className="h-20 w-20 mb-4 rounded-full object-cover"
              style={{ minWidth: '80px', minHeight: '80px' }}
            />
            <p className="text-xs font-semibold text-[#DDC164] text-center truncate w-full">{service.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesGrid;
