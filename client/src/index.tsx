import * as React from 'react';
import { render } from 'react-dom';
import { Store, createStore } from 'redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import * as throttle from 'lodash/throttle';

import createProvider from './utils/provider';
import reducer from './reducers';
import { saveState, loadState } from './storage';
import Todos from './Todos';


const store = createStore(reducer, loadState());
const Provider = createProvider();

store.subscribe(throttle(() => {
    const state = store.getState();
    if (typeof state !== 'undefined') {
        saveState(state);
    }
}, 1000));

const Hello = () =>
    <div>
        <h1>Hello world!</h1>
        <Link to="/todos">Todos</Link>
    </div>;

const Root = () =>
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
        <Route path="/todos" component={Todos}/>
    </Router>;

render(
    <Provider store={store} target={Root} />,
    document.getElementById('app')
);
