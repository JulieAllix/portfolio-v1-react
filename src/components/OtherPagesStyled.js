import styled from 'styled-components';
import theme from 'src/styles/theme';
import wall from 'src/assets/images/wall.jpg';
import pineapple1 from 'src/assets/images/pineapple-1.jpg';

const OtherPagesStyled = styled.div`
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
    background-image: url(${pineapple1});
    background-position: center;
    background-repeat: no-repeat;
  }
  .presentation-section-second-level {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    padding: .5em;
    overflow-x: hidden;
      ::-webkit-scrollbar {
        width: 15px;
      }
      ::-webkit-scrollbar-track {
        background: none;
      }
      ::-webkit-scrollbar-thumb {
        background: ${theme.colorOne};
      }
  }
  .picture-mobile-wrapper {
    height: 292px;
    width: 292px;
    position: relative;
    margin: 0 auto;
  }
  .picture-mobile {
    border: 2px solid lightgrey;
    height: 290px;
    width: 290px;
  }
  .mobile-page-name {
    position: absolute;
    bottom: .5em;
    width: 290px;
    padding: .5em;
    background-color: rgba(255, 255, 255, 0.9);
    color: ${theme.colorTwo};
    font-family: ${theme.titleFont};
    text-align: center;
    font-size: 2.5em;
    font-weight: bold;
    border: 2px solid lightgrey;
  }
  .presentation-wrapper {
    width: 100%;
    padding: 1em;
  }
  .presentation-part {
    margin: 2em auto 2em;
  }
  .presentation-title {
    font-family: ${theme.titleFont};
    background-color: ${theme.colorOne};
    padding: 0.5em;
    text-align: center;
    width: 100%;
    color: white;
    margin-bottom: 2em;
  }
  .presentation-section-title {
    font-family: ${theme.contentFont};
    width: 100%;
    margin: 1em;
    font-size: 1.8em;
  }
  .data-paragraph {
    width: 100%;
    white-space: normal;
    font-family: ${theme.contentFont};
    font-size: 1.5em;
    text-align: justify;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .button {
    padding: .5em;
    background: none;
    background-color: rgba(255, 255, 255, 0.8);
    color: ${theme.colorOne};
    font-family: ${theme.contentFont};
    font-size: 1.5em;
    font-weight: bold;
    border: 2px solid ${theme.colorOne};
    border-radius: 5px;
    margin-top: .5em;
    text-align: center;
    &:hover {
      background-color: ${theme.colorOne};
      color: white;
    }
  }
  @media only screen and (min-width: 768px) {
    .picture-mobile-wrapper {
      height: 500px;
      width: 500px;
    }
    .picture-mobile {
      height: 498px;
      width: 498px;
    }
    .mobile-page-name {
      width: 498px;
      font-size: 3em;
    }
  }

  @media only screen and (min-width: 980px) {
    height: 84vh;

    .picture-section {
      display: flex;
      align-items: center;
      width: 50vw;
      height: 84vh;
      border-right: 2px solid lightgrey;
      background-image: url(${wall});
    }
    .picture-desktop-wrapper {
      position: relative;
      margin: 0 auto;
      border: 2px solid #bbb;
      background-color: #eee;
      padding: .5em;
      height: 410px;
      width: 435px;
      transform: rotate(2deg);
      box-shadow: inset 0 0 5px lightgrey;
    }
    .picture-desktop {
      border: 2px solid #bbb;
      height: 350px;
      width: 418px;
    }
    .pin {
      position: absolute;
      right: 14em;
      top: 1em;
      height: 35px;
      width: 35px;
      background-color: ${theme.colorThree};
      border-radius: 50%;
      display: inline-block;
      box-shadow: inset 0 0 5px grey;
      }
    .presentation-section {
      width: 50vw;
      background-image: url(${pineapple1});
    }
    .picture-mobile-wrapper {
      display: none;
    }
    .presentation-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 0;
    }
    .presentation-part {
      width: 90%;
      white-space: normal;
    }
    .presentation-section-title {
      width: 100%;
      color: ${theme.colorOne};
    }
    .project-paragraph {
      width: 100%;
    }
    .buttons {
      width: 30vw;
      margin: 3em auto 2em;
    }
  }
  @media only screen and (min-width: 1025px) {
    height: 84vh;

    .picture-section {
      width: 40vw;
    }
    .picture-desktop-wrapper {
      height: 400px;
      width: 350px;
    }
    .picture-desktop {
      height: 350px;
      width: 333px;
    }
    .pin {
      right: 11em;
      top: 1em;
      height: 35px;
      width: 35px;
      }
    .project-name {
      font-size: 1.8em;
    }
    .presentation-section {
      width: 60vw;
    }
  }
  @media only screen and (min-width: 1210px) {
    .picture-desktop-wrapper {
      height: 470px;
      width: 450px;
    }
    .picture-desktop {
      height: 398px;
      width: 428px;
    }
    .pin {
      right: 15em;
      top: 1em;
      height: 40px;
      width: 40px;
      }
    .project-name {
      font-size: 2.5em;
    }
  }
  @media only screen and (max-height: 414px) {
    height: 76vh;
  }

`;

export default OtherPagesStyled;
