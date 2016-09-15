import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello, CommentList } from './components';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
        <Route path="/comments" component={CommentList}/>
    </Router>,
    document.getElementById('app')
);
