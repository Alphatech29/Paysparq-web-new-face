import { toast } from 'react-toastify';
import supabase from '../supabaseClient';

// Sign In Function
export async function signIn(email, password, rememberUser) {
  if (!email || !password) {
    toast.error('Please enter both email and password.');
    return { success: false };
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.error('Login Error:', error.message);
      toast.error(error.message || 'Error during login.');
      return { success: false };
    }

    if (!data.session) {
      toast.error('Authentication failed. Please try again.');
      return { success: false };
    }

    // Save the session in either localStorage or sessionStorage
    const storage = rememberUser ? localStorage : sessionStorage;
    storage.setItem('isAuthenticated', 'true');
    storage.setItem('access_token', data.session.access_token);

    toast.success('Login successful!');

    // Redirect after 2 seconds
    setTimeout(() => {
      window.location.href = '/user/dashboard';
    }, 2500);

    return { success: true };
  } catch (err) {
    console.error('Unexpected Error during login:', err);
    toast.error('Unexpected error occurred. Please try again.');
    return { success: false };
  }
}

// Logout Function
export async function logout() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Logout Error:', error.message);
      toast.error(error.message || 'Error during logout.');
      return;
    }

    // Clear localStorage and sessionStorage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('access_token');
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('access_token');

    toast.success('Logout successful!');

    // Redirect to login page
    window.location.href = '/auth/login';
  } catch (err) {
    console.error('Unexpected Error during logout:', err);
    toast.error('Unexpected error occurred. Please try again.');
  }
}
