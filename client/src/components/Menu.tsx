import React, { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/components/Menu.css';

interface MenuProps {
  show: boolean,
  click: (event: MouseEvent) => void
}

const Menu:FC<MenuProps> = ({ show, click }) => {
  // create a var to an array with an element ['menu']
  const menuClass = ['menu'];

  if(show) {
    menuClass.push('show');
  }

  // {menuClass.join(' ')}
  return (
    <div className={menuClass.join(' ')} onClick={click}>
      <ul className="menu__links" >
        <li>
          <Link to="/">
            Log In
          </Link>
        </li>
        <li>
          <Link to="/signup">
              Sign Up
          </Link>
        </li>
        <li>
          <Link to="/logout">
              Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
