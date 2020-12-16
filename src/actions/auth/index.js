import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  SUCCESS_AUTH,
  ERROR_AUTH,
} from '../../constants';

function action(type, payload = {}) {
  return { type, payload };
}

const auth = {
  registerUserAction: (request) => action(REGISTER_USER, request),
  loginUserAction: (request) => action(LOGIN_USER, request),
  logoutUserAction: (request) => action(LOGOUT_USER, request),
  success: (response) => action(SUCCESS_AUTH, response),
  error: (response) => action(ERROR_AUTH, response),
};

export default auth;
