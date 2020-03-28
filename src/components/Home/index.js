import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

import HomeStyled from './HomeStyled';

const Home = () => {
  const handleClick = () => {
    console.log('clic');
  };
  const chbg = (color) => {
    document.getElementById("grocereaz").style.backgroundColor = color;
  };
  return (
    <HomeStyled>
      <section className="projects-section">
        <div className="projects-wrapper">
          <div className="grocereaz" ref={grocereaz}>
            Grocer'eaz
          </div>
        </div>
      </section>
      <section className="skills-section">
        <div className="skills-wrapper">
          <span className="react" onMouseOver={chbg('yellow')} onMouseOut={chbg('white')}>React</span>
        </div>
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
