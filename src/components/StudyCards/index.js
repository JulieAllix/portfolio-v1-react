import React from 'react';
import { Icon } from 'semantic-ui-react';
import projectsData from 'src/assets/data/projectsData';
import ProjectPresentationStyled from 'src/components/ProjectPresentationStyled';

const project = projectsData[3];

// eslint-disable-next-line react/prefer-stateless-function
class StudyCards extends React.Component {
  render() {
    return (
      <ProjectPresentationStyled>
        <section className="picture-section">
          <div className="picture-desktop-wrapper">
            <img
              src={project.image}
              alt={project.alt}
              className="picture-desktop"
            />
            <div className="pin" />
            <h2 className="project-name">{project.projectName}</h2>
          </div>
        </section>
        <section className="presentation-section">
          <div className="presentation-section-second-level">
            <div className="picture-mobile-wrapper">
              <img
                src={project.image}
                alt={project.alt}
                className="picture-mobile"
              />
              <div className="mobile-project-name">
                {project.projectName}
              </div>
            </div>
            <div className="presentation-wrapper">
              <div className="presentation-part">
                <h2 className="presentation-section-title">About</h2>
                <p className="project-paragraph">
                  {project.about}
                </p>
              </div>
              <div className="presentation-part">
                <h2 className="presentation-section-title">Timing</h2>
                <p className="project-paragraph">
                  {project.timing}
                </p>
              </div>
              <div className="presentation-part">
                <h2 className="presentation-section-title">Concepts / Skills used</h2>
                <ul className="u-list">
                  {project.skillsUsed.map((skill) => (
                    <li className="list-element" key={skill}>
                      <Icon name="check circle" size="small" color="yellow" />
                      <span className="skill">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="presentation-part">
                <h2 className="presentation-section-title">New concepts discovered</h2>
                <ul className="u-list">
                  {project.skillsDiscovered.map((skill) => (
                    <li className="list-element" key={skill}>
                      <Icon name="check circle" size="small" color="yellow" />
                      <span className="skill">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="buttons">
                <a href={project.projectUrl} className="project-button" type="button">
                  See the project
                </a>
                <a href={project.gitHubUrl} className="project-button" type="button">
                  Access to the repository
                </a>
              </div>
            </div>
          </div>
        </section>
      </ProjectPresentationStyled>
    );
  }
}

export default StudyCards;
