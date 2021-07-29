import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGNOUT_REQUEST,
  USER_SIGNOUT_SUCCESS,
  USER_SIGNOUT_FAIL,
  UserDispatchTypes,
  USER_AUTHENTICATE_SUCCESS,
} from '../constants/userConstants';
import { User } from '../../types';

export interface AuthState {
  user: User | null;
  loading: boolean;
  error?: string;
}

const initialState: AuthState = {
  loading: false,
  user: null,
};

export const authReducer = (
  state: AuthState = initialState,
  action: UserDispatchTypes
) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true };

    case USER_SIGNUP_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case USER_SIGNUP_FAIL:
      return { ...state, loading: false, error: action.payload, user: null };

    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };

    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };

    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: null,
      };

    case USER_SIGNOUT_REQUEST:
      return { ...state, loading: true };

    case USER_SIGNOUT_SUCCESS:
      return { ...state, loading: false, user: null };

    case USER_SIGNOUT_FAIL:
      return { ...state, loading: false, error: action.payload };

    case USER_AUTHENTICATE_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    default:
      return state;
  }
};
