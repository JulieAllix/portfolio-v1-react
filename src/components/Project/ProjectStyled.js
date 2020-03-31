import styled from 'styled-components';
import theme from 'src/styles/theme';

const ProjectStyled = styled.div`

  @media only screen and (min-width: 650px) {
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

export default ProjectStyled;
