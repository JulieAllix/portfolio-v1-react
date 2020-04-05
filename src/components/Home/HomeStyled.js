import styled from 'styled-components';
import theme from 'src/styles/theme';

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
    }
    .skills-intro-wrapper {
      margin: 12em auto 2em;
      padding: .5em;
      font-size: 1em;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .skills-intro {
      overflow: visible;
      font-family: ${theme.contentFont};
      margin-bottom: 1em;
    }
    .skills-wrapper {
      border: 2px solid lightgrey;
      margin: 1em;
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
      margin: 10em auto 2em;
    }
  }

  @media only screen and (min-width: 1330px) {
    .skills-intro-wrapper {
      margin: 6em auto 2em;
    }
    .skills-intro-wrapper {
      font-size: 1.5em;
    }
  }
  
  @media only screen and (min-width: 1630px) {
    .skills-intro-wrapper {
      margin: 4em auto 2em;
    }
  }
`;

export default HomeStyled;
