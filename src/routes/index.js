import React, { lazy, Suspense } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const SampleContainer = lazy(() => import('../screens/Sample'));
const SampleContainer2 = lazy(() => import('../screens/Sample2'));

const history = createBrowserHistory();

const AppRouter = () => {
  const { pathname } = window.location;
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={pathname} component={SampleContainer} />
          <Route path="/libSample1" component={SampleContainer2} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export { AppRouter, history };
