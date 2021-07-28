import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/components/Navbar.css';

import logo from '../assets/readyship-logo--white-06.svg';

interface NavbarProps {
  click: (event: MouseEvent) => void;
  open: boolean;
}

const Navbar:FC<NavbarProps> = ({ click, open }) => {

  return (
    <nav className="navbar">
      {/* Navbar Logo */}
        <a className="navbar__logo" href="/">
          <img src={logo} alt="" />
        </a>
      {/* Hamburger Menu */}
      <div className={open ? 'hamburger__menu open' : 'hamburger__menu'} onClick={click}>
        <div id="hb-top"></div>
        <div id="hb-middle"></div>
        <div id="hb-bottom"></div>
      </div>
    </nav>
  )
}

export default Navbar;
