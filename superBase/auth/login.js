import { supabase } from '../supabaseClient';

export const loginUser = async (email, password) => {
    const { user, error } = await supabase.auth.signIn({
        email,
        password,
    });

    if (error) {
        throw error;
    }

    return user;
};