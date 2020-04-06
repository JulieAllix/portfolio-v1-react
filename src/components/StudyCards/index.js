import React from 'react';
import studyCards from 'src/assets/images/study-cards.jpg';
import StudyCardsStyled from './StudyCardsStyled';
import { Icon } from 'semantic-ui-react';

// eslint-disable-next-line react/prefer-stateless-function
class StudyCards extends React.Component {
  render() {
    return (
      <StudyCardsStyled>
        <section className="picture-section">
          <div className="picture-desktop-wrapper">
            <img
              src={studyCards}
              alt="My first personal project: Study Cards"
              className="picture-desktop"
            />
            <h2 className="project-name">Study Cards</h2>
          </div>
        </section>
        <section className="presentation-section">
          <div className="picture-mobile-wrapper">
            <img
              src={studyCards}
              alt="My first personal project: Study Cards"
              className="picture-mobile"
            />
            <div className="mobile-project-name">
              Study Cards
            </div>
          </div>
          <div className="presentation-wrapper">
            <div className="presentation-part">
              <h2 className="presentation-section-title">About</h2>
              <p className="project-paragraph">
                The aim of this project was to help me learning the basics of html and css by mixing theory and practice. Those are study cards where I can find useful tips I learned in class (theory) in the shape of a website (practice).
              </p>
              <p className="project-paragraph">
                I added a toggle switch giving the opportunity to the user to choose between two themes.
              </p>
            </div>
            <div className="presentation-part">
              <h2 className="presentation-section-title">Timing</h2>
              <p className="project-paragraph">
                This was my first personal project. I worked on it during the very first weeks of my training (October 2019), and progressively updated it with the new knowledge I acquired.
              </p>
            </div>
            <div className="presentation-part">
              <h2 className="presentation-section-title">Concepts / Skills used</h2>
              <ul className="u-list">
                <li className="list-element">
                  <Icon name="check circle" size="small" color="yellow" />
                  <span className="skill">HTML</span>
                </li>
                <li className="list-element">
                  <Icon name="check circle" size="small" color="yellow" />
                  <span className="skill">CSS</span>
                </li>
                <li className="list-element">
                  <Icon name="check circle" size="small" color="yellow" />
                  <span className="skill">Flexbox</span>
                </li>
              </ul>
            </div>
            <div className="presentation-part">
              <h2 className="presentation-section-title">New concepts discovered</h2>
              <ul className="u-list">
                <li className="list-element">
                  <Icon name="check circle" size="small" color="yellow" />
                  <span className="skill">CSS variables</span>
                </li>
                <li className="list-element">
                  <Icon name="check circle" size="small" color="yellow" />
                  <span className="skill">Theme switch</span>
                </li>
                <li className="list-element">
                  <Icon name="check circle" size="small" color="yellow" />
                  <span className="skill">Toggle switch</span>
                </li>
              </ul>
            </div>
            <div className="buttons">
              <a href="" className="project-button" type="button">
                See the project
              </a>
              <a href="https://github.com/JulieAllix/fiche-revisions-oclock" className="project-button" type="button">
                Access to the repository
              </a>
            </div>
          </div>
        </section>
      </StudyCardsStyled>
    );
  }
}

export default StudyCards;
