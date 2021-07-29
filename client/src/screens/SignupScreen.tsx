import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../redux/actions/authActions';
import { RootState } from '../redux/reducers/rootReducer';
import '../stylesheets/screens/SignupScreen.css';

const SignupScreen = () => {
  const [name, setName] = useState('');
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

  const signup = () => {
    if (name && email && password) {
      dispatch(authActions.signup(name, email, password));
    }
  };

  return (
    <div className='signup__screen'>
      <div className='signupScreen__form-container'>
        <h1>Sign Up</h1>
        <form onSubmit={undefined}>
          <div className='signup__input-group'>
            <input
              name='userName'
              placeholder='Full Name'
              id='userName'
              type='text'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='signup__input-group'>
            <input
              name='email'
              placeholder='Email'
              id='email'
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='signup__input-group'>
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
          <div className='form__btn-group'>
            <button type='button' onClick={signup}>
              Submit
            </button>
            <Link to='/' id='form__cancel-btn'>
              Cancel
            </Link>
          </div>
          <div className='signup__message'></div>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;
