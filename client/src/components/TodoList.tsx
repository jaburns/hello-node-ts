import * as React from 'react';

import { TodoItemState } from '../state';
import Todo from './Todo';


export interface TodoListProps {
    todos: TodoItemState[];
    onTodoClick: (id:string) => void;
};

export default (props: TodoListProps) =>
    <ul>
        {props.todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => props.onTodoClick(todo.id)} />
        )}
    </ul>;
