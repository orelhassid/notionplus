import React, { useContext } from "react";
import { Redirect, Route, useHistory, useLocation } from "react-router-dom";
import { RT_LOGIN, RT_PROFILE } from "../config";
import { UserContext } from "../contexts/UserContext";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();

  if (user.isLoading) {
    return "Loading...";
  } else {
    return !user.isAuth ? (
      <Route {...rest} render={(props) => <Component {...props} />} />
    ) : (
      <Redirect to={RT_PROFILE} />
    );
  }
};
export default AuthRoute;
