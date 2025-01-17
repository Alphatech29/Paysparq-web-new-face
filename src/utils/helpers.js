export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  return password.length >= 6; // Example: minimum length of 6 characters
};

export const formatErrorMessage = (error) => {
  return error.message || 'An unknown error occurred';
};