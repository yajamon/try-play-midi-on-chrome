import * as React from 'react';
import { render } from 'react-dom';
import {Route, IndexRoute, Router, hashHistory} from 'react-router';

import { Application } from './Application';

render(
    <Application />,
    document.getElementById("app")
);
