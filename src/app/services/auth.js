import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await localStorage.setItem(key, authToken);
  } catch (error) {
    console.error("Error: Storing the Auth Token", error);
  }
};

const getToken = async () => {
  try {
    return await localStorage.getItem(key);
  } catch (error) {
    console.error("Error: Get the Auth Token", error);
  }
};

const removeToken = async () => {
  try {
    await localStorage.removeItem(key);
  } catch (error) {
    console.error("Error: Removing the Auth Token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

export default {
  getToken,
  storeToken,
  removeToken,
  getUser,
};
