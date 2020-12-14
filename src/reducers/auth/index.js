import { combineReducers } from 'redux';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from '../../constants';

function auth(state = [], action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...action.payload,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...action.payload,
      };
    case REGISTER_USER_ERROR:
      return state;
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_USER_ERROR:
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
