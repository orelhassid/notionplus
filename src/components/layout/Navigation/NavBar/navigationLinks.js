import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import LoginIcon from "@material-ui/icons/VpnKey";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { RT_LOGIN, RT_LOGOUT } from "../../../../config";
export function getCommonLinks(user) {
  return [
    { label: "Home", to: "/", icon: <HomeIcon /> },
    { label: "Login", to: RT_LOGIN, icon: <LoginIcon />, skip: user?.isAuth },
    {
      label: "Logout",
      to: RT_LOGOUT,
      icon: <LogoutIcon />,
      skip: !user?.isAuth,
    },
  ];
}

export function getProtectedLinks() {
  return [];
}
