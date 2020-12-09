import axios from 'axios';
import {
  LOGIN_API_ENDPOINT,
  REGISTER_API_ENDPOINT,
  LOGOUT_API_ENDPOINT,
} from '../constants/api';

export const registerUserService = (request) => {
  const data = axios.post(REGISTER_API_ENDPOINT, request.user)
    .then((response) => (response));

  return data;
};

export const loginUserService = (request) => {
  const data = axios.post(LOGIN_API_ENDPOINT, request)
    .then((response) => response);

  return data;
};

export const logoutUserService = (request) => {
  const data = axios.post(LOGOUT_API_ENDPOINT, request)
    .then((response) => response);

  return data;
};
