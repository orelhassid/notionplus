import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router";

import {
  LOGIN_RT,
  HOME_RT,
  PROFILE_RT,
  LOGOUT_RT,
  SITES_RT,
  SITES_CREATE_RT,
  SITE_MANAGE_RT,
} from "../config/routes";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
import AccountPage from "../pages/AccountPage";
import useAuth from "../hooks/useAuth";

import SitesPage from "../pages/sites/SitesPage";
import SiteCreate from "../pages/sites/SiteCreate";
import SiteManage from "../pages/sites/SiteManage";

export default function AppRouter() {
  return (
    <Switch>
      <RedirectAuthRoute path={LOGIN_RT} component={LoginPage} />
      <Route path={LOGOUT_RT} component={LogoutPage} />
      <ProtectedRoute path={PROFILE_RT} component={AccountPage} />
      <ProtectedRoute path={SITES_CREATE_RT} component={SiteCreate} />
      <ProtectedRoute path={SITE_MANAGE_RT} component={SiteManage} />
      <ProtectedRoute path={SITES_RT} component={SitesPage} />
      <Route path={HOME_RT} component={Home} />
    </Switch>
  );
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { status } = useAuth();
  const location = useLocation();

  return status.isLogin ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: LOGIN_RT,
        state: { from: location },
      }}
    />
  );
};

const RedirectAuthRoute = ({ component: Component, ...rest }) => {
  const { status } = useAuth();
  const location = useLocation();

  return !status.isLogin ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: PROFILE_RT,
        state: { from: location },
      }}
    />
  );
};
