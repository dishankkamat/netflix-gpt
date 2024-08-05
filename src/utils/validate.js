export const checkValidData = (email, password) => {
  const isemailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isemailValid) return "Email is  Not Valid";
  if (!isPasswordValid) return "Password is Not Valid";
  return null;
};
