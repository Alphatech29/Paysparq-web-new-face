import supabase from '../../superBase/supabaseClient.js';

// Function to sign up a new user with additional metadata
export async function signUp(userData) {
  const { email, password, name, country, phone, referral } = userData;

  try {
    // Check if the email already exists
    const { data: emailExists, error: emailError } = await supabase
      .from('users')
      .select('id')
      .eq('email', email)
      .single();

    if (emailError && emailError.code !== 'PGRST116') {
      // Ignore the "no rows found" error (PGRST116), but handle others
      console.error('Error checking email:', emailError.message);
      return { error: 'Error checking email. Please try again.' };
    }

    if (emailExists) {
      return { error: 'The email address is already in use. Please use a different email.' };
    }

    // Check if the phone already exists
    const { data: phoneExists, error: phoneError } = await supabase
      .from('users')
      .select('id')
      .eq('phone', phone)
      .single();

    if (phoneError && phoneError.code !== 'PGRST116') {
      // Ignore the "no rows found" error (PGRST116), but handle others
      console.error('Error checking phone:', phoneError.message);
      return { error: 'Error checking phone number. Please try again.' };
    }

    if (phoneExists) {
      return { error: 'The phone number is already in use. Please use a different phone number.' };
    }

    // Sign up the user with Supabase Auth
    const { data: signUpResponse, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          country,
          phone,
          referral,
        },
      },
    });

    const user = signUpResponse?.user;

    if (signUpError || !user) {
      console.error('Error signing up:', signUpError ? signUpError.message : 'User is undefined');
      return { error: signUpError ? signUpError.message : 'User is undefined' };
    }

    // Insert user data into the database
    const { data, error: dbError } = await supabase
      .from('users')
      .insert([
        {
          id: user.id,
          email,
          name,
          country,
          phone,
          referral,
        },
      ]);

    if (dbError) {
      console.error('Error inserting user data into database:', dbError.message);
      return { error: dbError.message };
    }
 // Navigate to the login page
 window.location.href = '/auth/login';
    return { user };
  } catch (err) {
    console.error('Unexpected error during sign-up:', err.message);
    return { error: err.message };
  }
}
