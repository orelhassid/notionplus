import React, { useEffect, useState, createContext } from "react";
import { storageKeys } from "../config";
import storage from "../services/storage";
import jwtDecode from "jwt-decode";
const AuthContext = createContext();

export const AuthContextProvider = ({ children, onReady }) => {
  const [user, setUser] = useState({});
  const [status, setStatus] = useState({
    isLogin: false,
  });

  const restoreUser = async () => {
    const token = await storage.get(storageKeys.user);
    if (!token) return onReady(true);

    const userStorage = jwtDecode(token);
    setUser(userStorage);
    setStatus((prev) => ({ ...prev, isLogin: true }));

    onReady(true);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
