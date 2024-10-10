import axios from 'axios';
import {getStorageData, setStorageData} from './localStorage';

export const bookstore = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000
});

instance.interceptors.request.use(config => {
  const data = getStorageData();
  if (data) {
    config.headers['Authorization'] = `Bearer ${data.accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(response => {
  const {headers} = response;
  if (headers['x-access-token']) {
    setStorageData(headers['x-access-token']);
  }
  return response;
});

export default instance;
