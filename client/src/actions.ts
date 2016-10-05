// const { v4 } = require('node-uuid');

export type OtherAction = { type: '' };
export const OtherAction: OtherAction = { type: '' };


export interface AddTodoAction {
    type: 'ADD_TODO';
    id: string;
    text: string;
}

export type AddTodoFunc = (text: string) => AddTodoAction;
export const addTodo: AddTodoFunc = text => ({
    type: 'ADD_TODO',
    id: Math.random().toString().substr(2),
    text
});


export interface DeleteTodoAction {
    type: 'DELETE_TODO';
    id: string;
}

export type DeleteTodoFunc = (id: string) => DeleteTodoAction;
export const deleteTodo: DeleteTodoFunc = id => ({
    type: 'DELETE_TODO',
    id
});


export interface CompleteTodoAction {
    type: 'COMPLETE_TODO';
    id: string;
}

export type CompleteTodoFunc = (id: string) => CompleteTodoAction;
export const completeTodo: CompleteTodoFunc = id => ({
    type: 'COMPLETE_TODO',
    id
});


