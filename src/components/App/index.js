import React from 'react';
import Header from 'src/containers/Header';
// import reactLogo from './react-logo.svg';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    {/* <img src={reactLogo} alt="react logo" />
    */}
    <Header />
    Main
    Footer
  </AppStyled>
);

// == Export
export default App;
