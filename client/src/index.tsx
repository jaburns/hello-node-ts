import * as React from 'react';
import { createElement } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Store, createStore } from 'redux';
import * as throttle from 'lodash/throttle';

import reducer from './reducers';
import App from './App';
import { TodosState } from './state';
import { Provider } from 'react-redux';

const store = createStore(reducer);

const Hello = () =>
    <div>
        <h1>Hello world!</h1>
        <Link to="/todos">Todos</Link>
    </div>;

const Root = (props: {store: Store<TodosState>}) =>
    <Provider store={props.store}>
        <Router history={browserHistory}>
            <Route path="/" component={Hello}/>
            <Route path="/todos" component={App}/>
        </Router>
    </Provider>;

render(
    <Root store={store} />,
    document.getElementById('root')
);
