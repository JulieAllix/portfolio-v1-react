import styled from 'styled-components';
import theme from 'src/styles/theme';

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  border: 1px solid lightgrey;
  
  .julie {
    font-family: ${theme.julieFont};
    font-size: 1.7em;
    margin: auto .5em;
  }
  .menu {
    display: flex;
    flex-direction: row;
    font-family: ${theme.contentFont};
    margin: auto 1em;
    position: relative;
  }
  .menu-link {
    margin: auto .3em;
  }
  .dropdown {
    position: absolute;
    top: 1.7em;
    left: .2em;
  }
  @media only screen and (min-width: 650px) {

  }
`;

export default HeaderStyled;
