import { combineReducers } from 'redux';
import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  VISIBILITY_FILTERS,
  SET_VISIBILITY_FILTER,
} from '../constants';

const { SHOW_ALL } = VISIBILITY_FILTERS;
const initialState = [];

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([{
        ...action.todo,
        status: 'ACTIVE',
        id: state.length + 1,
      }]);
    case EDIT_TODO:
      return state.filter((todo) => Number(todo.id) === Number(action.payload.id))[0];
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            status: 'Completed',
          };
        }

        return state;
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default: return state;
  }
}

const rootReducer = combineReducers({
  visibilityFilter,
  todos,
});

export default rootReducer;
