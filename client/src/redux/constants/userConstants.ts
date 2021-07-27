// USER SIGNUP ACTION TYPE
export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL';

export type UserSignUpInfo = {
  name: string
  email: string,
  password: string,
}

export interface UserSignUpRequest {
  type: typeof USER_SIGNUP_REQUEST
}

export interface UserSignUpSuccess {
  type: typeof USER_SIGNUP_SUCCESS
  payload: {
    userInfo: UserSignUpInfo
  }
}

export interface UserSignUpFail {
  type: typeof USER_SIGNUP_FAIL
}

// USER LOGIN ACTION TYPE
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

type UserLoginInfo = {
  name: string
  email: string,
  password: string,
}

export interface UserLoginRequest {
  type: typeof USER_LOGIN_REQUEST
}

export interface UserLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS
  payload: {
    userInfo: UserLoginInfo
  }
}

export interface UserLoginFail {
  type: typeof USER_LOGIN_FAIL
}

// USER SIGNOUT ACTION TYPE
export const USER_SIGNOUT_REQUEST = 'USER_SIGNOUT_REQUEST';
export const USER_SIGNOUT_SUCCESS = 'USER_SIGNOUT_SUCCESS';
export const USER_SIGNOUT_FAIL = 'USER_SIGNOUT_FAIL';

export interface UserSignoutRequest {
  type: typeof USER_SIGNOUT_REQUEST
}

export interface UserSignoutSuccess {
  type: typeof USER_SIGNOUT_SUCCESS
}

export interface UserSignoutFail {
  type: typeof USER_SIGNOUT_FAIL
}

export type UserDispatchTypes = 
UserSignUpRequest | UserSignUpSuccess | UserSignUpFail | 
UserLoginRequest | UserLoginSuccess | UserLoginFail |
UserSignoutRequest | UserSignoutSuccess | UserSignoutFail;


