import React from 'react';
import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
// import reactLogo from './react-logo.svg';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    {/* <img src={reactLogo} alt="react logo" />
    */}
    <Header />
    <Home />
    <Footer />
  </AppStyled>
);

// == Export
export default App;
