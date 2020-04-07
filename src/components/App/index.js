import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import StudyCards from 'src/components/StudyCards';
import Portfolio from 'src/components/Portfolio';
import Grocereaz from 'src/components/Grocereaz';
import BreakFree from 'src/components/BreakFree';
import Oclock from 'src/components/Oclock';
import Footer from 'src/components/Footer';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/study-cards" component={StudyCards} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/grocereaz" component={Grocereaz} />
      <Route exact path="/break-free" component={BreakFree} />
      <Route exact path="/oclock" component={Oclock} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </AppStyled>
);

// == Export
export default App;
