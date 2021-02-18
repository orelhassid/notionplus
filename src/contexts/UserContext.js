import React, { createContext, useEffect } from "react";
import useThunkReducer from "react-hook-thunk-reducer";
import userReducer from "../reducers/user";
import { USER } from "../config";
import { initialUser } from "./initials";
import { fetchUser } from "../actions/user";

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
  const [user, dispatchUser] = useThunkReducer(userReducer, () => {
    const userProfile = localStorage.getItem(USER);

    return userProfile ? JSON.parse(userProfile) : initialUser;
  });

  useEffect(() => {
    async function fetch() {
      try {
        await dispatchUser(fetchUser());
      } catch (error) {}
    }
    fetch();
  }, []);

  useEffect(() => {
    localStorage.setItem(USER, JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        dispatchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
