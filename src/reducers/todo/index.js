import { combineReducers } from 'redux';
import {
  ADD_TODO,
  API_ERROR,
  ALL_FAILURE_TODO,
  ALL_REQUEST_TODO,
  ALL_SUCCESS_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from '../../constants';

const initialState = [];

function loadingTodo(state = false, action) {
  switch (action.type) {
    case ALL_REQUEST_TODO:
      return true;
    case ALL_SUCCESS_TODO:
      return false;
    case ALL_FAILURE_TODO:
      return false;
    default:
      return state;
  }
}

function todo(state = initialState, action) {
  switch (action.type) {
    case ALL_SUCCESS_TODO:
      return [...action.payload];
    case ALL_FAILURE_TODO:
      return state;
    case ADD_TODO:
      return state.concat([{
        ...action.payload,
        status: 'ACTIVE',
        id: state.length + 1,
      }]);
    case UPDATE_TODO:
      return state.map((item) => {
        if (Number(item.id) !== Number(action.payload.id)) {
          return item;
        }

        return { ...item, ...action.payload };
      });
    case TOGGLE_TODO:
      return state.map((item) => {
        if (Number(item.id) === Number(action.payload.id)) {
          return {
            ...item,
            status: 'Completed',
          };
        }

        return state;
      });
    case DELETE_TODO:
      return state.filter((item) => Number(item.id) !== Number(action.payload.id));
    case API_ERROR:
      return state;
    default: return state;
  }
}

export const getAllTodoResult = (state) => state;

const rootReducer = combineReducers({
  loadingTodo,
  todo,
});

export default rootReducer;
