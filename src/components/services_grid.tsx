import { useState } from 'react';

const ServicesGrid = () => {
  // Handle tilt effect when hovering over tiles
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const tile = document.getElementById(`tile-${index}`);
    if (tile) {
      const rect = tile.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const centerX = rect.width / 2;
      
      // Fixed rotateX value to make the card lean back as if anchored at the bottom
      const rotateX = 15; // Adjust to control the leaning angle
      const rotateY = -15; // Slight tilt based on horizontal mouse position
  
      // Set the transform origin to the bottom center of the card
      tile.style.transformOrigin = 'bottom center';
      tile.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
    }
  };
  
  const handleMouseLeave = (index: number) => {
    const tile = document.getElementById(`tile-${index}`);
    if (tile) {
      tile.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      tile.style.transformOrigin = 'center'; // Reset the transform origin
    }
  };
  
    

  return (
    <section className="py-10 bg-[transparent] grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {[
        { src: "/web_and_mobile.svg", alt: "Web and Mobile Development", text: "Web and Mobile Development" },
        { src: "/design.svg", alt: "Wireframes and Design", text: "Wireframes and Design" },
        { src: "/data_analytics.svg", alt: "Data Analytics", text: "Data Analytics" },
        { src: "/cloud_hosting.svg", alt: "Cloud Migration", text: "Cloud Migration" },
        { src: "/e-commerce.svg", alt: "e-commerce", text: "e-commerce" },
        { src: "/testing.svg", alt: "Quality Assurance", text: "Quality Assurance" }
      ].map((service, index) => (
        <div
          key={index}
          id={`tile-${index}`}
          className="bg-white p-6 rounded-lg shadow-md transition duration-300 flex flex-col items-center transform hover:shadow-2xl cursor-pointer"
          style={{ perspective: "1000px" }}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="service-tile flex flex-col items-center">
            <img
              src={service.src}
              alt={service.alt}
              className="h-32 w-32 mb-4 object-contain"
            />
            <p className="text-lg font-semibold">{service.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesGrid;
