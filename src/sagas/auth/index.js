import Cookies from 'js-cookie';
import { put, call } from 'redux-saga/effects';
import {
  loginUserService,
  logoutUserService,
  registerUserService,
} from '../../services/authService';

import auth from '../../actions/auth';

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);

    yield Cookies.set('token', response.token);
    yield put(auth.success(response));
  } catch (error) {
    yield put(auth.error(error));
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);

    yield put(auth.success(response));
  } catch (error) {
    yield put(auth.error(error));
  }
}

export function* logoutSaga(payload) {
  try {
    yield call(logoutUserService, payload);

    yield put(auth.success(payload));
  } catch (error) {
    yield put(auth.error(error));
  }
}
