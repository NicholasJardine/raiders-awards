// "use client";  // Ensure this component is client-side

// import { useState, useEffect } from 'react';
// import Cookies from 'js-cookie';  // For managing cookies
// import Image from 'next/image';

// interface Nominee {
//   id: number;
//   name: string;
//   team: string;
//   img: string;
// }

// // Define the type for a category
// interface Category {
//   id: number;
//   name: string;
//   nominees: Nominee[];
// }

// // Define categories array with nominees
// const categories: Category[] = [
//     {
//       id: 1,
//       name: "Best First Team player",
//       nominees: [
//         { id: 1, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-1.png" },
//         { id: 2, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-2.png" },
//         { id: 3, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-3.png" },
//         { id: 4, name: "R. Dias", team: "Manchester City", img: "/avatar-4.png" },
//         { id: 5, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-5.png" },
//         { id: 6, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-6.png" },
//         { id: 7, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-7.png" },
//         { id: 8, name: "R. Dias", team: "Manchester City", img: "/avatar-8.png" },
//         // Add the rest of the nominees
//       ],
//     },
//     {
//       id: 2,
//       name: "Best Forward",
//       nominees: [
//         { id: 1, name: "Coach A", team: "Team X", img: "/avatar-1.png" },
//         { id: 2, name: "Coach B", team: "Team Y", img: "/avatar-2.png" },
//         { id: 3, name: "Coach C", team: "Team Z", img: "/avatar-3.png" },
//         { id: 4, name: "Coach D", team: "Team W", img: "/avatar-4.png" },
//         { id: 5, name: "Coach A", team: "Team X", img: "/avatar-5.png" },
//         { id: 6, name: "Coach B", team: "Team Y", img: "/avatar-6.png" },
//         { id: 7, name: "Coach C", team: "Team Z", img: "/avatar-7.png" },
//         { id: 8, name: "Coach D", team: "Team W", img: "/avatar-8.png" },
//         // Add the rest of the nominees
//       ],
//     },
//     {
//       id: 3,
//       name: "Best Backline player",
//       nominees: [
//         { id: 1, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-1.png" },
//         { id: 2, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-2.png" },
//         { id: 3, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-3.png" },
//         { id: 4, name: "R. Dias", team: "Manchester City", img: "/avatar-4.png" },
//         { id: 5, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-5.png" },
//         { id: 6, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-6.png" },
//         { id: 7, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-7.png" },
//         { id: 8, name: "R. Dias", team: "Manchester City", img: "/avatar-8.png" },
//         // Add the rest of the nominees
//       ],
//     },
//    {
//       id: 4,
//       name: "Best Forward Coach",
//       nominees: [
//         { id: 1, name: "Coach A", team: "Team X", img: "/avatar-1.png" },
//         { id: 2, name: "Coach B", team: "Team Y", img: "/avatar-2.png" },
//         { id: 3, name: "Coach C", team: "Team Z", img: "/avatar-3.png" },
//         { id: 4, name: "Coach D", team: "Team W", img: "/avatar-4.png" },
//         { id: 5, name: "Coach A", team: "Team X", img: "/avatar-5.png" },
//         { id: 6, name: "Coach B", team: "Team Y", img: "/avatar-6.png" },
//         { id: 7, name: "Coach C", team: "Team Z", img: "/avatar-7.png" },
//         { id: 8, name: "Coach D", team: "Team W", img: "/avatar-8.png" },
//         // Add the rest of the nominees
//       ],
//     },
//     {
//       id: 5,
//       name: "Best Backline Coach",
//       nominees: [
//         { id: 1, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-1.png" },
//         { id: 2, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-2.png" },
//         { id: 3, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-3.png" },
//         { id: 4, name: "R. Dias", team: "Manchester City", img: "/avatar-4.png" },
//         { id: 5, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-5.png" },
//         { id: 6, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-6.png" },
//         { id: 7, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-7.png" },
//         { id: 8, name: "R. Dias", team: "Manchester City", img: "/avatar-8.png" },
//         // Add the rest of the nominees
//       ],
//     },
  
//     {
//       id: 6,
//       name: "Best Conditioning Coach",
//       nominees: [
//         { id: 1, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-1.png" },
//         { id: 2, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-2.png" },
//         { id: 3, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-3.png" },
//         { id: 4, name: "R. Dias", team: "Manchester City", img: "/avatar-4.png" },
//         { id: 5, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-5.png" },
//         { id: 6, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-6.png" },
//         { id: 7, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-7.png" },
//         { id: 8, name: "R. Dias", team: "Manchester City", img: "/avatar-8.png" },
//         // Add the rest of the nominees
//       ],
//     },
//     {
//       id: 7,
//       name: "Best Team Manager",
//       nominees: [
//         { id: 1, name: "Coach A", team: "Team X", img: "/avatar-1.png" },
//         { id: 2, name: "Coach B", team: "Team Y", img: "/avatar-2.png" },
//         { id: 3, name: "Coach C", team: "Team Z", img: "/avatar-3.png" },
//         { id: 4, name: "Coach D", team: "Team W", img: "/avatar-4.png" },
//         { id: 5, name: "Coach A", team: "Team X", img: "/avatar-5.png" },
//         { id: 6, name: "Coach B", team: "Team Y", img: "/avatar-6.png" },
//         { id: 7, name: "Coach C", team: "Team Z", img: "/avatar-7.png" },
//         { id: 8, name: "Coach D", team: "Team W", img: "/avatar-8.png" },
//         // Add the rest of the nominees
//       ],
//     },
//     // Add the remaining categories and nominees
//   ];



//   export default function ViewSelections() {
//     const [selections, setSelections] = useState<Record<number, Nominee>>({}); // Selections will now store full Nominee objects
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchSelections = async () => {
//         try {
//           const sessionId = Cookies.get('sessionId');
  
//           if (!sessionId) {
//             console.error('No session ID found');
//             setLoading(false);
//             return;
//           }
  
//           // Fetch selections using sessionId
//           const response = await fetch('/api/myselection', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ sessionId }),
//           });
  
//           const data = await response.json();
  
//           if (response.ok) {
//             setSelections(data.selections);  // Set the selections in state
//           } else {
//             console.error(data.message || 'Failed to retrieve votes');
//           }
//         } catch (error) {
//           console.error('Error fetching votes:', error);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchSelections();
//     }, []);
  
//     if (loading) {
//       return <p>Loading...</p>;
//     }
  
//     // Check if the selections object is empty
//     if (Object.keys(selections).length === 0) {
//       return <p>No votes found for this session.</p>;
//     }
  
//     return (
//       <div className="container mx-auto px-6 py-8 mt-4">
//         <div className="container flex flex-col items-center text-center">
//           <Image
//             src="/raiders-logo.png"
//             alt="rugby Icon"
//             width={200}
//             height={200}
//             className="mr-3 transform translate-y-1 mb-8"
//           />
  
//           <div className="w-full md:w-auto">
//             <Image
//               src="/team.png"
//               alt="rugby Icon"
//               layout="responsive"
//               width={200}
//               height={200}
//               className="w-full h-auto mb-8 rounded-lg"
//               style={{
//                 objectFit: 'cover',
//               }}
//             />
//           </div>
  
//           <div className="flex items-center justify-center">
//             <Image
//               src="/rugby.svg"
//               alt="rugby Icon"
//               width={40}
//               height={40}
//               className="mr-3 transform translate-y-1"
//             />
//             <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#dcc94a] bg-clip-text">
//               2024 Awards
//             </h1>
//           </div>
  
//           <h3 className="text-[#FFFFFF] text-2xl sm:text-2xl md:text-3xl mt-4 mb-4">
//             Vote for your winners
//           </h3>
  
//           <div className="flex justify-start w-full lg:w-[75%] px-4">
//             <a className="text-[blue] mb-4" href="/">{`< back`}</a>
//           </div>
//         </div>
  
//         <h1 className="text-5xl font-extrabold mb-4 text-blue-900 text-center">
//           My Selections
//         </h1>
  
//         <ul>
//           {Object.entries(selections).map(([categoryId, nominee]) => {
//             return (
//               <li key={categoryId} className="mb-6">
//                 <h2 className="text-2xl font-bold mb-2">
//                   {categories.find(cat => cat.id === Number(categoryId))?.name || `Category ${categoryId}`}
//                 </h2>
  
//                 <div className="flex items-center">
//                   <Image
//                     src={nominee.img}
//                     alt={nominee.name}
//                     width={100}
//                     height={100}
//                     className="rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <p className="text-lg font-semibold">{nominee.name}</p>
//                     <p className="text-sm text-gray-500">{nominee.team}</p>
//                   </div>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }



"use client";  // Ensure this component is client-side

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';  // For managing cookies
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Nominee {
  id: number;
  name: string;
  team: string;
  img: string;
}

interface Category {
  id: number;
  name: string;
  nominees: Nominee[];
}

const categories: Category[] = [
    {
      id: 1,
      name: "Best First Team player",
      nominees: [
        { id: 1, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-1.png" },
        { id: 2, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-2.png" },
        { id: 3, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-3.png" },
        { id: 4, name: "R. Dias", team: "Manchester City", img: "/avatar-4.png" },
        { id: 5, name: "J. Kingsley", team: "Real Madrid", img: "/avatar-5.png" },
        { id: 6, name: "H. Phillips", team: "Inter Milan", img: "/avatar-6.png" },
        { id: 7, name: "D. White", team: "Real Madrid", img: "/avatar-7.png" },
        { id: 8, name: "R. Johnson", team: "Manchester City", img: "/avatar-8.png" },
        // Add the rest of the nominees
      ],
    },
    {
      id: 2,
      name: "Best Forward",
      nominees: [
        { id: 1, name: "J. Bellingham", team: "Real Madrid", img: "/avatar-1.png" },
        { id: 2, name: "H. Çalhanoğlu", team: "Inter Milan", img: "/avatar-2.png" },
        { id: 3, name: "D. Carvajal", team: "Real Madrid", img: "/avatar-3.png" },
        { id: 4, name: "R. Dias", team: "Manchester City", img: "/avatar-4.png" },
        { id: 5, name: "J. Kingsley", team: "Real Madrid", img: "/avatar-5.png" },
        { id: 6, name: "H. Phillips", team: "Inter Milan", img: "/avatar-6.png" },
        { id: 7, name: "D. White", team: "Real Madrid", img: "/avatar-7.png" },
        { id: 8, name: "R. Johnson", team: "Manchester City", img: "/avatar-8.png" },
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
        { id: 5, name: "J. Kingsley", team: "Real Madrid", img: "/avatar-5.png" },
        { id: 6, name: "H. Phillips", team: "Inter Milan", img: "/avatar-6.png" },
        { id: 7, name: "D. White", team: "Real Madrid", img: "/avatar-7.png" },
        { id: 8, name: "R. Johnson", team: "Manchester City", img: "/avatar-8.png" },
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
        { id: 4, name: "Coach D", team: "Team P", img: "/avatar-4.png" },
        { id: 5, name: "Coach E", team: "Team D", img: "/avatar-5.png" },
        { id: 6, name: "Coach F", team: "Team Q", img: "/avatar-6.png" },
        { id: 7, name: "Coach G", team: "Team R", img: "/avatar-7.png" },
        { id: 8, name: "Coach H", team: "Team S", img: "/avatar-8.png" },
        // Add the rest of the nominees
      ],
    },
    {
      id: 5,
      name: "Best Backline Coach",
      nominees: [
        { id: 1, name: "Coach A", team: "Team X", img: "/avatar-1.png" },
        { id: 2, name: "Coach B", team: "Team Y", img: "/avatar-2.png" },
        { id: 3, name: "Coach C", team: "Team Z", img: "/avatar-3.png" },
        { id: 4, name: "Coach D", team: "Team P", img: "/avatar-4.png" },
        { id: 5, name: "Coach E", team: "Team D", img: "/avatar-5.png" },
        { id: 6, name: "Coach F", team: "Team Q", img: "/avatar-6.png" },
        { id: 7, name: "Coach G", team: "Team R", img: "/avatar-7.png" },
        { id: 8, name: "Coach H", team: "Team S", img: "/avatar-8.png" },
        // Add the rest of the nominees
      ],
    },
  
    {
      id: 6,
      name: "Best Conditioning Coach",
      nominees: [
        { id: 1, name: "Coach A", team: "Team X", img: "/avatar-1.png" },
        { id: 2, name: "Coach B", team: "Team Y", img: "/avatar-2.png" },
        { id: 3, name: "Coach C", team: "Team Z", img: "/avatar-3.png" },
        { id: 4, name: "Coach D", team: "Team P", img: "/avatar-4.png" },
        { id: 5, name: "Coach E", team: "Team D", img: "/avatar-5.png" },
        { id: 6, name: "Coach F", team: "Team Q", img: "/avatar-6.png" },
        { id: 7, name: "Coach G", team: "Team R", img: "/avatar-7.png" },
        { id: 8, name: "Coach H", team: "Team S", img: "/avatar-8.png" },
        // Add the rest of the nominees
      ],
    },
    {
      id: 7,
      name: "Best Team Manager",
      nominees: [
        { id: 1, name: "Manager A", team: "Team X", img: "/avatar-1.png" },
        { id: 2, name: "Manager B", team: "Team Y", img: "/avatar-2.png" },
        { id: 3, name: "Manager C", team: "Team Z", img: "/avatar-3.png" },
        { id: 4, name: "Manager D", team: "Team P", img: "/avatar-4.png" },
        { id: 5, name: "Manager E", team: "Team D", img: "/avatar-5.png" },
        { id: 6, name: "Manager F", team: "Team Q", img: "/avatar-6.png" },
        { id: 7, name: "Manager G", team: "Team R", img: "/avatar-7.png" },
        { id: 8, name: "Manager H", team: "Team S", img: "/avatar-8.png" },
        // Add the rest of the nominees
      ],
    },
    // Add the remaining categories and nominees
  ];


  interface NomineeWithPercentage extends Nominee {
    percentage: string; // We expect a percentage field for club votes
  }
  
  interface CategoryResult {
    categoryId: string;
    topNominees: NomineeWithPercentage[]; // Top 3 nominees per category
  }

//   export default function ViewSelections() {
//     const [selections, setSelections] = useState<Record<number, Nominee>>({});
//     const [loading, setLoading] = useState(true);
  
//     const resultsRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//       target: resultsRef,
//       offset: ["start end", "end start"]
//     });
  
//     const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  
//     useEffect(() => {
//       const fetchSelections = async () => {
//         try {
//           const sessionId = Cookies.get('sessionId');
  
//           if (!sessionId) {
//             console.error('No session ID found');
//             setLoading(false);
//             return;
//           }
  
//           const response = await fetch('/api/myselection', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ sessionId }),
//           });
  
//           const data = await response.json();
  
//           if (response.ok) {
//             setSelections(data.selections);
//           } else {
//             console.error(data.message || 'Failed to retrieve votes');
//           }
//         } catch (error) {
//           console.error('Error fetching votes:', error);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchSelections();
//     }, []);
  
//     if (loading) {
//       return <p>Loading...</p>;
//     }
  
//     if (Object.keys(selections).length === 0) {
//       return <p>No votes found for this session.</p>;
//     }
  
//     return (
//       <section
//         ref={resultsRef}
//         className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[#1D1D1B] min-h-screen overflow-x-clip'
//       >
//         <div className="container flex flex-col items-center text-center">
//           <Image
//             src="/raiders-logo.png"
//             alt="rugby Icon"
//             width={200}
//             height={200}
//             className="mr-3 transform translate-y-1 mb-8"
//           />
//           <div className="w-full md:w-auto">
//             <Image
//               src="/team.png"
//               alt="rugby Icon"
//               layout="responsive"
//               width={200}
//               height={200}
//               className="w-full h-auto mb-8 rounded-lg"
//               style={{ objectFit: 'cover' }}
//             />
//           </div>
  
//           <div className="flex items-center justify-center">
//             <Image
//               src="/rugby.svg"
//               alt="rugby Icon"
//               width={40}
//               height={40}
//               className="mr-3 transform translate-y-1"
//             />
//             <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#dcc94a] bg-clip-text">
//               2024 Awards
//             </h1>
//           </div>
  
//           <h3 className='text-[#FFFFFF] text-2xl sm:text-2xl md:text-3xl mt-4 mb-4'>Here are your selections</h3>
  
//           <div className="flex justify-start w-full lg:w-[75%] px-4"> 
//             <a className="text-[blue] mb-4" href="/">{`< back`}</a>
//           </div>
  
//           <ul className="w-full lg:w-[75%]">
//             {Object.entries(selections).map(([categoryId, nominee]) => {
//               const categoryName = categories.find(cat => cat.id === Number(categoryId))?.name || `Category ${categoryId}`;
              
//               return (
//                 <li key={categoryId} className="mb-6">
//                   {/* Grey background for category title, full width on small screens */}
//                   <div className='w-full md:w-[100%] min-h-[40px] flex items-center justify-center bg-[#575756] mt-4 mb-2 px-0'>
//   <h2 className="text-white text-center">{categoryName}</h2>
// </div>


//                   <div className="flex flex-col items-center">
//                     <Image
//                       src={nominee.img}
//                       alt={nominee.name}
//                       width={100}
//                       height={100}
//                       className="rounded-full object-cover mb-4"
//                     />
//                     <p className="text-lg font-semibold text-white">{nominee.name}</p>
//                     <p className="text-sm text-gray-400">{nominee.team}</p>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//           <button className='btn btn-primary'>Redo my selection</button>
//             <hr className='w-3/4 border-t border-gray-300 my-4 mx-auto'/>
//             <h2 className='text-white text-lg font-semibold'>The club's vote</h2>

//         </div>
//       </section>
//     );
//   }



export default function ViewSelections() {
  const [selections, setSelections] = useState<Record<number, Nominee>>({});
  const [clubVotes, setClubVotes] = useState<CategoryResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSelections = async () => {
      try {
        const sessionId = Cookies.get("sessionId");

        if (!sessionId) {
          console.error("No session ID found");
          setLoading(false);
          return;
        }

        const response = await fetch("/api/myselection", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });

        const data = await response.json();

        if (response.ok) {
          setSelections(data.selections);
        } else {
          console.error(data.message || "Failed to retrieve votes");
        }
      } catch (error) {
        console.error("Error fetching votes:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchClubVotes = async () => {
      try {
        const response = await fetch("/api/peoples_choice"); // Fetch top 3 results
        const data = await response.json();

        if (response.ok) {
          setClubVotes(data.results);
        } else {
          console.error("Failed to retrieve club votes");
        }
      } catch (error) {
        console.error("Error fetching club votes:", error);
      }
    };

    fetchSelections();
    fetchClubVotes();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (Object.keys(selections).length === 0) {
    return <p>No votes found for this session.</p>;
  }

  return (
    <section className="pt-8 pb-20 bg-[#1D1D1B] min-h-screen">
      <div className="container flex flex-col items-center text-center">
        <Image
          src="/raiders-logo.png"
          alt="Rugby Icon"
          width={200}
          height={200}
          className="mr-3 mb-8"
        />

        <h1 className="text-4xl font-bold text-[#dcc94a] mb-6">2024 Awards</h1>

        <h3 className="text-white text-2xl mt-4 mb-4">Here are your selections</h3>

        <ul className="w-full lg:w-[75%]">
          {Object.entries(selections).map(([categoryId, nominee]) => {
            const categoryName =
              categories.find((cat) => cat.id === Number(categoryId))?.name || `Category ${categoryId}`;
            return (
              <li key={categoryId} className="mb-6">
                <div className="w-full flex items-center justify-center bg-[#575756] py-2">
                  <h2 className="text-white">{categoryName}</h2>
                </div>

                <div className="flex flex-col items-center">
                  <Image
                    src={nominee.img}
                    alt={nominee.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover mb-4 mt-4"
                  />
                  <p className="text-lg font-semibold text-white">{nominee.name}</p>
                  <p className="text-sm text-gray-400">{nominee.team}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <button className="btn btn-primary">Redo my selection</button>

        {/* Divider */}
        <hr className="w-3/4 border-t border-gray-300 my-4 mx-auto" />

        <h2 className="text-white text-lg font-semibold">THE CLUB'S CHOICE</h2>

        {/* Display club vote results */}
        {clubVotes.length > 0 ? (
          <div className="w-full lg:w-[75%] mt-8">
            {clubVotes.map((category) => {
              const categoryName =
                categories.find((cat) => cat.id === Number(category.categoryId))?.name || `Category ${category.categoryId}`;

              return (
                <div key={category.categoryId} className="mb-8">
                 <div className='bg-[#575756] w-full min-h-[40px] items-center mb-4'>
                 <h3 className="text-white text-lg font-semibold mb-4">{categoryName}</h3> 
                </div> 

                  <ul className="w-full">
                    {category.topNominees.map((nominee) => (
                      <div>
                      <li key={nominee.id} className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          <Image
                            src={nominee.img}
                            alt={nominee.name}
                            width={50}
                            height={50}
                            className="rounded-full object-cover mr-4"
                          />
                          <div>
                            <p className="text-lg text-white">{nominee.name}</p>
                            <p className="text-sm text-gray-400">{nominee.team}</p>
                          </div>
                        </div>
                        <p className="text-lg font-bold text-[#dcc94a]">{nominee.percentage}</p>

                      </li>
                      <hr className="w-full border-t border-gray-300/15 my-4 mx-auto" />

                      </div>

                    ))}
                  </ul>

                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-400 mt-4">No votes found for the club.</p>
        )}
      </div>
    </section>
  );
}
