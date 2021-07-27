import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGNOUT_REQUEST,
  USER_SIGNOUT_SUCCESS,
  USER_SIGNOUT_FAIL
} from '../constants/userConstants';

interface DefaultState {

}

const defaultState: DefaultState = {}

export const userSignupReducer = (state: DefaultState = defaultState, action: any):DefaultState => {
  return state;
}