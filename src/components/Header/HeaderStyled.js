import styled from 'styled-components';
import theme from 'src/styles/theme';

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 7vh;
  width: 100vw;
  border: 1px solid lightgrey;
  z-index: 2;

  .julie {
    font-family: ${theme.julieFont};
    font-size: 2.3em;
    font-weight: normal;
    margin: auto .5em;
    /*color: ${theme.colorOne};*/
    width: 100%;
    text-align: center;
    background: linear-gradient(to right, ${theme.colorOne}, pink);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /*display: inline;*/
  }
  .burger-menu {
    position: relative;
  }
  .burger-menu-icon {
    display: block;
    margin-right: 2em;
  }
  .dropdown-burger {
    display: none;
    position: absolute;
    right: .5em;
    border: 1px solid lightgrey;
    background-color: white;
    padding: .5em;
    margin-top: .5em;
    &.menu--open{
      display: block;
    }
  }
  .burger-menu-link {
    margin-top: .5em;
    font-family: ${theme.contentFont};
    font-weight: bold;
    color: ${theme.colorOne};
  }
  .menu {
    display: none;
  }

  @media only screen and (min-width: 980px) {
    .julie {
      text-align: left;
    }
    .burger-menu {
      display: none;
    }
    .menu {
      display: flex;
      flex-direction: row;
      font-family: ${theme.contentFont};
      margin: auto 1em;
      position: relative;
    }
    .menu-link {
      margin: auto .5em;
      cursor: pointer;
      font-size: ${theme.contentSize};
      color: ${theme.basicColor};
      &:hover {
        color: ${theme.colorOne};
      }
    }
    #projects {
      color: ${theme.colorOne};
      font-weight: bold;
    }
    .dropdown {
      position: absolute;
      top: 1.7em;
      left: 0;
    }
    .dropdown-item {
      font-size: ${theme.contentSize};
      margin-left: .3em;
      color: ${theme.colorOne};
      background-color: rgba(255, 255, 255, 0.9);
      padding: .5em;
      font-weight: bold;
      &:hover {
        color: white;
        background-color: ${theme.colorOne};
      }
    }

    .grocereaz {
      transform: translateY(2000px);
      transition: .6s;
      &.menu--open{
        display: flex;
        transform: translateY(0);
      }
    }
    .break-free {
      transform: translateY(2000px);
      transition: .7s;
      &.menu--open{
        display: flex;
        transform: translateY(0);
      }
    }
    .portfolio {
      transform: translateY(2000px);
      transition: .8s;
      &.menu--open{
        display: flex;
        transform: translateY(0);
      }
    }
    .study-cards {
      transform: translateY(2000px);
      transition: .9s;
      &.menu--open{
        display: flex;
        transform: translateY(0);
      }
    }

  }
  @media only screen and (max-height: 414px) {
    height: 12vh;
    .julie {
      font-size: 2em;
    }
  }
`;

export default HeaderStyled;
