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
  try {
    yield call(todoCreateService, payload);
    const response = yield call(todoAllService, payload);
    const { todos: todosData } = response.data;

    yield put(todos.success(todosData));
  } catch (error) {
    yield put(todos.apiError(error));
  }
}

export function* todoDetailSaga(payload) {
  const response = yield call(todoDetailService, payload);
  const { todos: todosData } = response.data;

  yield put(todos.detail(todosData));
}

export function* todoUpdateSaga(payload) {
  try {
    yield call(todoUpdateService, payload);
    const response = yield call(todoAllService, payload);
    const { todos: todosData } = response.data;

    yield put(todos.success(todosData));
  } catch (error) {
    yield put(todos.apiError(error));
  }
}

export function* todoDeleteSaga(payload) {
  try {
    yield call(todoDeleteService, payload);

    const response = yield call(todoAllService, payload);
    const { todos: todosData } = response.data;

    yield put(todos.success(todosData));
  } catch (error) {
    yield put(todos.apiError(error));
  }
}
