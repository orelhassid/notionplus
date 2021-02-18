import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { logoutUser } from "../../actions/user";
import { RT_LOGIN } from "../../config";
export default function Logout() {
  const { dispatchUser } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    try {
      dispatchUser(logoutUser());
      return history.push(RT_LOGIN);
    } catch (error) {
      console.error(error);
    }
  }, [dispatchUser, history]);
  return null;
}
