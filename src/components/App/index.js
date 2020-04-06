import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import StudyCards from 'src/components/StudyCards';
import Footer from 'src/components/Footer';
// import reactLogo from './react-logo.svg';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    {/* <img src={reactLogo} alt="react logo" />
    */}
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/study-cards" component={StudyCards} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </AppStyled>
);

// == Export
export default App;
