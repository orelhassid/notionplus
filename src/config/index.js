import { version } from "../../package.json";
export const APP = {
  title: "Notion Plus",
  tagline: "",
  description: "",
  version,
};

export const USER = "USER";
export const TOKEN = localStorage.getItem("token");

export const API = process.env["REACT_APP_API"];

export const GOOGLE_CLIENT_ID = process.env["REACT_APP_GOOGLE_CLIENT_ID"];
export const GOOGLE_CLIENT_SECRET =
  process.env["REACT_APP_GOOGLE_CLIENT_SECRET"];

/* --------------------------------- Routes --------------------------------- */
export const RT_NOTFOUND = "/404";
export const RT_LOGIN = "/login";
export const RT_LOGOUT = "/logout";
export const RT_PROFILE = "/profile";
