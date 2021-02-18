import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  return Promise.reject(error);
});

axios.interceptors.request.use((req) => {});

// eslint-disable-next-line import/no-anonymous-default-export
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
