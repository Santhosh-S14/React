export const checkValidData = (email, password) => {
  const checkEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const checkPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!checkEmail) return "Invalid email address";
  if (!checkPassword) return "Invalid password";
  return null;
};
