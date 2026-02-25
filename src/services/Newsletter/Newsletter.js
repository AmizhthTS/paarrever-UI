import { getAxiosClient } from '../../axios/AxiosConfig';
const URL = process.env.REACT_APP_BASE_URL;
export const newsletterSubscribtionSave = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post(`/newsletter/subscribe`, request);
};
