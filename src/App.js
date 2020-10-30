import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppTest from './test/AppTest';

//Views
import HomePage from './views/HomePage/HomePage';

function App() {
  return (
    <Router>
      <AppTest></AppTest>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
