// import { Pool } from 'pg';

// // Create a connection to your PostgreSQL database
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'raiders',
//   password: 'Milkyway147!',
//   port: 5432,  // Default PostgreSQL port
// });

// export async function GET() {
//   try {
//     // Query to get all selections from the votes table
//     const query = 'SELECT selections FROM votes';
//     const result = await pool.query(query);  // Execute the query to get all votes

//     if (result.rows.length === 0) {
//       return new Response(JSON.stringify({ message: 'No votes found' }), {
//         status: 404,  // Not Found
//       });
//     }

//     const allSelections = result.rows.map(row => row.selections); // Extract all selections

//     const categoryVotes = {};

//     // Loop through all votes
//     allSelections.forEach(selection => {
//       Object.entries(selection).forEach(([categoryId, nominee]) => {
//         // Initialize if category not yet counted
//         if (!categoryVotes[categoryId]) {
//           categoryVotes[categoryId] = {};
//         }

//         // Count votes per nominee
//         const nomineeId = nominee.id;
//         if (!categoryVotes[categoryId][nomineeId]) {
//           categoryVotes[categoryId][nomineeId] = { ...nominee, votes: 0 };
//         }
//         categoryVotes[categoryId][nomineeId].votes += 1; // Increment the vote count
//       });
//     });

//     const processedResults = Object.entries(categoryVotes).map(([categoryId, nominees]) => {
//       const totalVotes = Object.values(nominees).reduce((sum, nominee) => sum + nominee.votes, 0);

//       // Sort nominees by votes and get top 3
//       const topNominees = Object.values(nominees)
//         .sort((a, b) => b.votes - a.votes) // Sort by votes (descending)
//         .slice(0, 3) // Get top 3
//         .map(nominee => ({
//           ...nominee,
//           percentage: ((nominee.votes / totalVotes) * 100).toFixed(1) + '%',
//         }));

//       return {
//         categoryId,
//         topNominees,
//       };
//     });

//     // Return the processed results to the frontend
//     return new Response(JSON.stringify({ results: processedResults }), {
//       status: 200,  // OK
//     });

//   } catch (error) {
//     console.error('Error retrieving votes:', error);
//     return new Response(JSON.stringify({ error: 'Failed to retrieve votes' }), {
//       status: 500,  // Internal Server Error
//     });
//   }
// }



import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'raiders',
  password: 'Milkyway147!',
  port: 5432,
});

export async function GET() {
  try {
    const query = 'SELECT selections FROM votes';
    const result = await pool.query(query);
    
    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ message: 'No votes found' }), { status: 404 });
    }

    const allSelections = result.rows.map(row => row.selections);
    const voteCounts = {};

    // Loop through each vote and count nominees for each category
    allSelections.forEach(selection => {
      Object.entries(selection).forEach(([categoryId, nominee]) => {
        if (!voteCounts[categoryId]) {
          voteCounts[categoryId] = {};
        }

        if (!voteCounts[categoryId][nominee.id]) {
          voteCounts[categoryId][nominee.id] = { ...nominee, votes: 0 };
        }

        voteCounts[categoryId][nominee.id].votes += 1;
      });
    });

    // Prepare results: Calculate percentage for each nominee in each category
    const clubVoteResults = Object.entries(voteCounts).map(([categoryId, nominees]) => {
      const totalVotes = Object.values(nominees).reduce((sum, nominee) => sum + nominee.votes, 0);

      // Sort nominees by votes and calculate percentage
      const topNominees = Object.values(nominees)
        .sort((a, b) => b.votes - a.votes)
        .slice(0, 3) // Get top 3 nominees
        .map(nominee => ({
          ...nominee,
          percentage: ((nominee.votes / totalVotes) * 100).toFixed(1) + '%',
        }));

      return {
        categoryId,
        topNominees,
      };
    });

    return new Response(JSON.stringify({ results: clubVoteResults }), { status: 200 });

  } catch (error) {
    console.error('Error fetching votes:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch votes' }), { status: 500 });
  }
}
