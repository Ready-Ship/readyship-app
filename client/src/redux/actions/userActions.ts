import { Dispatch } from 'redux';
import {
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAIL,
  USER_SIGNOUT_REQUEST,
  USER_SIGNOUT_SUCCESS,
  USER_SIGNOUT_FAIL,
  UserDispatchTypes
} from '../constants/userConstants';
import Axios from 'axios';

export const signup = (name: string, email: string, password: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  dispatch({ type: USER_SIGNUP_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await Axios.post('api call', { name, email, password });

    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data.account });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.account });
  } catch(err) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    })
  }
}

export const login = (email: string, password: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  dispatch({ type: USER_SIGNOUT_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post('api call', { email, password });

    dispatch({ type: USER_SIGNOUT_SUCCESS, payload: data.account });
  } catch(err) {
    dispatch({
      type: USER_SIGNOUT_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    })
  }
}

export const signout = () => async (dispatch: Dispatch<UserDispatchTypes>) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const { data } = await Axios.post('api call');

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.account });
  } catch(err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message : err.message
    })
  }
}