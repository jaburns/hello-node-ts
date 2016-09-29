import { update } from '../../shared/utils';
import { initialTodosState, TodosState, TodoItemState } from './state';

import {
    ADD_TODO, AddTodoAction,
    DELETE_TODO, DeleteTodoAction,
    COMPLETE_TODO, CompleteTodoAction,
    OtherAction
} from './actions';

type PossibleAction =
    AddTodoAction
  | DeleteTodoAction
  | CompleteTodoAction
  | OtherAction;

export default function(state: TodosState = initialTodosState, action: PossibleAction): TodosState {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                },
                ...state
            ];

        case DELETE_TODO:
            return state.filter(todo =>
                todo.id !== action.id
            );

        case COMPLETE_TODO:
            return state.map(todo =>
                todo.id === action.id
                ? update(todo, { completed: !todo.completed })
                : todo
            );

        default:
            return state;
    }
}
