import * as React from 'react';
import { Store } from 'redux';
import { Router, Route, Link, browserHistory } from 'react-router';

import createProvider from './utils/provider';
import Todos from './Todos';
import { TodosState } from './state';

const Provider = createProvider();

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

export default (props: {store: Store<TodosState | undefined>}) =>
    <Provider store={props.store} target={Root} />;
