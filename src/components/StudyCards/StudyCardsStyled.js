import styled from 'styled-components';
import theme from 'src/styles/theme';
/*


import pineapple1 from 'src/assets/images/pineapple-1.jpg';
import wood from 'src/assets/images/wood.jpg';

/*
import zebra from 'src/assets/images/zebra.jpg';
import pineapple2 from 'src/assets/images/pineapple-2.jpg';
import ice from 'src/assets/images/ice.jpg';
import wall from 'src/assets/images/wall.jpg';
import polygon from 'src/assets/images/polygon.jpg';
*/

const StudyCardsStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 83vh;
  z-index: 1;
  overflow-x: hidden;
  .picture-section {
    display: none;
  }
  .picture-mobile-wrapper {
      border: 1px solid lightgrey;
      background-color: white;
      height: 400px;
      width: 430px;
      margin-top: 0;
      position: relative;
    }
  .picture-mobile {
    height: 398px;
    width: 428px;
  }
  .mobile-project-name {
    position: absolute;
    bottom: .5em;
    width: 100vw;
    padding: .5em;
    background-color: rgba(255, 255, 255, 0.9);
    color: ${theme.colorOne};
    font-family: ${theme.titleFont};
    text-align: center;
    font-size: 2em;
    font-weight: bold;
  }
  .presentation-mobile-wrapper {
    width: 100vw;
    padding: 1em;
  }
  .project-paragraph {
    width: 95vw;
    white-space: normal;
  }
  @media only screen and (min-width: 980px) {
    height: 84vh;
    .picture-section {
      display: flex;
    }
    .picture-mobile {
      display: none;
    }
    .mobile-project-name {
      display: none;
    }
    .presentation-mobile-wrapper {
      display: none;
    }
  }

  @media only screen and (min-width: 1000px) {

  }

  @media only screen and (min-width: 1210px) {

  }

  @media only screen and (min-width: 1330px) {

  }
  
  @media only screen and (min-width: 1630px) {

  }
`;

export default StudyCardsStyled;
