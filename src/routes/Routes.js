import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { RT_LOGIN, RT_LOGOUT, RT_NOTFOUND } from "../config";
import Home from "../pages/root/Home";
import Login from "../pages/root/Login";
import Logout from "../pages/root/Logout";
import NotFound from "../pages/root/NotFound";
import Profile from "../pages/profile/Profile";
import ProtectedRoute from "./ProtectedRoute";

export default function Routes() {
  return (
    <Switch>
      <Route path={RT_LOGIN} component={Login} />
      <Route path={RT_LOGOUT} component={Logout} />
      <Route path={RT_LOGOUT} component={Profile} />
      <Route exact path={RT_NOTFOUND} component={NotFound} />
      <Route exact path="/" component={Home} />
      <Redirect to={RT_NOTFOUND} />
    </Switch>
  );
}
