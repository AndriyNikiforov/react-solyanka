import {
  ADD_TODO,
  API_ERROR,
  TOGGLE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  ALL_REQUEST_TODO,
  ALL_SUCCESS_TODO,
  ALL_FAILURE_TODO,
  DETAIL_TODO,
} from '../../constants';

function action(type, payload = {}) {
  return { type, payload };
}

const todos = {
  request: (response) => action(ALL_REQUEST_TODO, response),
  success: (response) => action(ALL_SUCCESS_TODO, response),
  failure: (response) => action(ALL_FAILURE_TODO, response),
  add: (request) => action(ADD_TODO, request),
  delete: (request) => action(DELETE_TODO, request),
  update: (request) => action(UPDATE_TODO, request),
  detail: (request) => action(DETAIL_TODO, request),
  toggle: (request) => action(TOGGLE_TODO, request),
  apiError: (response) => action(API_ERROR, response),
};

export default todos;
