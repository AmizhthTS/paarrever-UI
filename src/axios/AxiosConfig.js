import axios from 'axios';

// Create an Axios instance with a default config
const axiosClient = axios.create({
  baseURL: 'https://default.api.com', // default base URL (can be changed later)
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json' // default response type
});
const getAxiosClient = () => {
  const token = sessionStorage.getItem('jwttoken');
  const tenantID = sessionStorage.getItem('tenantID');
  axiosClient.defaults.headers['Content-Type'] = 'application/json';
  axiosClient.defaults.headers['token'] = token;
  axiosClient.defaults.headers['X-TenantID'] = tenantID;
  axiosClient.defaults.headers['Accept'] = 'application/json';
  // axiosClient.defaults.headers['Origin'] = 'https://amizhthdev.in';
  // axiosClient.defaults.headers['Referer'] = 'https://amizhthdev.in/';
  axiosClient.defaults.responseType = 'json';
  return axiosClient;
};

export { axiosClient, getAxiosClient };
