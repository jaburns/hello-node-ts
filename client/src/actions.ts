import { Action } from 'redux-actions';

export const ADD_TODO = 'ADD_TODO';
export interface ADD_TODO { text: string; }

export const addTodo = (text: string): Action<ADD_TODO> => ({
    type: ADD_TODO,
    payload: { text }
});


export const DELETE_TODO = 'DELETE_TODO';
export interface DELETE_TODO { id: number; }

export const deleteTodo = (id: number): Action<DELETE_TODO> => ({
    type: DELETE_TODO,
    payload: { id }
});


export const COMPLETE_TODO = 'COMPLETE_TODO';
export interface COMPLETE_TODO { id: number; }

export const completeTodo = (id: number): Action<COMPLETE_TODO> => ({
    type: COMPLETE_TODO,
    payload: { id }
});
