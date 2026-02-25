import { getAxiosClient } from '../../axios/AxiosConfig';
const URL = process.env.REACT_APP_BASE_URL;
export const storeSave = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post('/store/save', request);
};
export const storeList = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post('/store/list', request);
};
export const storeGet = (data) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.get(`/store/get?id=${data}`);
};
export const storeRemove = (data) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.delete(`/store/delete?id=${data}`);
};
export const storeMainArea = (data) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.get(`/store/get-by-main-area?mainArea=${data}`);
};
export const storeSubArea = (data) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.get(`/store/get-by-sub-area?subArea=${data}`);
};
