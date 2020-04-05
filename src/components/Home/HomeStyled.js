import styled from 'styled-components';
import theme from 'src/styles/theme';

import pineapple1 from 'src/assets/images/pineapple-1.jpg';
import wood from 'src/assets/images/wood.jpg';

/*
import zebra from 'src/assets/images/zebra.jpg';
import pineapple2 from 'src/assets/images/pineapple-2.jpg';
import ice from 'src/assets/images/ice.jpg';
import wall from 'src/assets/images/wall.jpg';
import polygon from 'src/assets/images/polygon.jpg';
*/

const HomeStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 83vh;
  z-index: 1;

  .skills-section {
    display: none
  }
  .projects-section {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-image: url(${pineapple1});
  }
  .projects-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
  }

  @media only screen and (min-width: 980px) {
    height: 84vh;

    .projects-section {
      width: 60%;
    }
    .skills-section {
      width: 40%;
      height: 100%;
      border-left: 1px solid lightgrey;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow-x: hidden;
      background-image: url(${wood});
      background-position: center;
      background-repeat: no-repeat;
    }
    .skills-intro-wrapper {
      margin: 12em 0 2em;
      padding: .5em;
      font-size: 1em;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      background-color: rgba(255, 255, 255, 0.9);
    }
    .skills-intro {
      overflow: visible;
      font-family: ${theme.contentFont};
      color: ${theme.colorOne};
      font-weight: bold;
      margin: .5em auto;
    }
    .skills-wrapper {
      background-color: rgba(255, 255, 255, 0.9);
      padding: .5em;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    .skill {
      padding: .5em;
      z-index: 1;
      font-size: 1.2em;
      font-family: ${theme.contentFont};
      cursor: pointer;
      &:hover {
        color: ${theme.colorOne};
      }
    }
    #react {
      font-size: 2em;
      font-weight: bold;
    }
    #redux {
      font-size: 2em;
      font-weight: bold;
    }
    #axios {
      font-size: 2em;
    }
    #teamwork {
      font-size: 2em;
    }
    #javaScript {
      font-size: 1.5em;
    }
    #agileMethod {
      font-size: 1.5em;
    }
    #git {
      font-size: 1.5em;
    }
    #styledComponents {
      font-size: 1.5em;
    }
    #gitConflicts {
      font-size: 1.5em;
    }
    #flexbox {
    }

  }

  @media only screen and (min-width: 1000px) {
    .skills-intro-wrapper {
      font-size: 1.2em;
    }
  }

  @media only screen and (min-width: 1210px) {
    .skills-intro-wrapper {
      margin: 10em 0 2em;
    }
  }

  @media only screen and (min-width: 1330px) {
    .skills-intro-wrapper {
      margin: 6em 0 2em;
    }
    .skills-intro-wrapper {
      font-size: 1.5em;
    }
  }
  
  @media only screen and (min-width: 1630px) {
    .skills-intro-wrapper {
      margin: 4em 0 2em;
    }
  }
`;

export default HomeStyled;
