import { Pool } from 'pg';

// Create a connection to your PostgreSQL database
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'raiders',
  password: 'Milkyway147!',
  port: 5432,  // Default PostgreSQL port
});

export async function POST(req) {
  try {
    const body = await req.json();  // Parse the request body
    const { sessionId } = body;     // Extract the sessionId from the request body

    if (!sessionId) {
      return new Response(JSON.stringify({ error: 'Session ID is required' }), {
        status: 400,  // Bad Request if sessionId is missing
      });
    }

    // Query to get the votes for the given session ID
    const query = 'SELECT selections FROM votes WHERE session_id = $1';
    const values = [sessionId];

    const result = await pool.query(query, values);  // Execute the query

    if (result.rows.length > 0) {
      // Return the selections to the frontend
      return new Response(JSON.stringify({ selections: result.rows[0].selections }), {
        status: 200,  // OK
      });
    } else {
      return new Response(JSON.stringify({ message: 'No votes found for this session' }), {
        status: 404,  // Not Found
      });
    }
  } catch (error) {
    console.error('Error retrieving votes:', error);
    return new Response(JSON.stringify({ error: 'Failed to retrieve votes' }), {
      status: 500,  // Internal Server Error
    });
  }
}
