import * as React from 'react';
import { Store } from 'redux';
import { Router, Route, Link, browserHistory } from 'react-router';

import Todos from './Todos';
import { TodosState } from './state';
import { Provider } from 'react-redux';

const Hello = () =>
    <div>
        <h1>Hello world!</h1>
        <Link to="/todos">Todos</Link>
    </div>;

export default (props: {store: Store<TodosState | undefined>}) =>
    <Provider store={props.store}>
        <Router history={browserHistory}>
            <Route path="/" component={Hello}/>
            <Route path="/todos" component={Todos}/>
        </Router>
    </Provider>;
