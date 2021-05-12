import { useContext } from "react";
import { useHistory } from "react-router";
import jwtDecode from "jwt-decode";

import AuthContext from "../contexts/auth";
import { storageKeys } from "../config";
import storage from "../services/storage";
import useAlert from "./useAlert";
import authApi from "../api/auth";
import { mapUserObject } from "../utils/mapBackend";
import { HOME_RT } from "../config/routes";

const useAuth = () => {
  const { user, setUser, status, setStatus } = useContext(AuthContext);

  const { setAlert } = useAlert();
  const history = useHistory();

  const register = async ({ email, password }) => {
    setAlert({
      message: "Register successfuly",
    });
  };

  const login = async (authToken) => {
    setAlert({
      message: "Authenticate successfuly",
    });
  };

  const update = async (userInfo) => {
    try {
      await authApi.update(userInfo);

      setAlert({
        message: "Update User successfuly",
      });
    } catch (error) {
      setAlert({
        message: "Update Error",
      });
      console.error(error);
    }
  };

  const logout = async () => {
    setUser({});
    setStatus((prev) => ({ ...prev, isLogin: false }));
    storage.remove(storageKeys.user);

    setAlert({
      message: "Logout successfuly",
    });

    history.push(HOME_RT);
  };

  const restore = async () => {
    let user = storage.get(storageKeys.user);
    user = mapUserObject(user);

    setAlert({
      message: "Restore User",
      type: "info",
    });
  };

  const authGoogle = async (googleToken) => {
    const response = await authApi.authGoogle(googleToken.tokenId);

    storage.set(storageKeys.user, response.data.token);

    const user = jwtDecode(response.data.token);
    setUser(user);
    setStatus((prev) => ({ ...prev, isLogin: true }));

    // return result;
  };

  return {
    user,
    status,
    register,
    login,
    restore,
    logout,
    update,
    authGoogle,
  };
};
export default useAuth;
