import Cookies from 'js-cookie';
import { put, call } from 'redux-saga/effects';
import authServices from '../../services/api/authService';

import auth from '../../actions/auth';

export function* registerSaga(payload) {
  try {
    const response = yield call(authServices.registerUserService, payload);

    yield Cookies.set('token', response.token);
    yield put(auth.success(response));
  } catch (error) {
    yield put(auth.error(error));
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(authServices.loginUserService, payload);

    yield Cookies.set('token', response.token);
    yield put(auth.success(response));
  } catch (error) {
    yield put(auth.error(error));
  }
}

export function* logoutSaga(payload) {
  try {
    yield call(authServices.logoutUserService, payload);

    yield put(auth.success(payload));
  } catch (error) {
    yield put(auth.error(error));
  }
}
