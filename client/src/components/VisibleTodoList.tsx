import * as React from 'react';
import { connect } from 'react-redux';

import { TodosState, TodoItemState, Visibility } from '../state';
import { completeTodo, CompleteTodoFunc, } from '../actions';


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

interface VisibleTodoListProps {
    todos: TodoItemState[];
    visibilityFilter: Visibility;
    completeTodo: CompleteTodoFunc;
}

const mapState = (state: TodosState) => ({
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
});

const mapDispatch = {
    completeTodo
};

export default connect(mapState, mapDispatch)((props: VisibleTodoListProps) => {
    const visibleTodos = getVisibleTodos(props.todos, props.visibilityFilter);

    return <ul>
        {visibleTodos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => props.completeTodo(todo.id)} />
        )}
    </ul>;
});
