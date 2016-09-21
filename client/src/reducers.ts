import { Action, handleActions } from 'redux-actions';

import { update } from '../../shared/utils';
import { initialTodosState, TodosState, TodoItemState } from './state';
import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from './actions';

export const reducer = handleActions<TodosState, any>({
    [ADD_TODO]: (state: TodosState, action: Action<ADD_TODO>) =>
        [
            {
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                completed: false,
                text: action.payload.text
            },
            ...state
        ],

    [DELETE_TODO]: (state: TodosState, action: Action<DELETE_TODO>) =>
        state.filter(todo =>
            todo.id !== action.payload.id
        ),

    [COMPLETE_TODO]: (state: TodosState, action: Action<COMPLETE_TODO>) =>
        state.map(todo =>
            todo.id === action.payload.id
            ? update(todo, { completed: !todo.completed })
            : todo
        )
},
initialTodosState);
