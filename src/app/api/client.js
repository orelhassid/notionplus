import axios from "axios";
import authStorage from "../services/auth";
import cache from "../services/cache";
import settings from "../config/settings";

const apiClient = axios.create({
  baseURL: settings.API,
  timeout: 1000,
});

apiClient.interceptors.request.use(async (req) => {
  const token = await authStorage.getToken();
  if (!token) return req;
  req.headers["x-auth-token"] = token;
  return req;
});

// apiClient.interceptors.response.use(null, (response) => {
//   console.log("interceptors", response);
//   // if (response) {
//   //   cache.store(url, response.data);
//   //   return response;
//   // }

//   // const data = cache.get(url);
//   // return data ? { ok: true, data } : response;
//   // return Promise.reject(error);
//   return response;
// });

export default apiClient;
