import styled from 'styled-components';
// import theme from 'src/styles/theme';

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
      border: 2px solid lightgrey;
      margin: 1em;
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
    .grocereaz {
      &.highlighted--project{
        background-color: yellow;
      }
    }

  }
`;

export default HomeStyled;
