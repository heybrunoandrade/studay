import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import GuestRoute from './guest';
import PrivateRoute from './private';
import history from '~/history';

// Import Components
import Signin from '~/pages/Auth/Signin';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <GuestRoute exact path="/" component={Signin} />
      <Route exact path="*" />
    </Switch>
  </ConnectedRouter>
);

export default Routes;