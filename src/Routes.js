import React from 'react';
import { Route , indexRoute } from 'react-router';
import App from './modules/index';
import Home from './modules/home';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
    </Route>
)