import { useState, useRef, useEffect } from 'react';
import ServicesGrid from '@/components/services_grid';
import Cookies from 'js-cookie'; 
import { useRouter } from 'next/navigation'; // Import Next.js router for redirection

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
      name: "Best First Team player",
      nominees: [
        { id: 1, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-1.png" },
        { id: 2, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-2.png" },
        { id: 3, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-3.png" },
        { id: 4, name: "R. Dias", team: "Manchester City", img: "/avatar-4.png" },
        { id: 5, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-5.png" },
        { id: 6, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-6.png" },
        { id: 7, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-7.png" },
        { id: 8, name: "R. Dias", team: "Manchester City", img: "/avatar-8.png" },
        // Add the rest of the nominees
      ],
    },
    {
      id: 2,
      name: "Best Forward",
      nominees: [
        { id: 1, name: "Coach A", team: "Team X", img: "/avatar-1.png" },
        { id: 2, name: "Coach B", team: "Team Y", img: "/avatar-2.png" },
        { id: 3, name: "Coach C", team: "Team Z", img: "/avatar-3.png" },
        { id: 4, name: "Coach D", team: "Team W", img: "/avatar-4.png" },
        { id: 5, name: "Coach A", team: "Team X", img: "/avatar-5.png" },
        { id: 6, name: "Coach B", team: "Team Y", img: "/avatar-6.png" },
        { id: 7, name: "Coach C", team: "Team Z", img: "/avatar-7.png" },
        { id: 8, name: "Coach D", team: "Team W", img: "/avatar-8.png" },
        // Add the rest of the nominees
      ],
    },
    {
      id: 3,
      name: "Best Backline player",
      nominees: [
        { id: 1, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-1.png" },
        { id: 2, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-2.png" },
        { id: 3, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-3.png" },
        { id: 4, name: "R. Dias", team: "Manchester City", img: "/avatar-4.png" },
        { id: 5, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-5.png" },
        { id: 6, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-6.png" },
        { id: 7, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-7.png" },
        { id: 8, name: "R. Dias", team: "Manchester City", img: "/avatar-8.png" },
        // Add the rest of the nominees
      ],
    },
   {
      id: 4,
      name: "Best Forward Coach",
      nominees: [
        { id: 1, name: "Coach A", team: "Team X", img: "/avatar-1.png" },
        { id: 2, name: "Coach B", team: "Team Y", img: "/avatar-2.png" },
        { id: 3, name: "Coach C", team: "Team Z", img: "/avatar-3.png" },
        { id: 4, name: "Coach D", team: "Team W", img: "/avatar-4.png" },
        { id: 5, name: "Coach A", team: "Team X", img: "/avatar-5.png" },
        { id: 6, name: "Coach B", team: "Team Y", img: "/avatar-6.png" },
        { id: 7, name: "Coach C", team: "Team Z", img: "/avatar-7.png" },
        { id: 8, name: "Coach D", team: "Team W", img: "/avatar-8.png" },
        // Add the rest of the nominees
      ],
    },
    {
      id: 5,
      name: "Best Backline Coach",
      nominees: [
        { id: 1, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-1.png" },
        { id: 2, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-2.png" },
        { id: 3, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-3.png" },
        { id: 4, name: "R. Dias", team: "Manchester City", img: "/avatar-4.png" },
        { id: 5, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-5.png" },
        { id: 6, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-6.png" },
        { id: 7, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-7.png" },
        { id: 8, name: "R. Dias", team: "Manchester City", img: "/avatar-8.png" },
        // Add the rest of the nominees
      ],
    },
  
    {
      id: 6,
      name: "Best Conditioning Coach",
      nominees: [
        { id: 1, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-1.png" },
        { id: 2, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-2.png" },
        { id: 3, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-3.png" },
        { id: 4, name: "R. Dias", team: "Manchester City", img: "/avatar-4.png" },
        { id: 5, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-5.png" },
        { id: 6, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-6.png" },
        { id: 7, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-7.png" },
        { id: 8, name: "R. Dias", team: "Manchester City", img: "/avatar-8.png" },
        // Add the rest of the nominees
      ],
    },
    {
      id: 7,
      name: "Best Team Manager",
      nominees: [
        { id: 1, name: "Coach A", team: "Team X", img: "/avatar-1.png" },
        { id: 2, name: "Coach B", team: "Team Y", img: "/avatar-2.png" },
        { id: 3, name: "Coach C", team: "Team Z", img: "/avatar-3.png" },
        { id: 4, name: "Coach D", team: "Team W", img: "/avatar-4.png" },
        { id: 5, name: "Coach A", team: "Team X", img: "/avatar-5.png" },
        { id: 6, name: "Coach B", team: "Team Y", img: "/avatar-6.png" },
        { id: 7, name: "Coach C", team: "Team Z", img: "/avatar-7.png" },
        { id: 8, name: "Coach D", team: "Team W", img: "/avatar-8.png" },
        // Add the rest of the nominees
      ],
    },
    // Add the remaining categories and nominees
  ];
  
// export default function VotingForm() {
//   const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);
//   const [votes, setVotes] = useState<{ [key: number]: number }>({});
//   const sectionRef = useRef<HTMLDivElement | null>(null);

//   const handleNomineeClick = (nomineeId: number): void => {
//     const categoryId = categories[currentCategoryIndex].id;
//     setVotes((prevVotes) => ({
//       ...prevVotes,
//       [categoryId]: nomineeId,
//     }));
//   };

//   const handleNextSection = (): void => {
//     if (currentCategoryIndex < categories.length - 1) {
//       setCurrentCategoryIndex(currentCategoryIndex + 1);
//     } else {
//       handleSubmit();
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       // Make the API call using fetch
//       const response = await fetch('/api/votes', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ selections: votes }),  // Send the votes object
//       });
  
//       // Check if the response is OK
//       if (response.ok) {
//         const data = await response.json();
//         console.log("Votes submitted successfully:", data);
//       } else {
//         console.error("Failed to submit votes:", response.status);
//       }
//     } catch (error) {
//       console.error("Error submitting votes:", error);
//     }
//   };
  
//   const currentCategory = categories[currentCategoryIndex];

//   // Scroll to the top of the section when the category changes
//   useEffect(() => {
//     if (sectionRef.current) {
//       sectionRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [currentCategoryIndex]);

//   return (
//     <div ref={sectionRef} className="voting-form">
//       <div className='w-screen md:w-[100%] min-h-[40px] flex items-center justify-center bg-[#575756] mt-4 mb-2'>
//         <h2 className="text-white">Select the {currentCategory.name}</h2>
//       </div>
//       <ServicesGrid
//         nominees={currentCategory.nominees}
//         onNomineeClick={handleNomineeClick}
//         selectedNominee={votes[currentCategory.id] ?? null}
//       />
//       <button
//         onClick={handleNextSection}
//         className="bg-[#B2B2B1] min-w-[200px] lg:w-full max-w-[300px] py-2 rounded-2xl mt-4"
//       >
//         {currentCategoryIndex < categories.length - 1 ? 'Next Section' : 'Submit'}
//       </button>
//     </div>
//   );
// }



export default function VotingForm() {
    const router = useRouter();
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);
    
    // Modify votes to store the full nominee object
    const [votes, setVotes] = useState<{ [key: number]: Nominee }>({});
    
    const sectionRef = useRef<HTMLDivElement | null>(null);
  
    const handleNomineeClick = (nominee: Nominee): void => {
      const categoryId = categories[currentCategoryIndex].id;
      setVotes((prevVotes) => ({
        ...prevVotes,
        [categoryId]: nominee,  // Store the full nominee object instead of just the ID
      }));
    };
  
    const handleNextSection = (): void => {
      if (currentCategoryIndex < categories.length - 1) {
        setCurrentCategoryIndex(currentCategoryIndex + 1);
      } else {
        handleSubmit();
      }
    };
  
    const handleSubmit = async () => {
      try {
        const sessionId = Cookies.get('sessionId');
        
        // Make the API call using fetch
        const response = await fetch('/api/votes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ selections: votes, sessionId }),  // Send the full votes object
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("Votes submitted successfully:", data);
          router.push('/results');
        } else {
          console.error("Failed to submit votes:", response.status);
        }
      } catch (error) {
        console.error("Error submitting votes:", error);
      }
    };
  
    const currentCategory = categories[currentCategoryIndex];
  
    useEffect(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [currentCategoryIndex]);
  
    return (
      <div ref={sectionRef} className="voting-form">
        <div className='w-screen md:w-[100%] min-h-[40px] flex items-center justify-center bg-[#575756] mt-4 mb-2'>
          <h2 className="text-white">Select the {currentCategory.name}</h2>
        </div>
        <ServicesGrid
          nominees={currentCategory.nominees}
          onNomineeClick={handleNomineeClick}
          selectedNominee={votes[currentCategory.id]?.id ?? null}  // Only show selected nominee ID for now
        />
        <button
          onClick={handleNextSection}
          className="bg-[#B2B2B1] min-w-[200px] lg:w-full max-w-[300px] py-2 rounded-2xl mt-4"
        >
          {currentCategoryIndex < categories.length - 1 ? 'Next Section' : 'Submit'}
        </button>
      </div>
    );
  }
  