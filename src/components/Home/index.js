/*

// import React, { useRef } from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

import HomeStyled from './HomeStyled';

const Home = () => {
  const grocereaz = useRef(null);
  const handleClick = () => {
    console.log('clic');
  };
  /*
  const chbg = (color) => {
    //grocereaz.style.backgroundColor = color;
    console.log(grocereaz);
    console.log('coucou');
    //grocereaz.style.background = color;
  };
  
  const test = () => {
    console.log('test');
  };
  const testOut = () => {
    console.log('test out');
  };
  test();
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
          <span
            id="react"
            onMouseOver={test()}
            onMouseOut={testOut()}
          >
            React
          </span>
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

// == Export
export default Home;
*/
import React from 'react';
import HomeStyled from './HomeStyled';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  constructor() {
    super();
    console.log('constructor : instanciation');
    this.test = this.test.bind(this);
    this.testOut = this.testOut.bind(this);
  }

  test() {
    console.log('test');
  }

  testOut() {
    console.log('test out');
  }

  render() {
    return (
      <HomeStyled>
        <section className="projects-section">
          <div className="projects-wrapper">
            <div className="grocereaz">
              Grocer'eaz
            </div>
          </div>
        </section>
        <section className="skills-section">
          <div className="skills-wrapper">
            <span
              id="react"
              onMouseOver={this.test}
              onMouseOut={this.testOut}
            >
              React
            </span>
          </div>
        </section>
      </HomeStyled>
    );
  }
}

export default Home;
