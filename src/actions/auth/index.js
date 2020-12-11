import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from '../../constants';

export const registerUserAction = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const loginUserAction = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logoutUserAction = (user) => ({
  type: LOGOUT_USER,
  payload: user,
});
