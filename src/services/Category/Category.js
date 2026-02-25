import { getAxiosClient } from '../../axios/AxiosConfig';
const URL = process.env.REACT_APP_BASE_URL;
export const categorySave = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post('/category/save', request);
};
export const categoryList = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post('/category/list', request);
};
export const categoryDropdownList = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post('/category/home/list', request);
};
export const categoryGet = (data) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.get(`/category/get?id=${data}`);
};
export const categoryRemove = (data) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.delete(`/category/delete?id=${data}`);
};
export const categoryNameGet = (data) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.get(`/category/name/list?siteId=${data}`);
};
export const subCategoryList = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post('/subcategory/list', request);
};
export const subCategoryGet = (data) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.get(`/subcategory/get?id=${data}`);
};
export const subCategorySave = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.post('/subcategory/save', request);
};
export const subCategoryRemove = (data) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  return axiosClient.delete(`/subcategory/delete?id=${data}`);
};
