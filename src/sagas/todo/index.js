import { put, call } from 'redux-saga/effects';
import {
  todoAllService,
  todoDetailService,
  todoCreateService,
  todoUpdateService,
  todoDeleteService,
} from '../../services/todoService';
import todos from '../../actions/todo';

export function* todoAllSaga(payload) {
  try {
    const response = yield call(todoAllService, payload);
    const { todos: todosData } = response.data;

    yield put(todos.success(todosData));
  } catch (error) {
    yield put(todos.failure(error));
  }
}

export function* todoCreateSaga(payload) {
  yield call(todoCreateService, payload);

  yield put(todos.add(payload));
}

export function* todoDetailSaga(payload) {
  const response = yield call(todoDetailService, payload);
  const { todos: todosData } = response.data;

  yield put(todos.detail(todosData));
}

export function* todoUpdateSaga(payload) {
  const response = yield call(todoUpdateService, payload);
  const { todos: todosData } = response.data;

  yield put(todos.update(todosData));
}

export function* todoDeleteSaga(payload) {
  const response = yield call(todoDeleteService, payload);
  const { todos: todosData } = response.data;

  yield put(todos.delete(todosData));
}
