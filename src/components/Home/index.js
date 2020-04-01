import React from 'react';
// import classNames from 'classnames';
import projectsData from 'src/assets/data/projectsData';
import skillsData from 'src/assets/data/skillsData';
import Project from 'src/components/Project';
import HomeStyled from './HomeStyled';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.highlight = this.highlight.bind(this);
    this.removeHighlight = this.removeHighlight.bind(this);
    this.targetGrocereaz = this.targetGrocereaz.bind(this);
    this.targetBreakFree = this.targetBreakFree.bind(this);
    this.untargetGrocereaz = this.untargetGrocereaz.bind(this);
    this.untargetBreakFree = this.untargetBreakFree.bind(this);
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

  targetBreakFree() {
    this.highlight('breakFree');
  }

  untargetGrocereaz() {
    this.removeHighlight('grocereaz');
  }

  untargetBreakFree() {
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
            {skillsData.map((skill) => (
              <span
                key={skill.id}
                className="skill"
                id={skill.idName}
                onMouseOver={this[skill.target]}
                onMouseOut={this[skill.untarget]}
              >
                {skill.skill}
              </span>
            ))}
          </div>
        </section>
      </HomeStyled>
    );
  }
}

export default Home;
