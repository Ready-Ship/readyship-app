import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';

// Import CSS
import '../stylesheets/screens/SignupScreen.css';

// Import Register Action from userActions
// import { register } from '../redux/actions/userActions';



const SignupScreen = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  // // Pull userRegister state object from State using useSelector hook
  // // const userRegister = useSelector(state => state.userRegister);
  // // const { loading, userInfo, error } = userRegister;

  // const loading = props.loading;
  // const userInfo = props.email;
  // const error = props.error;

  // // signup form submit handler function
  // // on form submit will dispatch register action func
  // const signupSubmitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(register(name, email, password));
  // };

  // // render login screen once user registers
  // useEffect(() => {
  //   if(userInfo) {
  //     // come back to this ( redirect to dashboard)
  //     props.history.push('/');
  //   }
  // }, [userInfo]);

  return (
    <div className="signup__screen">
      <div className="signupScreen__form-container">
        <h1>Sign Up</h1>
        <form onSubmit={undefined}>
          <div className="signup__input-group">
            <input name="userName" placeholder='Full Name' id="userName" type="text" required />
          </div>
          <div className="signup__input-group">
            <input name="email" placeholder='Email' id="email" type="email" required />
          </div>
          <div className="signup__input-group">
            <input name="password" placeholder='Password' id="password" type="password" required />
          </div>
          <div className="form__btn-group">
            <button type="submit">Submit</button>
            <Link to='/' id="form__cancel-btn">Cancel</Link> 
          </div>
          <div className="signup__message">
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;