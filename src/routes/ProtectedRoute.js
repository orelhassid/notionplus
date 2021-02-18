import React, { useContext } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { RT_LOGIN } from "../config";
import { UserContext } from "../contexts/UserContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  // console.log("User", user);

  return user.isAuth ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : user.isLoading ? (
    "Loading..."
  ) : (
    <Redirect
      to={{
        pathname: RT_LOGIN,
        state: { from: location },
      }}
    />
  );

  // return <Route {...rest} render={(props) => <Component {...props} />} />;
};
export default ProtectedRoute;
