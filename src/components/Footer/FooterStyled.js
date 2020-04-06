import styled from 'styled-components';
import theme from 'src/styles/theme';

const FooterStyled = styled.div`
  background-color: ${theme.colorOne};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 7vh;
  transition: .6s;

  .footer-icon {
    margin: auto 1.5em;
  }
  a {
    color: white;
    &:hover {
      color: ${theme.colorThree};
    }
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
