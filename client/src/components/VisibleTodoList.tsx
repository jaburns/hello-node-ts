import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouterProps } from '../typefix/react-redux';

import { TodosState, stringToVisibility } from '../state';
import { completeTodo } from '../actions';
import TodoList, { TodoListProps } from './TodoList';
import { getVisibleTodos } from '../reducers';


const mapState = (state: TodosState, ownProps: RouterProps) => ({
    todos: getVisibleTodos(
        state.todos,
        stringToVisibility(ownProps.params['filter'])
    )
});

const mapDispatch = {
    onTodoClick: completeTodo
};

export default withRouter<{}>(connect(mapState, mapDispatch)(TodoList));
