import React from 'react';
import { Route , indexRoute } from 'react-router';
import App from './modules/index';
import Geo from './modules/geo';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Geo} />
    </Route>
)