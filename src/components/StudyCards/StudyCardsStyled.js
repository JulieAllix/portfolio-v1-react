import styled from 'styled-components';
import theme from 'src/styles/theme';
import wall from 'src/assets/images/wall.jpg';
import pineapple1 from 'src/assets/images/pineapple-1.jpg';
/*
import pineapple1 from 'src/assets/images/pineapple-1.jpg';
import wood from 'src/assets/images/wood.jpg';
import zebra from 'src/assets/images/zebra.jpg';
import pineapple2 from 'src/assets/images/pineapple-2.jpg';
import ice from 'src/assets/images/ice.jpg';
import polygon from 'src/assets/images/polygon.jpg';
*/

const StudyCardsStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
  height: 83vh;

  .picture-section {
    display: none;
  }
  .presentation-section {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
      ::-webkit-scrollbar {
        width: 15px;
      }
      ::-webkit-scrollbar-track {
        /*box-shadow: inset 0 0 5px grey;*/
        background: none;
      }
      ::-webkit-scrollbar-thumb {
        background: ${theme.colorOne};
      }
  }
  .picture-mobile-wrapper {
    border: 1px solid lightgrey;
    background-color: white;
    height: 400px;
    width: 430px;
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
  .presentation-part {
    margin: 2em auto 3em;
  }
  .presentation-section-title {
    font-family: ${theme.titleFont};
    width: 90vw;
    margin-left: 1.5em;
    font-size: 1.8em;
    margin-bottom: 1.5em;
  }
  .project-paragraph {
    width: 90vw;
    white-space: normal;
    font-family: ${theme.contentFont};
    font-size: 1.3em;
    text-align: justify;
  }
  .list-element {
    font-family: ${theme.contentFont};
    font-size: 1.3em;
    margin-left: .5em;
    margin-bottom: .5em;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    width: 90vw;
  }
  .project-button {
    padding: .5em;
    background: none;
    color: ${theme.colorOne};
    font-family: ${theme.contentFont};
    font-size: 1.5em;
    border: 1px solid ${theme.colorOne};
    border-radius: 5px;
    margin-top: .5em;
    text-align: center;
    &:hover {
      background-color: ${theme.colorOne};
      color: white;
    }
  }

  @media only screen and (min-width: 980px) {
    height: 84vh;
    .picture-section {
      display: flex;
      align-items: center;
      width: 40vw;
      height: 84vh;
      border-right: 2px solid lightgrey;
      background-image: url(${wall});
    }
    .picture-desktop-wrapper {
      position: relative;
      margin: 0 auto;
      border: 2px solid lightgrey;
      background-color: #eee;
      padding: .5em;
      height: 470px;
      width: 450px;
      transform: rotate(2deg);
    }
    .picture-desktop {
      border: 2px solid lightgrey;
      height: 398px;
      width: 428px;
    }
    .presentation-section {
      width: 60vw;
      background-image: url(${pineapple1});
    }
    .picture-mobile-wrapper {
      display: none;
    }
    .presentation-mobile-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      padding: 0;
    }
    .presentation-part {
      width: 25vw;
      white-space: normal;
    }
    .presentation-section-title {
      width: 100%;
    }
    .project-paragraph {
      width: 100%;
    }
    .buttons {
      width: 30vw;
      margin: 3em auto 0;
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
