import styled from 'styled-components';
import theme from 'src/styles/theme';
import wall from 'src/assets/images/wall.jpg';
import pineapple1 from 'src/assets/images/pineapple-1.jpg';
import desk from 'src/assets/images/desk.jpg';
import pineapple2 from 'src/assets/images/pineapple-2.jpg';
import ice from 'src/assets/images/ice.jpg';
import polygon from 'src/assets/images/polygon.jpg';

const OtherPagesStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
  height: 88vh;

  .picture-section {
    display: none;
  }
  .presentation-section {
    width: 100%;
    height: 100%;
    background-image: url(${desk});
    background-position: center;
    background-repeat: no-repeat;
  }
  .presentation-section-second-level {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
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
  .presentation-wrapper {
    width: 100%;
    padding: 1em;
  }
  .presentation-part {
    margin: 2em auto 2em;
  }
  .presentation-title {
    font-family: ${theme.titleFont};
    color: ${theme.colorOne};
    padding: 0.5em;
    text-align: center;
    width: 100%;
    margin-bottom: .5em;
    font-size: 1.8em;
    white-space: normal;
  }
  .icon-wrapper-left {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: .5em;
  }
  .presentation-paragraph-about {
    width: 90%;
    margin: 0 auto;
  }
  .presentation-section-title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .presentation-section-title {
    font-family: ${theme.titleFont};
    width: 100%;
    margin: 1em;
    font-size: 1.4em;
    white-space: normal;
  }
  .presentation-section-title-about {
    font-family: ${theme.titleFont};
    width: 100%;
    margin: 0;
    font-size: 1.4em;
    white-space: normal;
  }
  .data-paragraph {
    width: 100%;
    white-space: normal;
    font-family: ${theme.contentFont};
    font-size: 1.5em;
    text-align: justify;
  }
  em {
    color: ${theme.colorOne};
    font-weight: bold;
  }
  .icon-wrapper-right {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: .5em;
  }
  .contact-infos {
    display: flex;
    flex-direction: column;
    margin-left: 4em;
  }
  .contact-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: .5em;
    font-size: 1.3em;
    font-weight: bold;
    color: ${theme.colorTwo};
    &:hover {
      color: ${theme.colorThree};
    }
    a {
      color: ${theme.colorTwo};
      &:hover {
      color: ${theme.colorThree};
    }
    }
  }
  .buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .button {
    width: 100%;
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
    white-space: normal;
    line-height: 1.5em;
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
  }

  @media only screen and (min-width: 980px) {
    height: 87vh;

    .picture-section {
      display: flex;
      align-items: center;
      width: 50vw;
      height: 87vh;
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
    }
    .picture-mobile-wrapper {
      display: none;
    }
    .presentation-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0;
    }
    .presentation-part {
      width: 90%;
      white-space: normal;
    }
    .presentation-title {
      font-family: ${theme.titleFont};
      background-color: ${theme.colorOne};
      color: white;
      margin-bottom: 2em;
      font-size: 1.9em;
    }
    .presentation-section-title {
      width: 100%;
      color: black;
      font-size: 1.8em;
    }
    .project-paragraph {
      width: 100%;
    }
    .contact-infos {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .contact-info {
      margin: 0 .5em;
    }
    .buttons {
      width: 30vw;
      margin: 3em auto 2em;
    }
  }
  @media only screen and (min-width: 1025px) {
    height: 87vh;

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
