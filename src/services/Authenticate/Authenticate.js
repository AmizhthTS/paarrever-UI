import { getAxiosClient } from '../../axios/AxiosConfig';
let URL = process.env.REACT_APP_AUTH_BASE_URL;

export const login = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post('/login', request);
};

export const logout = (data) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.get(`/userlogout?userid=${data}`);
};
