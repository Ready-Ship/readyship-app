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
  UserInfo,
  UserDispatchTypes
} from '../constants/userConstants';

interface DefaultUserState {
  loading: boolean,
  userInfo?: any,
  error?: string
}

const defaultState: DefaultUserState = {
  loading: false,
  userInfo: null
}

export const userSignupReducer = (state: DefaultUserState = defaultState, action: UserDispatchTypes):DefaultUserState => {
  switch(action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };

    case USER_SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userLoginReducer = (state: DefaultUserState = defaultState, action: UserDispatchTypes):DefaultUserState => {
  switch(action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userSignoutReducer = (state: DefaultUserState = defaultState, action: UserDispatchTypes):DefaultUserState => {
  switch(action.type) {
    case USER_SIGNOUT_REQUEST:
      return { loading: true };

    case USER_SIGNOUT_SUCCESS:
      return { loading: false };

    case USER_SIGNOUT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
