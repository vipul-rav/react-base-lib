import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import SampleContainer  from "../containers/SampleContainer";
import SampleContainer2 from "../containers/SampleContainer2";

export const history = createBrowserHistory();

const routes = <Router history={history}>
    <Switch>
        <Route exact path="/" component={SampleContainer} />
        <Route path="/sample2" component={SampleContainer2} />
    </Switch>
</Router>;

export default routes;