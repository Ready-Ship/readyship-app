import { combineReducers } from 'redux';
import { authReducer, AuthState } from './authReducer';

const RootReducer = combineReducers({
  auth: authReducer,
});

export interface RootState {
  auth: AuthState;
}

export default RootReducer;
