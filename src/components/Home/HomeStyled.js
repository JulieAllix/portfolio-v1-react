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
    .skills-section {
      width: 40%;
      height: 100%;
      border-left: 1px solid lightgrey;
    }
  }
`;

export default HomeStyled;
