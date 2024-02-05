import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import { createBrowserHistory } from 'history'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});
const newHistory = createBrowserHistory();

export default ({}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={newHistory}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};