import client from "./client";

const login = (email, password) =>
  client.post("/auth", {
    email,
    password,
  });

const googleAuth = (token) => client.post("/auth/google", { token });

const register = (userInfo) => client.post("/users", userInfo);

export default {
  login,
  register,
  googleAuth,
};
