import React from 'react';
import studyCards from 'src/assets/images/study-cards.jpg';
import StudyCardsStyled from './StudyCardsStyled';

// eslint-disable-next-line react/prefer-stateless-function
class StudyCards extends React.Component {
  render() {
    return (
      <StudyCardsStyled>
        <section className="picture-section">
          Picture
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
          <div className="presentation-mobile-wrapper">
            <div className="about">
              <h2>About</h2>
              <p className="project-paragraph">
                The aim of this project was to help me learning the basics of html and css by mixing theory and practice. Those are study cards where I can find useful tips I learned in class (theory) in the shape of a website (practice).
              </p>
              <p className="project-paragraph">
                I added a toggle switch giving the opportunity to the user to choose between two themes.
              </p>
            </div>
          </div>
        </section>
      </StudyCardsStyled>
    );
  }
}

export default StudyCards;
