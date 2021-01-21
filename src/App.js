import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppTest from './test/AppTest';
import ButtonTest from './views/ButtonTest';
import NavbarTest from './views/NavbarTest';

//Views
import HomePage from './views/HomePage/HomePage';

function App() {
  return (
    <Router>
      <AppTest></AppTest>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/BT' component={ButtonTest}></Route>
        <Route exact path='/NB' component={NavbarTest}></Route>
      </Switch>
    </Router>
  );
}

export default App;
