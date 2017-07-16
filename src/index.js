import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import reducer from './reducers';
import Routes from './Routes';

//CSS imports
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../public/css/global.scss';
import '../public/css/geolocation.css';


const store = applyMiddleware(thunk)(createStore);

ReactDOM.render(<Provider store={store(reducer)}>
<Router routes={Routes} history={browserHistory}/></Provider>,
    document.getElementById('root')
);