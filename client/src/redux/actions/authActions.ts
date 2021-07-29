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
  UserDispatchTypes,
  USER_AUTHENTICATE_SUCCESS,
} from '../constants/authConstants';
import { CONSTANTS } from '../../config';
import axios from 'axios';

export const signup =
  (name: string, email: string, password: string) =>
  async (dispatch: Dispatch<UserDispatchTypes>) => {
    dispatch({ type: USER_SIGNUP_REQUEST, payload: { name, email, password } });
    try {
      const { data } = await axios.post(
        CONSTANTS.API_URL + '/account/signup',
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );

      dispatch({ type: USER_SIGNUP_SUCCESS, payload: data.account });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data.account });
    } catch (err) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export const login =
  (email: string, password: string) =>
  async (dispatch: Dispatch<UserDispatchTypes>) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
    try {
      const { data } = await axios.post(
        CONSTANTS.API_URL + '/account/login',
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data.account });
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export const signout = () => async (dispatch: Dispatch<UserDispatchTypes>) => {
  dispatch({ type: USER_SIGNOUT_REQUEST });
  try {
    await axios.post(
      CONSTANTS.API_URL + '/account/signout',
      {},
      { withCredentials: true }
    );

    dispatch({ type: USER_SIGNOUT_SUCCESS });
  } catch (err) {
    dispatch({
      type: USER_SIGNOUT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const authenticate =
  () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      const result = await axios.post(
        CONSTANTS.API_URL + '/account/authenticate',
        {},
        { withCredentials: true }
      );

      dispatch({
        type: USER_AUTHENTICATE_SUCCESS,
        payload: result.data.account,
      });
    } catch (err) {}
  };
