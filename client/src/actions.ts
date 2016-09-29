
export type ADD_TODO = 'ADD_TODO';
export const ADD_TODO: ADD_TODO = 'ADD_TODO';
export type AddTodoAction = {
    type: ADD_TODO,
    text: string;
};

export type DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO: DELETE_TODO = 'DELETE_TODO';
export type DeleteTodoAction = {
    type: DELETE_TODO,
    id: number;
};

export type COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_TODO: COMPLETE_TODO = 'COMPLETE_TODO';
export type CompleteTodoAction = {
    type: COMPLETE_TODO,
    id: number;
};

export type OtherAction = { type: '' };
export const OtherAction: OtherAction = { type: '' };
