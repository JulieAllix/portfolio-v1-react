import React from 'react';
import { Link } from 'react-router-dom';

import HeaderStyled from './HeaderStyled';

const Header = () => (
  <HeaderStyled>
    <div className="julie">Julie Allix</div>
    <ul className="menu">
      <li className="menu-link">Projects</li>
      <Link to="/">
        <li className="menu-link">Home</li>
      </Link>
      <Link to="/about">
        <li className="menu-link">About</li>
      </Link>
      <Link to="/oclock">
        <li className="menu-link">My training</li>
      </Link>
      <Link to="/contact">
        <li className="menu-link">Contact</li>
      </Link>
    </ul>
  </HeaderStyled>
);

// == Export
export default Header;
