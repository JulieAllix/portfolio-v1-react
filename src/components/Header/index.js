import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import HeaderStyled from './HeaderStyled';

const Header = ({ projectIsOpen, changeOpeningStatus }) => {
  const handleClick = () => {
    changeOpeningStatus(!projectIsOpen);
  };
  return (
    <HeaderStyled>
      <div className="julie">Julie Allix</div>
      <ul className="menu">
        <li className="menu-link" onClick={handleClick}>Projects</li>
        <ul className="dropdown">
          <Link to="/grocereaz">
            <li
              className={classNames({
                'projects--open': projectIsOpen,
                'dropdown-item': true,
                grocereaz: true,
              })}
              onClick={handleClick}
            >
              Grocer'eaz
            </li>
          </Link>
          <Link to="/break-free">
            <li
              className={classNames({
                'projects--open': projectIsOpen,
                'dropdown-item': true,
                'break-free': true,
              })}
              onClick={handleClick}
            >
              Break Free
            </li>
          </Link>
          <Link to="/study-cards">
            <li
              className={classNames({
                'projects--open': projectIsOpen,
                'dropdown-item': true,
                'study-cards': true,
              })}
              onClick={handleClick}
            >
              Study Cards
            </li>
          </Link>
        </ul>
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
};

Header.propTypes = {
  projectIsOpen: PropTypes.bool.isRequired,
  changeOpeningStatus: PropTypes.func.isRequired,
};

// == Export
export default Header;
