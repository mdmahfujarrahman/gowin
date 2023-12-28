import axios from 'axios';
import { envConfig } from '../lib/config';

const API = axios.create({
  baseURL: `${envConfig.serverUrl}`,
});

export const ServerAPI = axios.create({
  baseURL: `${envConfig.serverUrl}`,
});

export default API;
