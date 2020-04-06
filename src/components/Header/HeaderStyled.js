import styled from 'styled-components';
import theme from 'src/styles/theme';

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100vw;
  border: 1px solid lightgrey;
  z-index: 2;

  .julie {
    font-family: ${theme.julieFont};
    font-size: 2.3em;
    font-weight: normal;
    margin: auto .5em;
    color: ${theme.colorOne};
    width: 100%;
    text-align: center;
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
    color: ${theme.basicColor};
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
      font-size: 1.3em;
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
      left: .2em;
    }
    .dropdown-item {
      font-size: 1.3em;
      margin-left: .3em;
      color: ${theme.colorOne};
      background-color: rgba(255, 255, 255, 0.9);
      padding: .5em;
      font-weight: bold;
    }

    .grocereaz {
      transform: translateX(1000px);
      transition: .6s;
      &.menu--open{
        display: flex;
        transform: translateX(0);
      }
    }
    .break-free {
      transform: translateX(1000px);
      transition: .7s;
      &.menu--open{
        display: flex;
        transform: translateX(0);
      }
    }
    .study-cards {
      transform: translateX(1000px);
      transition: .8s;
      &.menu--open{
        display: flex;
        transform: translateX(0);
      }
    }

  }
`;

export default HeaderStyled;
