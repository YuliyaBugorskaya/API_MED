import axios from 'axios';
import {
  SET_EMPTY_USER, LOGOUT_USER, SET_AUTH,
} from '../types/userType';

export const setAuth = (payload) => ({ type: SET_AUTH, payload });
export const logout = () => ({ type: LOGOUT_USER });

// THUNC
export const postUser = (input) => (dispatch) => {
  axios.post('/user/signup', input)
    // .then((res) => console.log(res.data));
    .then((res) => dispatch(setAuth(res.data)));
};
export const avtUser = (input) => (dispatch) => {
  axios.post('/api/user/signin', input)
    .then((res) => dispatch(setAuth(res.data)));
};

export const logoutUser = () => (dispatch) => {
  axios.get('/api/user/logout')
    .then((res) => dispatch(logout()));
};

export const checkUser = () => (dispatch) => {
  axios.post('/api/user/check')
    .then((res) => dispatch(setAuth(res.data)))
    .catch(() => dispatch({ type: SET_EMPTY_USER }));
};
