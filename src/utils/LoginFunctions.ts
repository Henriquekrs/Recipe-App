export const validateEmail = (email: string): boolean => {
  const regexEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email);
};

export const validatePassword = (password: string): boolean => {
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regexPassword.test(password);
};