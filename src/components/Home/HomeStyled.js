import styled from 'styled-components';
import theme from 'src/styles/theme';

const HomeStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 83vh;

  @media only screen and (min-width: 650px) {
    height: 84vh;
    .projects-section {
      width: 60%;
      height: 100%;
    }
    .projects-wrapper {
      margin: 1em;
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
      font-size: 1.5em;
      font-family: ${theme.titleFont};
      
    }
    .skills-section {
      width: 40%;
      height: 100%;
      border-left: 1px solid lightgrey;
    }
    .skills-wrapper {
      border: 2px solid lightgrey;
      margin: 1em;
    }
    .skill {
      padding: .5em;
    }
    .grocereaz {
      &.highlighted--project{
        background-color: yellow;
      }
    }
    .breakFree {
      &.highlighted--project{
        background-color: yellow;
      }
    }

  }
`;

export default HomeStyled;
