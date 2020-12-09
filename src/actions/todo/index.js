import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SET_VISIBILITY_FILTER,
} from '../../constants';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: { todo },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const toggleTodo = (id, status) => ({
  type: TOGGLE_TODO,
  payload: { id, status },
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: { todo },
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
