import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.53.9.240:3333',
});