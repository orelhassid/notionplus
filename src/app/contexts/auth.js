import React, { useEffect, useState, createContext } from "react";
import authStorage from "../services/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children, onReady }) => {
  const [user, setUser] = useState({});
  const [status, setStatus] = useState({
    isLogin: false,
  });
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) {
      setUser(user);
      setStatus((prev) => ({ ...prev, isLogin: true }));
    }
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
