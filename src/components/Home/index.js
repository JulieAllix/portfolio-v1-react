import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

import HomeStyled from './HomeStyled';

const Home = () => {
  const handleClick = () => {
    console.log('clic');
  };
  return (
    <HomeStyled>
      Home
    </HomeStyled>
  );
};
/*
Home.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  changeOpeningStatus: PropTypes.func.isRequired,
};
*/
// == Export
export default Home;
