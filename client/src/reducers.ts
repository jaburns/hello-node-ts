import { Reducer, combineReducers } from 'redux';
import * as assign from 'lodash/assign';
import { TodosState, TodoItemState, Visibility } from './state';

import {
    AddTodoAction,
    DeleteTodoAction,
    CompleteTodoAction,
    OtherAction
} from './actions';

type TodoAction = AddTodoAction | DeleteTodoAction | CompleteTodoAction | OtherAction;

const todosReducer = (state: TodoItemState[] = [], action: TodoAction) :TodoItemState[] => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                {
                    id: action.id,
                    completed: false,
                    text: action.text
                },
                ...state
            ];

        case 'DELETE_TODO':
            return state.filter(todo =>
                todo.id !== action.id
            );

        case 'COMPLETE_TODO':
            return state.map(todo =>
                todo.id === action.id
                ? assign({}, todo, { completed: !todo.completed })
                : todo
            );

        default:
            return state;
    }
};

export const getVisibleTodos = (todos: TodoItemState[], visibility: Visibility) :TodoItemState[] => {
    switch (visibility) {
        case 'all':
            return todos;
        case 'active':
            return todos.filter(t => !t.completed);
        case 'completed':
            return todos.filter(t =>  t.completed);
    }
};

export default combineReducers<TodosState>({
    todos: todosReducer
});
