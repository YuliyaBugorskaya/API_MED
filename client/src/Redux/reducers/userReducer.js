import {
  SET_AUTH, LOGOUT_USER, SET_EMPTY_USER,
} from '../types/userType';

export default function userReducer(state = { isFetching: true }, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTH:
      return payload;

    case SET_EMPTY_USER:
      return {};

    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}
