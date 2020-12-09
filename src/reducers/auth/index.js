import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from '../../constants';

export default function (state, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
