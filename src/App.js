import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './view/Home';
import GCP from './view/GCP';
import GEL from './view/GEL';
import PageNotFound from './view/404';


function App() {
  return (
        <Router>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/gcp' component={GCP}></Route>
              <Route exact path='/gel' component={GEL}></Route>
              <Route exact path='*' component={PageNotFound}></Route>
            </Switch>
       </Router>
  );
}

export default App;
