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
      <section className="projects-section">
        Projects
      </section>
      <section className="skills-section">
        Skills
      </section>
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
