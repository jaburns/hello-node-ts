
export type ADD_TODO = 'ADD_TODO';
export const ADD_TODO: ADD_TODO = 'ADD_TODO';
export interface AddTodoAction {
    type: ADD_TODO;
    text: string;
}
export const addTodo = (text: string): AddTodoAction => ({
    type: ADD_TODO,
    text
});


export type DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO: DELETE_TODO = 'DELETE_TODO';
export type DeleteTodoAction = {
    type: DELETE_TODO,
    id: number;
};
export const deleteTodo = (id: number): DeleteTodoAction => ({
    type: DELETE_TODO,
    id
});

export type COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_TODO: COMPLETE_TODO = 'COMPLETE_TODO';
export type CompleteTodoAction = {
    type: COMPLETE_TODO,
    id: number;
};
export const completeTodo = (id: number): CompleteTodoAction => ({
    type: COMPLETE_TODO,
    id
});

export type OtherAction = { type: '' };
export const OtherAction: OtherAction = { type: '' };
