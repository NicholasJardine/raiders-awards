import { useState } from 'react';
import ServicesGrid from '@/components/services_grid';

// Define the types for a nominee
interface Nominee {
  id: number;
  name: string;
  team: string;
  img: string;
}

// Define the type for a category
interface Category {
  id: number;
  name: string;
  nominees: Nominee[];
}

// Define categories array with nominees
const categories: Category[] = [
  {
    id: 1,
    name: "Best Player",
    nominees: [
      { id: 1, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-1.png" },
      { id: 2, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-2.png" },
      { id: 3, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-3.png" },
      { id: 4, name: "R. Dias", team: "Manchester City", img: "/avatar-4.png" },
      { id: 1, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-1.png" },
      { id: 2, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-2.png" },
      { id: 3, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-3.png" },
      { id: 4, name: "R. Dias", team: "Manchester City", img: "/avatar-4.png" },
      // Add the rest of the nominees
    ],
  },
  {
    id: 2,
    name: "Best Coach",
    nominees: [
      { id: 1, name: "Coach A", team: "Team X", img: "/avatar-1.png" },
      { id: 2, name: "Coach B", team: "Team Y", img: "/avatar-1.png" },
      { id: 3, name: "Coach C", team: "Team Z", img: "/avatar-1.png" },
      { id: 4, name: "Coach D", team: "Team W", img: "/avatar-1.png" },
      { id: 1, name: "Coach A", team: "Team X", img: "/avatar-1.png" },
      { id: 2, name: "Coach B", team: "Team Y", img: "/avatar-1.png" },
      { id: 3, name: "Coach C", team: "Team Z", img: "/avatar-1.png" },
      { id: 4, name: "Coach D", team: "Team W", img: "/avatar-1.png" },
      // Add the rest of the nominees
    ],
  },
  // Add the remaining categories and nominees
];

export default function VotingForm() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);
  const [votes, setVotes] = useState<{ [key: number]: number }>({});

  const handleNomineeClick = (nomineeId: number): void => {
    const categoryId = categories[currentCategoryIndex].id;
    setVotes((prevVotes) => ({
      ...prevVotes,
      [categoryId]: nomineeId,
    }));
  };

  const handleNextSection = (): void => {
    if (currentCategoryIndex < categories.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = (): void => {
    console.log("Votes submitted:", votes);
    // Here you would send the votes to your API/backend
    // Example: axios.post('/api/vote', votes);
  };

  const currentCategory = categories[currentCategoryIndex];

  return (
    <div className="voting-form">
        <div className='w-screen md:w-[75%] min-h-[40px] flex items-center justify-center bg-[#575756] mt-4 mb-2'>
        <h2 className="text-white">{currentCategory.name}</h2>

        </div>
      <ServicesGrid
        nominees={currentCategory.nominees}
        onNomineeClick={handleNomineeClick}
        selectedNominee={votes[currentCategory.id] ?? null}
      />
      <button
        onClick={handleNextSection}
        className="bg-[#B2B2B1] min-w-[200px] w-full max-w-[300px] py-2 rounded-2xl mt-4"
      >
        {currentCategoryIndex < categories.length - 1 ? 'Next Section' : 'Submit'}
      </button>
    </div>
  );
}
