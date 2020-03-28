import styled from 'styled-components';
// import theme from 'src/styles/theme';

const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid lightgrey;
  .footer-icon {
    margin: .5em 1.5em;
  }

  @media only screen and (min-width: 650px) {
    .contact {
      display: none;
    }
    .footer-icon {
      margin: .5em 2em;
    }
  }
`;

export default FooterStyled;
