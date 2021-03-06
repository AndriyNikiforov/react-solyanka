import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  validateStatus: (status) => status,
});
