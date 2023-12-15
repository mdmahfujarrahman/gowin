import axios from 'axios';
import { envConfig } from '../lib/config';

const API = axios.create({
  baseURL: `${envConfig.serverUrl}`,
});

export const ServerAPI = axios.create({
  baseURL: `${envConfig.serverUrl}`,
});

API.interceptors.request.use(req => {
  if (localStorage?.getItem('token')) {
    req.headers['Authorization'] = `${localStorage.getItem('token')}`;
  }
  return req;
});

export default API;
