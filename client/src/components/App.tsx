import * as React from 'react';
import { Router }  from 'react-router';

import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';


export default () => <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
</div>
