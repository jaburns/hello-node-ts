import * as assign from 'lodash/assign';
import { TodosState, TodoItemState } from './state';

import {
    AddTodoAction,
    DeleteTodoAction,
    CompleteTodoAction,
    OtherAction
} from './actions';

type PossibleAction =
    AddTodoAction
  | DeleteTodoAction
  | CompleteTodoAction
  | OtherAction;

export default function(state: TodosState = [], action: PossibleAction): TodosState {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
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
}
