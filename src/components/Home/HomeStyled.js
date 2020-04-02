import styled from 'styled-components';
import theme from 'src/styles/theme';

const HomeStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 83vh;
  z-index: 1;

  @media only screen and (min-width: 650px) {
    height: 84vh;
    .projects-section {
      width: 60%;
      height: 100%;
      overflow-x: hidden;
    }
    .projects-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content:center;
    }
    .project {
      border: 1px solid lightgrey;
      background-color: #eee;
      padding: .5em;
      height: 370px;
      width: 340px;
      margin: 1em 3em;
    }
    .project-picture {
      border: 1px solid lightgrey;
      background-color: white;
      height: 300px;
    }
    .project-name {
      width: 100%;
      text-align: center;
      padding: .3em;
      font-size: 1.7em;
      font-family: ${theme.titleFont};
      font-weight: bold;
      color: grey;
    }
    .skills-section {
      width: 40%;
      height: 100%;
      border-left: 1px solid lightgrey;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .skills-intro-wrapper {
      margin: 2em;
      padding: .5em;
      font-size: 1.5em;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .skills-intro {
      overflow: visible;
      font-family: ${theme.contentFont};
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
    .grocereaz {
      &.highlighted--project{
        background-color: ${theme.colorOne};
        .project-name {
          color: white;
        }
      }
    }
    .breakFree {
      &.highlighted--project{
        background-color: ${theme.colorOne};
        .project-name {
          color: white;
        }
      }
    }
    .portfolio {
      &.highlighted--project{
        background-color: ${theme.colorOne};
        .project-name {
          color: white;
        }
      }
    }
    .studyCards {
      &.highlighted--project{
        background-color: ${theme.colorOne};
        .project-name {
          color: white;
        }
      }
    }

  }
`;

export default HomeStyled;
