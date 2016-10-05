import * as React from 'react';
import { connect } from 'react-redux';

import { TodosState, TodoItemState, Visibility } from '../state';
import { completeTodo, CompleteTodoFunc } from '../actions';


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

interface VisibleTodoListConf {
    filter: Visibility
}

interface VisibleTodoListProps {
    todos: TodoItemState[];
    completeTodo: CompleteTodoFunc;
}

const mapState = (state: TodosState, ownProps: VisibleTodoListConf) => ({
    todos: getVisibleTodos(state.todos, ownProps.filter)
});

const mapDispatch = {
    completeTodo
};

export default connect(mapState, mapDispatch)((props: VisibleTodoListProps & VisibleTodoListConf) => {
    return <ul>
        {props.todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => props.completeTodo(todo.id)} />
        )}
    </ul>;
});
