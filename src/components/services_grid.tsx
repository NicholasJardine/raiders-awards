import React from 'react';

// Define the types for a nominee
interface Nominee {
  id: number;
  name: string;
  team: string;
  img: string;
}

// Define the prop types for the ServicesGrid component
interface ServicesGridProps {
  nominees: Nominee[];
  onNomineeClick: (nominee: Nominee) => void;  // Accept full nominee object
  selectedNominee: number | null;  // This will store the selected nominee's ID
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ nominees, onNomineeClick, selectedNominee }) => {
  return (
    <section className="py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
      {nominees.map((nominee) => (
        <div
          key={nominee.id}
          className={`bg-[#1D1D1B] p-6 rounded-lg shadow-md flex flex-col items-center cursor-pointer ${
            selectedNominee === nominee.id ? 'border-2 border-yellow-500' : ''
          }`}  // Border appears when nominee is selected
          onClick={() => onNomineeClick(nominee)}  // Pass the full nominee object on click
        >
          <div className="service-tile flex flex-col items-center">
            <img
              src={nominee.img}
              alt={nominee.name}
              className="h-20 w-20 mb-4 rounded-full object-cover"
            />
            <p className="text-xs font-semibold text-[#DDC164] text-center">{nominee.name}</p>
            <p className="text-xs text-gray-400 text-center">{nominee.team}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesGrid;
