import axios from 'axios';
import localStorageService from '../services/local-storage.service';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

// Send the access token with requests if present
apiClient.interceptors.request.use((config) => {
  const accessToken = localStorageService.getItem('accessToken');
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  (e) => {
    if (e?.response?.status === 401) {
      localStorageService.removeItem('accessToken');
    }
    throw e;
  }
);
export default apiClient;
