import {
  AUTH_FAILURE_AUTH,
  AUTH_REQUEST_AUTH,
  AUTH_SUCCESS_AUTH,
  ERROR_AUTH,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  SUCCESS_AUTH,
} from '../../constants';

export function loadingAuth(state = false, action) {
  switch (action.type) {
    case AUTH_REQUEST_AUTH:
      return true;
    case AUTH_SUCCESS_AUTH:
      return false;
    case AUTH_FAILURE_AUTH:
      return false;
    default:
      return state;
  }
}

export function auth(state = [], action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...action.payload,
      };
    case LOGIN_USER:
      return {
        ...action.payload,
      };
    case LOGOUT_USER:
      return state;
    case SUCCESS_AUTH:
      return {
        ...action.payload,
      };
    case ERROR_AUTH:
      return state;
    default:
      return state;
  }
}
