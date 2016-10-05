import * as React from 'react';
import { connect, MapDispatchToPropsObject } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { TodosState, TodoItemState, Visibility } from './state';
import {
    addTodo, AddTodoFunc,
    completeTodo, CompleteTodoFunc,
    deleteTodo, DeleteTodoFunc,
    setVisibilityFilter, SetVisibilityFilterFunc
} from './actions';

interface StateProps {
    todos: TodoItemState[];
    visibilityFilter: Visibility;
}

interface DispatchProps {
    addTodo: AddTodoFunc;
    completeTodo: CompleteTodoFunc;
    deleteTodo: DeleteTodoFunc;
    setVisibilityFilter: SetVisibilityFilterFunc;
}

const mapStateToProps = (state: TodosState) => ({
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = {
    addTodo,
    completeTodo,
    deleteTodo,
    setVisibilityFilter
};

interface FilterProps {
    onClick: () => void,
    children?: React.ReactNode
};

const FilterLink = (props: FilterProps) =>
    <a href="#"
        onClick={e => {
            e.preventDefault();
            props.onClick();
        }}
    >
        {props.children}
    </a>;

const getVisibleTodos = (todos: TodoItemState[], visibility: Visibility) :TodoItemState[] => {
    switch (visibility) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(t =>  t.completed);
    }
};

export default connect(mapStateToProps, mapDispatchToProps)((props: StateProps & DispatchProps) => {
    const visibleTodos = getVisibleTodos(props.todos, props.visibilityFilter);

    const vals = visibleTodos.map(todo => <div>
        <button onClick={() => props.deleteTodo(todo.id)}> X </button>
        <li onClick={() => props.completeTodo(todo.id)}>
            {todo.text + (todo.completed ? ' X': '')}
        </li>
    </div>);

    return <div>
        <h1>Todo App</h1>
        <Link to="/">Back to hello</Link>
        <button onClick={() => { props.addTodo('new TODO'); }}>
            Add
        </button>
        <FilterLink onClick={() => { props.setVisibilityFilter('SHOW_ACTIVE'); }}>Active</FilterLink>
        <FilterLink onClick={() => { props.setVisibilityFilter('SHOW_ALL'); }}>All</FilterLink>
        <FilterLink onClick={() => { props.setVisibilityFilter('SHOW_COMPLETED'); }}>Completed</FilterLink>
        {vals}
    </div>;
});
