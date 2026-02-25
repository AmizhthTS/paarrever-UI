import { getAxiosClient } from '../../axios/AxiosConfig';
const URL = process.env.REACT_APP_BASE_URL;
export const contactSave = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post('/contact', request);
};
export const contactList = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post('/contact/list', request);
};
