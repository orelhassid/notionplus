import NotificationsIcon from "@material-ui/icons/Notifications";
import LoginIcon from "@material-ui/icons/VpnKey";
import HomeIcon from "@material-ui/icons/Home";
import AccountIcon from "@material-ui/icons/AccountCircle";
import SitesIcon from "@material-ui/icons/Public";
import LogoutIcon from "@material-ui/icons/ExitToApp";

import { HOME_RT, LOGIN_RT, PROFILE_RT, LOGOUT_RT, SITES_RT } from "./routes";

function getLinks(user, status) {
  return [
    {
      label: "Home",
      to: HOME_RT,
      icon: <HomeIcon />,
    },
    {
      label: "Login",
      to: LOGIN_RT,
      icon: <LoginIcon />,
      hide: status.isLogin,
    },
    {
      // label: "Account",
      label: user.name,
      to: PROFILE_RT,
      icon: <AccountIcon />,
      hide: !status.isLogin,
    },
    {
      label: "My Sites",
      to: SITES_RT,
      icon: <SitesIcon />,
      hide: !status.isLogin,
    },

    {
      label: "Logout",
      to: LOGOUT_RT,
      icon: <LogoutIcon />,
      hide: !status.isLogin,
    },
  ];
}

function getDashboardLinks({ user, status, handleClick }) {
  return [
    {
      label: "Home",
      to: "/",
      icon: <HomeIcon />,
    },
    {
      label: "Sites",
      icon: <SitesIcon />,
      to: SITES_RT,
    },
    {
      label: "Account",
      icon: <AccountIcon />,
      onClick: () => handleClick("Account"),
      nested: [
        {
          label: "Settings",
          to: "/account/settings",
        },
      ],
    },
    {
      label: "Logout",
      icon: <LogoutIcon />,
      to: LOGOUT_RT,
    },
  ];
}

export default {
  getLinks,
  getDashboardLinks,
};

// icon: <NotificationsIcon />,

// function getLinks(user, status) {
//   return [
//     {
//       label: "Home",
//       to: HOME_RT,
//       icon: <HomeIcon />,
//     },
//     {
//       label: "Login",
//       to: LOGIN_RT,
//       icon: <LoginIcon />,
//       hide: status.isLogin,
//     },
//     {
//       // label: "Account",
//       label: user.name,
//       to: PROFILE_RT,
//       icon: <AccountIcon />,
//       hide: !status.isLogin,
//     },
//     {
//       label: "My Sites",
//       to: SITES_RT,
//       icon: <SitesIcon />,
//       hide: !status.isLogin,
//     },

//     {
//       label: "Logout",
//       to: LOGOUT_RT,
//       icon: <LogoutIcon />,
//       hide: !status.isLogin,
//     },
//   ];
// }
