import { takeLatest } from 'redux-saga/effects';
import {
  registerSaga,
  loginSaga,
  logoutSaga,
} from '../auth';
import {
  todoAllSaga,
  todoCreateSaga,
  todoDeleteSaga,
  todoToggleSaga,
  todoUpdateSaga,
} from '../todo';

import * as types from '../../constants';

export function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGOUT_USER, logoutSaga);
}

export function* watchTodoAction() {
  yield takeLatest(types.ALL_REQUEST_TODO, todoAllSaga);
  yield takeLatest(types.ADD_TODO, todoCreateSaga);
  yield takeLatest(types.TOGGLE_TODO, todoToggleSaga);
  yield takeLatest(types.DELETE_TODO, todoDeleteSaga);
  yield takeLatest(types.UPDATE_TODO, todoUpdateSaga);
}
