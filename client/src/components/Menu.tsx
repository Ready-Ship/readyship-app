import React, { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import * as authActions from '../redux/actions/authActions';
import { RootState } from '../redux/reducers/rootReducer';
import '../stylesheets/components/Menu.css';

interface MenuProps {
  show: boolean;
  click: (event: MouseEvent) => void;
}

const Menu: FC<MenuProps> = ({ show, click }) => {
  // create a var to an array with an element ['menu']
  const menuClass = ['menu'];

  const authState = useSelector((state: RootState) => state.auth);

  const history = useHistory();
  const dispatch = useDispatch();

  const signout = () => {
    (dispatch(authActions.signout()) as any).then(() => {
      history.push('/');
    });
  };

  if (show) {
    menuClass.push('show');
  }

  return (
    <div className={menuClass.join(' ')} onClick={click}>
      <ul className='menu__links'>
        {authState.user ? (
          <li>
            <p onClick={signout}>Sign Out</p>
          </li>
        ) : (
          <React.Fragment>
            <li>
              <Link to='/'>Log In</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </div>
  );
};

export default Menu;
