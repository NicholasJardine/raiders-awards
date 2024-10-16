"use client";  // Ensure this component is client-side

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';  // For managing cookies

export default function ViewSelections() {
  // Directly use Record<number, number> in the useState without defining a separate type
  const [selections, setSelections] = useState<Record<number, number>>({});
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
      <h1 className="text-5xl font-extrabold mb-4 text-blue-900 text-center">
        Your Voting Selections
      </h1>
      <ul>
        {Object.entries(selections).map(([categoryId, nomineeId]) => (
          <li key={categoryId}>
            Category {categoryId}: Nominee {nomineeId}
          </li>
        ))}
      </ul>
    </div>
  );
}
