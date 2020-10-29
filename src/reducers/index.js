import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  VISIBILITY_FILTERS,
  SET_VISIBILITY_FILTER,
  UPDATE_TODO,
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

function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([{
        ...action.payload.todo,
        status: 'ACTIVE',
        id: state.length + 1,
      }]);
    case UPDATE_TODO:
      return state.map((item) => {
        if (Number(item.id) !== Number(action.payload.todo.id)) {
          return item;
        }

        return { ...item, ...action.payload.todo };
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
    default: return state;
  }
}

const rootReducer = combineReducers({
  visibilityFilter,
  todo,
});

export default rootReducer;
