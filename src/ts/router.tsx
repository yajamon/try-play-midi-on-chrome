import * as React from 'react';
import { render } from 'react-dom';
import {Route, IndexRoute, Router, hashHistory} from 'react-router';

import { Application } from './Application';
import { Index } from './components/Index';
import { Hello } from "./components/Hello";

render(
    <Router history={hashHistory}>
        <Route path="/" component={Application} >
            <IndexRoute component={Index} ></IndexRoute>
            <Route path="/hello" component={Hello} ></Route>
        </Route>
    </Router>,
    document.getElementById("app")
);
