import React from 'react';
import classNames from 'classnames';
import HomeStyled from './HomeStyled';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
    this.testOut = this.testOut.bind(this);
    this.state = {
      grocereazIsHighlighted: false,
      portfolioIsHighlighted: false,
      breakFreeIsHighlighted: false,
      studyCardsIsHighlighted: false,
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
              className={classNames({
                grocereaz: true,
                'highlighted--project': this.state.grocereazIsHighlighted,
              })}
            >
              Grocer'eaz
            </div>
            <div
              className={classNames({
                portfolio: true,
                'highlighted--project': this.state.portfolioIsHighlighted,
              })}
            >
              This portfolio
            </div>
            <div
              className={classNames({
                breakFree: true,
                'highlighted--project': this.state.breakFreeIsHighlighted,
              })}
            >
              Break Free
            </div>
            <div
              className={classNames({
                studyCards: true,
                'highlighted--project': this.state.studyCardsIsHighlighted,
              })}
            >
              Study Cards
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
