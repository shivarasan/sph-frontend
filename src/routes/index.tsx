import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewDeatails from '../container/ViewDetails';
import SearchResults from "../container/SearchResults"

const Routes = () => (
  <Router>
    <Switch>
    <Route  exact path="/" component={SearchResults} />
      <Route  path="/view-details" component={ViewDeatails} />
    </Switch>
  </Router>
);

export default Routes;
