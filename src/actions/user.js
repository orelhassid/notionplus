import { USER } from "../config";
import { FETCH, LOGOUT, UPDATE } from "../config/actionsTypes";
import * as api from "../api/user";

export const loginUser = (user) => async (dispatch) => {
  const payload = mapUserObject(user);
  try {
    const { data } = await api.loginUser(payload);

    dispatch({
      type: FETCH,
      payload: {
        ...data.user,
        token: data.token,
        isAuth: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchUser = () => async (dispatch) => {
  try {
    const payload = JSON.parse(localStorage.getItem(USER)) || {};

    dispatch({ type: FETCH, payload });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const logoutUser = () => (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
    localStorage.removeItem(USER);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE, payload: user });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

function mapUserObject(user) {
  return {
    googleId: user.googleId,
    image: user.imageUrl,
    email: user.email,
    name: user.name,
    firstName: user.givenName,
    lastName: user.familyName,
    password: user.password,
  };
}
