import { all, fork } from 'redux-saga/effects';
import { watchTodoAction, watchUserAuthentication } from './watchers';

export default function* rootSaga() {
  yield all([
    fork(watchTodoAction),
    fork(watchUserAuthentication),
  ]);
}
