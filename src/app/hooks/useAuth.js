import { useContext, useState } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "../contexts/auth";
import authStorage from "../services/auth";

const useAuth = () => {
  const { user, setUser, setStatus, status } = useContext(AuthContext);

  const login = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);

    setStatus((prev) => ({ ...prev, isLogin: true }));
  };

  const logout = () => {
    setUser({});
    authStorage.removeToken();
    setStatus((prev) => ({ ...prev, isLogin: false }));
  };

  return { user, setUser, login, logout, status };
};
export default useAuth;
