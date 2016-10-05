import * as React from 'react';
import { Router }  from 'react-router';

import { stringToVisibility } from '../state';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';

interface AppProps {
    params: Router.Params
}

export default (props: AppProps) => <div>
    <AddTodo />
    <VisibleTodoList filter={stringToVisibility(props.params['filter'])} />
    <Footer />
</div>
