import * as React from 'react';
import { ReactNode } from 'react';
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

// ------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------

interface TodosProps {
    todos: TodoItemState[];
    visibilityFilter: Visibility;

    addTodo: AddTodoFunc;
    completeTodo: CompleteTodoFunc;
    deleteTodo: DeleteTodoFunc;
}

const Todos = (() => {
    const mapState = (state: TodosState) => ({
        todos: state.todos,
        visibilityFilter: state.visibilityFilter
    });

    const mapDispatch = {
        addTodo,
        completeTodo,
        deleteTodo,
    };

    return connect(mapState, mapDispatch)((props: TodosProps) =>
        <div>
            <h1>Todo App</h1>
            <p><Link to="/">Back to hello</Link></p>

            <AddTodo onAddClick={props.addTodo} />
            <TodoList todos={getVisibleTodos(props.todos, props.visibilityFilter)} onTodoClick={props.completeTodo} />
            <Footer />
        </div>
    );
})();

export default Todos;

// ------------------------------------------------------------------------------------

const Footer = () =>
    <p>
        Show:
        {' '}
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
        {', '}
        <FilterLink filter="SHOW_ALL">All</FilterLink>
    </p>

// ------------------------------------------------------------------------------------

interface FilterLinkOwnProps {
    filter: Visibility
}

interface FilterLinkProps {
    active: boolean;
    children?: ReactNode;

    setVisibilityFilter: SetVisibilityFilterFunc;
}

const FilterLink = (() => {
    const mapState = (state: TodosState, ownProps: FilterLinkOwnProps) => ({
        active: state.visibilityFilter === ownProps.filter
    });

    const mapDispatch = {
        setVisibilityFilter
    };

    return connect(mapState, mapDispatch)((props: FilterLinkProps & FilterLinkOwnProps) => {
        if (props.active) {
            return <span>{props.children}</span>
        }
        return <a
            href="#"
            onClick={e => {
                e.preventDefault();
                props.setVisibilityFilter(props.filter);
            }}>
                {props.children}
        </a>
    });
})();

// ------------------------------------------------------------------------------------

interface AddTodoProps {
    onAddClick: (text:String) => void;
}

const AddTodo = (props: AddTodoProps) => {
    let inputElem: HTMLInputElement;

    return <div>
        <input ref={x => { inputElem = x; }} />
        <button
            onClick={() => {
                props.onAddClick(inputElem.value);
                inputElem.value = '';
            }}>
                Add Todo
        </button>
    </div>;
};

// ------------------------------------------------------------------------------------

interface TodoProps {
    onClick: () => void;
    completed: boolean;
    text: string;
}

const Todo = (props: TodoProps) =>
    <li
        onClick={props.onClick}
        style={{ textDecoration: props.completed ? 'line-through' : 'none' }}>
            {props.text}
    </li>;

// ------------------------------------------------------------------------------------

interface TodoListProps {
    todos: TodoItemState[];
    onTodoClick: (id:string) => void;
}

const TodoList = (props: TodoListProps) =>
    <ul>
        {props.todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => props.onTodoClick(todo.id)} />
        )}
    </ul>;

// ------------------------------------------------------------------------------------
