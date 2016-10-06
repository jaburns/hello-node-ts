import * as React from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { withRouter, RouterProps } from '../typefix/react-redux';

import { TodosState, TodoItemState, Visibility, stringToVisibility } from '../state';
import { completeTodo, CompleteTodoFunc } from '../actions';
import TodoList, { TodoListProps } from './TodoList'


const getVisibleTodos = (todos: TodoItemState[], visibility: Visibility) :TodoItemState[] => {
    switch (visibility) {
        case 'all':
            return todos;
        case 'active':
            return todos.filter(t => !t.completed);
        case 'completed':
            return todos.filter(t =>  t.completed);
    }
};


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
