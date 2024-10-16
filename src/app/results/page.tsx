"use client";  // Ensure this component is client-side

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';  // For managing cookies
import Image from 'next/image';

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



  export default function ViewSelections() {
    const [selections, setSelections] = useState<Record<number, Nominee>>({}); // Selections will now store full Nominee objects
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchSelections = async () => {
        try {
          const sessionId = Cookies.get('sessionId');
  
          if (!sessionId) {
            console.error('No session ID found');
            setLoading(false);
            return;
          }
  
          // Fetch selections using sessionId
          const response = await fetch('/api/myselection', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sessionId }),
          });
  
          const data = await response.json();
  
          if (response.ok) {
            setSelections(data.selections);  // Set the selections in state
          } else {
            console.error(data.message || 'Failed to retrieve votes');
          }
        } catch (error) {
          console.error('Error fetching votes:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchSelections();
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    // Check if the selections object is empty
    if (Object.keys(selections).length === 0) {
      return <p>No votes found for this session.</p>;
    }
  
    return (
      <div className="container mx-auto px-6 py-8 mt-4">
        <div className="container flex flex-col items-center text-center">
          <Image
            src="/raiders-logo.png"
            alt="rugby Icon"
            width={200}
            height={200}
            className="mr-3 transform translate-y-1 mb-8"
          />
  
          <div className="w-full md:w-auto">
            <Image
              src="/team.png"
              alt="rugby Icon"
              layout="responsive"
              width={200}
              height={200}
              className="w-full h-auto mb-8 rounded-lg"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
  
          <div className="flex items-center justify-center">
            <Image
              src="/rugby.svg"
              alt="rugby Icon"
              width={40}
              height={40}
              className="mr-3 transform translate-y-1"
            />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#dcc94a] bg-clip-text">
              2024 Awards
            </h1>
          </div>
  
          <h3 className="text-[#FFFFFF] text-2xl sm:text-2xl md:text-3xl mt-4 mb-4">
            Vote for your winners
          </h3>
  
          <div className="flex justify-start w-full lg:w-[75%] px-4">
            <a className="text-[blue] mb-4" href="/">{`< back`}</a>
          </div>
        </div>
  
        <h1 className="text-5xl font-extrabold mb-4 text-blue-900 text-center">
          My Selections
        </h1>
  
        <ul>
          {Object.entries(selections).map(([categoryId, nominee]) => {
            return (
              <li key={categoryId} className="mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  {categories.find(cat => cat.id === Number(categoryId))?.name || `Category ${categoryId}`}
                </h2>
  
                <div className="flex items-center">
                  <Image
                    src={nominee.img}
                    alt={nominee.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="text-lg font-semibold">{nominee.name}</p>
                    <p className="text-sm text-gray-500">{nominee.team}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }