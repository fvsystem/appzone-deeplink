import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Screens from './screens';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Screens />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
