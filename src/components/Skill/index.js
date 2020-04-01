import React from 'react';
import classNames from 'classnames';
import SkillStyled from './SkillStyled';

// eslint-disable-next-line react/prefer-stateless-function
class Skill extends React.Component {
  render() {
    return (
      <SkillStyled>
        <span
          className="skill"
          id={this.props.id}
          onMouseOver={this.targetGrocereaz}
          onMouseOut={this.untargetGrocereaz}
        >
          {this.props.skill}
        </span>
      </SkillStyled>
    );
  }
}

export default Skill;
