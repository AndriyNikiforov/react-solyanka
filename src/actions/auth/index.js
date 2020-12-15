import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from '../../constants';

function action(type, payload = {}) {
  return { type, payload };
}

const auth = {
  registerUserAction: (request) => action(REGISTER_USER, request),
  loginUserAction: (request) => action(LOGIN_USER, request),
  logoutUserAction: (request) => action(LOGOUT_USER, request),
};

export default auth;
