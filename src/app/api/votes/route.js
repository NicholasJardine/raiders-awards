// // Import necessary modules
// import { Pool } from 'pg';

// // Create a connection to your PostgreSQL database
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'raiders',
//   password: 'Milkyway147!',
//   port: 5432, // Default PostgreSQL port
// });

// // Named export for POST method
// export async function POST(req) {
//   try {
//     const body = await req.json();  // Parse the request body
//     const { selections } = body;    // Extract the selections

//     // Insert the selections into the votes table
//     const query = 'INSERT INTO votes (selections) VALUES ($1)';
//     const values = [JSON.stringify(selections)];

//     await pool.query(query, values);  // Execute the query

//     return new Response(JSON.stringify({ message: 'Votes submitted successfully' }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error('Error submitting votes:', error);
//     return new Response(JSON.stringify({ message: 'Error recording votes' }), {
//       status: 500,
//     });
//   }
// }



// Import necessary modules
import { Pool } from 'pg';

// Create a connection to your PostgreSQL database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'raiders',
  password: 'Milkyway147!',
  port: 5432, // Default PostgreSQL port
});

// Named export for POST method
export async function POST(req) {
  try {
    const body = await req.json();  // Parse the request body
    const { selections, sessionId } = body;  // Extract the selections and sessionId

    // Insert the sessionId and selections into the votes table
    const query = 'INSERT INTO votes (session_id, selections) VALUES ($1, $2)';
    const values = [sessionId, JSON.stringify(selections)];

    await pool.query(query, values);  // Execute the query

    return new Response(JSON.stringify({ message: 'Votes submitted successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error submitting votes:', error);
    return new Response(JSON.stringify({ message: 'Error recording votes' }), {
      status: 500,
    });
  }
}
