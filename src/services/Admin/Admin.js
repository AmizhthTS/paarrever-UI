import { getAxiosClient } from '../../axios/AxiosConfig';

let URL = process.env.REACT_APP_ADMIN_BASE_URL;
export const subscriptionPlan = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  axiosClient.defaults.headers['X-TenantID'] = 'public';
  return axiosClient.post('/public/subscriptionplan', request);
};
export const supportSave = (request) => {
  const axiosClient = getAxiosClient();
  axiosClient.defaults.baseURL = URL;
  axiosClient.defaults.headers['X-TenantID'] = 'public';
  return axiosClient.post('support/save', request);
};
