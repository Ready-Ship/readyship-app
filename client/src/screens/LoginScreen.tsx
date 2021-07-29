import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RootState } from '../redux/reducers/rootReducer';
import * as authActions from '../redux/actions/authActions';
import '../stylesheets/screens/LoginScreen.css';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (authState.user) {
      history.push('/dashboard');
    }
  }, [authState.user, history]);

  const login = () => {
    if (email && password) {
      dispatch(authActions.login(email, password));
    }
  };

  return (
    <div className='login__screen'>
      <div className='loginScreen__form-container'>
        <h1>Log In</h1>
        <form>
          <div>
            <input
              name='email'
              placeholder='Email'
              id='email'
              type='email'
              autoComplete='off'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              name='password'
              placeholder='Password'
              id='password'
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button id='login__btn' type='button' onClick={login}>
              {'Log In'}
            </button>
            <span id='signup-redirect'>
              {'Not a User? '}
              <Link to='/signup' id='login-form__signup-btn'>
                Sign Up
              </Link>
            </span>
          </div>
          <div className='signup__message'></div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
