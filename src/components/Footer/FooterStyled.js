import styled from 'styled-components';
// import theme from 'src/styles/theme';

const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  height: 7vh;
  .footer-icon {
    margin: auto 1.5em;
  }

  @media only screen and (min-width: 650px) {
    height: 6vh;
    .contact {
      display: none;
    }
    .footer-icon {
      margin: .5em 2em;
    }
  }
`;

export default FooterStyled;
