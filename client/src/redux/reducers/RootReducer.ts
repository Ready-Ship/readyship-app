import { combineReducers } from "redux";
import { userSignupReducer } from './userReducer'

const RootReducer = combineReducers({
  userSignup: userSignupReducer
});

export default RootReducer;