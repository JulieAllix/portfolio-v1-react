import React from 'react';
import classNames from 'classnames';
import ProjectStyled from './ProjectStyled';

// eslint-disable-next-line react/prefer-stateless-function
class Project extends React.Component {
  render() {
    const projectClass = this.props.projectClass;
    const highlightedProject = this.props.highlightedProject;
    return (
      <ProjectStyled>
        <div
          className={classNames({
            project: true,
            [projectClass]: true,
            'highlighted--project': highlightedProject,
          })}
        >
          <div className="project-picture">
            Picture
          </div>
          <div className="project-name">{this.props.projectName}</div>
        </div>
      </ProjectStyled>
    );
  }
}

export default Project;
