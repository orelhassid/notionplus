import { FETCH, LOGOUT, UPDATE } from "../config/actionsTypes";
import { initialUser } from "../contexts/initials";

const userReducer = (user = initialUser, { type, payload }) => {
  console.log("user Reducer", { user, type, payload });
  switch (type) {
    case FETCH:
    case UPDATE:
      payload.isLoading = false;
      const updatedUser = { ...initialUser, ...user, ...payload };
      return updatedUser;
    case LOGOUT:
      return { ...initialUser, isLoading: false };

    default:
      return user;
  }
};

export default userReducer;
