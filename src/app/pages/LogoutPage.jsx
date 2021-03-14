import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { LOGIN_RT } from "../config/routes";
import useAuth from "../hooks/useAuth";

export default function LogoutPage() {
  const { logout } = useAuth();
  const history = useHistory();
  useEffect(() => {
    logout();
    history.push(LOGIN_RT);
  }, []);

  return null;
}
