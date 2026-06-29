import { getAxiosClient } from '../../axios/AxiosConfig';
const URL = process.env.REACT_APP_BASE_URL;

export const reviewSave = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post('/feedback/save', request);
};

export const reviewList = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post('/feedback/list', request);
};

export const reviewGet = (id) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.get(`/feedback/get?id=${id}`);
};

export const reviewRemove = (id) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.delete(`/feedback/delete?id=${id}`);
};
