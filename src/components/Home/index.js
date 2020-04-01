import React from 'react';
// import classNames from 'classnames';
import projectsData from 'src/assets/data/projectsData';
import Project from 'src/components/Project';
import Skill from 'src/components/Skill';
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
            {projectsData.map((project) => (
              <Project
                key={project.id}
                projectClass={project.projectClass}
                highlightedProject={this.state[project.highlightedProject]}
                projectName={project.projectName}
              />
            ))}
          </div>
        </section>
        <section className="skills-section">
          <div className="skills-wrapper">
            <Skill
              id="react"
              skill="React"
              project="grocereaz"
            />
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
