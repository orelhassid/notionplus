import axios from "axios";
import { API, storageKeys } from "../config";
import storage from "../services/storage";

const apiClient = axios.create({
  baseURL: API,
  timeout: 3000,
});

apiClient.interceptors.request.use(async (req) => {
  const token = await storage.get(storageKeys.user);
  if (!token) return req;
  req.headers["x-auth-token"] = token;
  return req;
});

apiClient.interceptors.response.use(null, async (error) => {
  return Promise.reject(error);
});

export default apiClient;
