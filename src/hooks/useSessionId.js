"use client"; // Ensure this hook is client-side

import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

const useSessionId = () => {
  useEffect(() => {
    // Check if the user already has a session ID stored in cookies
    let sessionId = Cookies.get('sessionId');
    
    if (!sessionId) {
      // If no session ID exists, generate a new one
      sessionId = uuidv4();
      // Store the session ID in a cookie that expires in 7 days
      Cookies.set('sessionId', sessionId, { expires: 7 });
    }
  }, []);
};

export default useSessionId; // This is the default export
