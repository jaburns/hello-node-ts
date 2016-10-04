import * as React from 'react';
import { render } from 'react-dom';
import { Store, createStore } from 'redux';
import { Router, Route, Link, browserHistory } from 'react-router';

import createProvider from './utils/provider';
import reducer from './reducers';
import App from './App';

const store = createStore(reducer);
const Provider = createProvider();

const Hello = () =>
    <div>
        <h1>Hello world!</h1>
        <Link to="/todos">Todos</Link>
    </div>;

const Root = () =>
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
        <Route path="/todos" component={App}/>
    </Router>;

render(
    <Provider store={store} target={Root} />,
    document.getElementById('app')
);
