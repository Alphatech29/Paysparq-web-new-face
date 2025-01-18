import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../superBase/supabaseClient'; // Adjust the path as needed

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Null indicates loading state

  useEffect(() => {
    let authSubscription;

    const checkAuth = async () => {
      try {
        // Fetch the current session
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error) {
          console.error('Error fetching session:', error.message);
          setIsAuthenticated(false);
          return;
        }

        // Check if the user is authenticated
        if (session) {
          const now = Math.floor(Date.now() / 1000); // Current time in seconds
          if (session.expires_at && session.expires_at < now) {
            await supabase.auth.signOut(); // Session expired, sign out user
            localStorage.removeItem('isAuthenticated');
            sessionStorage.removeItem('isAuthenticated');
            setIsAuthenticated(false);
          } else {
            setIsAuthenticated(true); // Valid session
          }
        } else {
          setIsAuthenticated(false); // No session found
        }
      } catch (err) {
        console.error('Unexpected error during auth check:', err);
        setIsAuthenticated(false);
      }
    };

    checkAuth();

    // Listen for authentication state changes
    authSubscription = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session?.user);
    });

    // Cleanup the listener
    return () => {
      authSubscription?.subscription?.unsubscribe();
    };
  }, []);

  // Show a loading spinner or fallback UI while authentication is being verified
  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    navigate('/auth/login', { replace: true }); // Prevents state update during render
    return null;
  }

  // Render children if authenticated
  return children;
};

export default PrivateRoute;
