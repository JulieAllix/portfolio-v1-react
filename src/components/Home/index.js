import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import HomeStyled from './HomeStyled';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.grocereaz = React.createRef();
    this.test = this.test.bind(this);
    this.testOut = this.testOut.bind(this);
    this.state = {
      grocereazIsHighlighted: false,
    };
  }

  test() {
    this.setState({
      grocereazIsHighlighted: true,
    });
  }

  testOut() {
    this.setState({
      grocereazIsHighlighted: false,
    });
  }

  render() {
    return (
      <HomeStyled>
        <section className="projects-section">
          <div className="projects-wrapper">
            <div
              id="grocereaz"
              ref={this.grocereaz}
              className={classNames({
                grocereaz: true,
                'highlighted--project': this.state.grocereazIsHighlighted,
              })}
            >
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
/*
Home.propTypes = {
  grocereazIsHighlighted: PropTypes.bool.isRequired,
};
*/
export default Home;
