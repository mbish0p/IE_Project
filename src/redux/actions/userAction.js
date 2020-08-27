export const user = ({ id, email, jwt }) => {
  return {
    type: "NEW_USER",
    id,
    email,
    jwt,
  };
};
