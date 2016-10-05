import * as React from 'react';
import { Store } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import { TodosState } from '../state';
import { Provider } from 'react-redux';


export default (props: {store: Store<TodosState | undefined>}) =>
    <Provider store={props.store}>
        <Router history={browserHistory}>
            <Route path="/(:filter)" component={App}/>
        </Router>
    </Provider>;
