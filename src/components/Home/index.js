import React from 'react';
import classNames from 'classnames';
import HomeStyled from './HomeStyled';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.highlight = this.highlight.bind(this);
    this.removeHighlight = this.removeHighlight.bind(this);
    this.targetGrocereaz = this.targetGrocereaz.bind(this);
    this.targetBreakfree = this.targetBreakfree.bind(this);
    this.untargetGrocereaz = this.untargetGrocereaz.bind(this);
    this.untargetBreakfree = this.untargetBreakfree.bind(this);
    this.state = {
      grocereazIsHighlighted: false,
      portfolioIsHighlighted: false,
      breakFreeIsHighlighted: false,
      studyCardsIsHighlighted: false,
    };
  }

  targetGrocereaz() {
    this.highlight('grocereaz');
  }

  targetBreakfree() {
    this.highlight('breakFree');
  }

  untargetGrocereaz() {
    this.removeHighlight('grocereaz');
  }

  untargetBreakfree() {
    this.removeHighlight('breakFree');
  }

  highlight(project) {
    switch (project) {
      case 'grocereaz':
        this.setState({
          grocereazIsHighlighted: true,
        });
        break;
      case 'portfolio':
        this.setState({
          portfolioIsHighlighted: true,
        });
        break;
      case 'breakFree':
        this.setState({
          breakFreeIsHighlighted: true,
        });
        break;
      case 'studyCards':
        this.setState({
          studyCardsIsHighlighted: true,
        });
        break;
      default:
        break;
    }
  }

  removeHighlight(project) {
    switch (project) {
      case 'grocereaz':
        this.setState({
          grocereazIsHighlighted: false,
        });
        break;
      case 'portfolio':
        this.setState({
          portfolioIsHighlighted: false,
        });
        break;
      case 'breakFree':
        this.setState({
          breakFreeIsHighlighted: false,
        });
        break;
      case 'studyCards':
        this.setState({
          studyCardsIsHighlighted: false,
        });
        break;
      default:
        break;
    }
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
              className="skill"
              id="react"
              onMouseOver={this.targetGrocereaz}
              onMouseOut={this.untargetGrocereaz}
            >
              React
            </span>
            <span
              className="skill"
              id="javascript"
              onMouseOver={this.targetBreakfree}
              onMouseOut={this.untargetBreakfree}
            >
              JavaScript
            </span>
          </div>
        </section>
      </HomeStyled>
    );
  }
}

export default Home;
