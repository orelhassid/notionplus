import { mapUserObject } from "../utils/mapBackend";
import client from "./client";

const register = async ({ email, password }) => {};

const login = async ({ email, password }) => {};

const update = async (userInfo) => {};

const deleteUser = async () => {};

const logout = async () => {};

const authGoogle = async (tokenId) => client.post("/auth/google", { tokenId });

const authEmail = async ({ email, actionCodeSettings }) => {};

const returnData = (userCredential) => {
  return {
    data: mapUserObject({}),
    isNewUser: true,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  update,
  deleteUser,
  authGoogle,
  authEmail,
};
