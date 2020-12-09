import { put, call } from 'redux-saga/effects';
import { registerUserService, loginUserService, logoutUserService } from '../../services/authService';

import * as types from '../../constants';

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);

    yield [
      put({ type: types.REGISTER_USER_SUCCESS, response }),
    ];
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);

    yield [
      put({ type: types.LOGIN_USER_SUCCESS, response }),
    ];
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR });
  }
}

export function* logoutSaga(payload) {
  const response = yield call(logoutUserService, payload);

  yield [
    put({ type: types.LOGOUT_USER, response }),
  ];
}
