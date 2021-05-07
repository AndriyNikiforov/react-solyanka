import { put, call } from 'redux-saga/effects';
import todoServices from '../../services/api/todoService';
import todos from '../../actions/todo';

export function* todoAllSaga(payload) {
  try {
    const response = yield call(todoServices.todoAllService, payload);
    const { todos: todosData } = response.data;

    yield put(todos.success({
      todos: todosData,
      isLoading: false,
    }));
  } catch (error) {
    yield put(todos.failure(error));
  }
}

export function* todoCreateSaga(payload) {
  try {
    yield call(todoServices.todoCreateService, payload);

    const response = yield call(todoServices.todoAllService, payload);
    const { todos: todosData } = response.data;

    yield put(todos.success(todosData));
  } catch (error) {
    yield put(todos.apiError(error));
  }
}

export function* todoDetailSaga(payload) {
  try {
    const response = yield call(todoServices.todoDetailService, payload);
    const { todos: todosData } = response.data;

    yield put(todos.detail(todosData));
  } catch (error) {
    yield put(todos.apiError(error));
  }
}

export function* todoToggleSaga(payload) {
  try {
    yield call(todoServices.todoToggleService, payload);

    const response = yield call(todoServices.todoAllService, payload);
    const { todos: todosData } = response.data;

    yield put(todos.success(todosData));
  } catch (error) {
    yield put(todos.apiError(error));
  }
}

export function* todoUpdateSaga(payload) {
  try {
    yield call(todoServices.todoUpdateService, payload);

    const response = yield call(todoServices.todoAllService, payload);
    const { todos: todosData } = response.data;

    yield put(todos.success(todosData));
  } catch (error) {
    yield put(todos.apiError(error));
  }
}

export function* todoDeleteSaga(payload) {
  try {
    yield call(todoServices.todoDeleteService, payload);

    const response = yield call(todoServices.todoAllService, payload);
    const { todos: todosData } = response.data;

    yield put(todos.success(todosData));
  } catch (error) {
    yield put(todos.apiError(error));
  }
}
