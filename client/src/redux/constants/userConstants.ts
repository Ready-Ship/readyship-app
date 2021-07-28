// USER SIGNUP ACTION TYPE
export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL';

export type UserInfo = {
  name: string
  email: string,
  password: string,
}

export interface UserSignupRequest {
  type: typeof USER_SIGNUP_REQUEST
}

export interface UserSignupSuccess {
  type: typeof USER_SIGNUP_SUCCESS;
  payload: {
    userInfo: UserInfo
  };
}

export interface UserSignupFail {
  type: typeof USER_SIGNUP_FAIL;
  payload: any
}

// USER LOGIN ACTION TYPE
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export interface UserLoginRequest {
  type: typeof USER_LOGIN_REQUEST;
}

export interface UserLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS;
  payload: {
    userInfo: UserInfo
  };
}

export interface UserLoginFail {
  type: typeof USER_LOGIN_FAIL;
  payload: any
}

// USER SIGNOUT ACTION TYPE
export const USER_SIGNOUT_REQUEST = 'USER_SIGNOUT_REQUEST';
export const USER_SIGNOUT_SUCCESS = 'USER_SIGNOUT_SUCCESS';
export const USER_SIGNOUT_FAIL = 'USER_SIGNOUT_FAIL';

export interface UserSignoutRequest {
  type: typeof USER_SIGNOUT_REQUEST;
}

export interface UserSignoutSuccess {
  type: typeof USER_SIGNOUT_SUCCESS;
}

export interface UserSignoutFail {
  type: typeof USER_SIGNOUT_FAIL;
  payload: any
}

export type UserDispatchTypes = 
UserSignupRequest | UserSignupSuccess | UserSignupFail | 
UserLoginRequest | UserLoginSuccess | UserLoginFail |
UserSignoutRequest | UserSignoutSuccess | UserSignoutFail;


