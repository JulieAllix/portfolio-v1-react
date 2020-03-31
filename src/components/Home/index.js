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
                project: true,
                grocereaz: true,
                'highlighted--project': this.state.grocereazIsHighlighted,
              })}
            >
              <div className="project-picture">
                Picture
              </div>
              <div className="project-name">Grocer'eaz</div>
            </div>
            <div
              className={classNames({
                project: true,
                portfolio: true,
                'highlighted--project': this.state.portfolioIsHighlighted,
              })}
            >
              <div className="project-picture">
                Picture
              </div>
              <div className="project-name">This portfolio</div>
            </div>
            <div
              className={classNames({
                project: true,
                breakFree: true,
                'highlighted--project': this.state.breakFreeIsHighlighted,
              })}
            >
              <div className="project-picture">
                Picture
              </div>
              <div className="project-name">Break Free</div>
            </div>
            <div
              className={classNames({
                project: true,
                studyCards: true,
                'highlighted--project': this.state.studyCardsIsHighlighted,
              })}
            >
              <div className="project-picture">
                Picture
              </div>
              <div className="project-name">Study Cards</div>
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
