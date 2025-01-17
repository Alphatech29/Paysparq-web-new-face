import { supabase } from '../supabaseClient';

export const signupUser = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        throw error;
    }

    return user;
};