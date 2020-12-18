import {
  LOGIN_API_ENDPOINT,
  REGISTER_API_ENDPOINT,
  LOGOUT_API_ENDPOINT,
} from '../../constants/api';
import axios from '../../utils/api';

const authServices = {
  registerUserService: (request) => axios.post(REGISTER_API_ENDPOINT, request.payload)
    .then((response) => response.data)
    .catch((error) => error),
  loginUserService: (request) => axios.post(LOGIN_API_ENDPOINT, request.payload)
    .then((response) => response.data)
    .catch((error) => error),
  logoutUserService: (request) => axios.post(LOGOUT_API_ENDPOINT, request.payload)
    .then((response) => response.data)
    .catch((error) => error),
};

export default authServices;
