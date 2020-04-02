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
    this.state = {
      grocereazIsHighlighted: false,
      portfolioIsHighlighted: false,
      breakFreeIsHighlighted: false,
      studyCardsIsHighlighted: false,
    };
  }

  highlight(project, bool) {
    switch (project) {
      case 'grocereaz':
        this.setState({
          grocereazIsHighlighted: bool,
        });
        break;
      case 'portfolio':
        this.setState({
          portfolioIsHighlighted: bool,
        });
        break;
      case 'breakFree':
        this.setState({
          breakFreeIsHighlighted: bool,
        });
        break;
      case 'studyCards':
        this.setState({
          studyCardsIsHighlighted: bool,
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
                image={project.image}
                alt={project.alt}
              />
            ))}
          </div>
        </section>
        <section className="skills-section">
          <div className="skills-intro-wrapper">
            <span className="skills-intro">Hover the below skills to highlight the project</span>
            <span className="skills-intro">on which I've put them into practice !</span>
          </div>
          <div className="skills-wrapper">
            {skillsData.map((skill) => (
              <span
                key={skill.id}
                className="skill"
                id={skill.idName}
                onMouseOver={this.highlight.bind(this, skill.project, true)}
                onMouseOut={this.highlight.bind(this, skill.project, false)}
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
