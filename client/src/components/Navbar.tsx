import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/components/Navbar.css';

interface NavbarProps {
  click: (event: MouseEvent) => void
}

const Navbar:FC<NavbarProps> = ({ click }) => {

  return (
    <nav className="navbar">
      {/* Navbar Logo */}
      <Link to="/" className="navbar__logo">
        READYSHIP
      </Link>
      {/* Hamburger Menu */}
      <div className="hamburger__menu" onClick={click}>
        <div id="hb-top"></div>
        <div id="hb-middle"></div>
        <div id="hb-bottom"></div>
      </div>
    </nav>
  )
}

export default Navbar;
