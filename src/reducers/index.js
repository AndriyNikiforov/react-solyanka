import { combineReducers } from 'redux';
import { auth, loadingAuth } from './auth';
import { loadingTodo, todo } from './todo';

const rootReducer = combineReducers({
  loadingTodo,
  loadingAuth,
  todo,
  auth,
});

export default rootReducer;
